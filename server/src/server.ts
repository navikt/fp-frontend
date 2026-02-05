import path from "node:path";

import { serveViteMode } from "@navikt/vite-mode";
import compression from "compression";
import timeout from "connect-timeout";
import cors from "cors";
import express from "express";
import helmet from "helmet";

// for debugging during development
import config from "./config.js";
import { addHeaders } from "./headers.js";
import logger from "./logger.js";
import { getUserGroups, getUserInfoFromGraphApi } from "./msgraph.js";
import { setupProxies } from "./reverse-proxy.js";
import { verifyToken } from "./tokenValidation.js";

const server = express();
const { port } = config.server;
const spaFilePath = path.resolve("./public", "index.html");

function startApp() {
  server.use(timeout("10m"));
  addHeaders(server);

  // Logging i json format
  server.use(logger.morganMiddleware);

  server.set("trust proxy", 1);

  server.use(
    helmet({
      contentSecurityPolicy: {
        useDefaults: false,
        directives: {
          "default-src": ["'self'"],
          "base-uri": ["'self'"],
          "connect-src": [
            "'self'",
            "https://sentry.gc.nav.no",
            "https://graph.microsoft.com",
          ],
          "font-src": ["'self'", "https://cdn.nav.no", "data:"],
          "img-src": ["'self'", "data:"],
          "style-src": ["'self'", "'unsafe-inline'"],
          "frame-src": ["'self'"],
          "child-src": ["'self'"],
          "media-src": ["'none'"],
          "object-src": ["'none'"],
        },
      },
      referrerPolicy: { policy: "origin" },
      hidePoweredBy: true,
      noSniff: true,
    }),
  );

  // CORS konfig
  server.use(
    cors({
      origin: config.server.host,
      methods: config.cors.allowedMethods,
      exposedHeaders: config.cors.exposedHeaders,
      allowedHeaders: config.cors.allowedHeaders,
    }),
  );

  // Liveness and readiness probes for Kubernetes / nais
  server.get(["/health/isAlive", "/health/isReady"], (req, res) => {
    res.status(200).send("Alive");
  });

  server.get(["/oauth2/login"], async (req, res) => {
    res.status(502).send({
      message: "Wonderwall must handle /oauth2/login",
    });
  });

  // The routes below require the user to be authenticated
  server.use(verifyToken);

  server.get(["/logout"], async (req, res) => {
    if (req.headers.authorization) {
      res.redirect("/oauth2/logout");
    }
  });

  // return user info fetched from the Microsoft Graph API
  server.get("/me", async (req, res, next) => {
    try {
      const userInfo = await getUserInfoFromGraphApi(
        req.headers.authorization ?? "Fant ikke authorization header",
      );
      res.json(userInfo);
      return;
    } catch (error) {
      return next(error);
    }
  });

  // return groups that the user is a member of from the Microsoft Graph API
  server.get("/me/memberOf", async (req, res, next) => {
    try {
      const userInfo = await getUserGroups(
        req.headers.authorization ?? "Fant ikke authorization header",
      );
      res.json(userInfo);
      return;
    } catch (error) {
      return next(error);
    }
  });

  setupProxies(server);

  serveViteMode(server, { port: "9010" });

  // serve static files
  server.use(compression());
  server.use(express.static("./public"));
  server.use("*splat", (request, response) => {
    // Siden dette er et internt system med begrenset antall brukere anser vi å sette en rate-limiter som en unødvendig fallgruve. Ignorer dermed denne sonarklagen.
    response.sendFile(spaFilePath); // NOSONAR: "Missing rate limiting".
  });

  server.listen(port, () => logger.info(`Listening on port ${port}`));
}

try {
  startApp();
} catch (error) {
  logger.error("Oppstart av server feilet", error);
}
