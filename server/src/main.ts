import { serveViteMode } from "@navikt/vite-mode";
import timeout from "connect-timeout";
import cors from "cors";
import express from "express";
import helmet from "helmet";

// for debugging during development
import config from "./config.js";
import { addHeaders } from "./headers.js";
import logger from "./logger.js";
import { getUserGroups, getUserInfoFromGraphApi } from "./msgraph.js";
import reverseProxy from "./reverse-proxy.js";
import { verifyToken } from "./tokenValidation.js";

const server = express();
const { port } = config.server;

const globalErrorHandler = (err, req, res) => {
  logger.warning(err.stack);
  res.status(err.status || 500).send({ error: err });
};

async function startApp() {
  try {
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
          req.headers.authorization,
        );
        return res.json(userInfo);
      } catch (error) {
        return next(error);
      }
    });

    // return groups that the user is a member of from the Microsoft Graph API
    server.get("/me/memberOf", async (req, res, next) => {
      try {
        const userInfo = await getUserInfoFromGraphApi(
          req.headers.authorization,
        );
        return res.json(userInfo);
      } catch (error) {
        return next(error);
      }
    });

    reverseProxy.setup(server);

    serveViteMode(server, { port: "9010" });

    // serve static files
    const rootDir = "./dist";
    server.use(express.static(rootDir));
    server.use(/^\/(?!.*dist).*$/, (req, res) => {
      res.sendFile("index.html", { root: rootDir });
    });

    server.use(globalErrorHandler);

    server.listen(port, () => logger.info(`Listening on port ${port}`));
  } catch (error) {
    logger.error("Error during start-up: ", error);
  }
}

startApp().catch((error) => logger.error(error));
