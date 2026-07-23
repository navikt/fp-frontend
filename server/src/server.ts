import path from "node:path";
import fs from "node:fs";

import { serveViteMode } from "@navikt/vite-mode";
import cors from "cors";
import express from "express";
import helmet from "helmet";

import { serveKomprimerteFilerHvisMulig } from "./compression.js";
// for debugging during development
import config from "./config.js";
import { addHeaders } from "./headers.js";
import logger from "./logger.js";
import { getUserGroups, getUserInfoFromGraphApi } from "./msgraph.js";
import { setupProxies } from "./reverse-proxy.js";
import { verifyToken } from "./tokenValidation.js";

const server = express();
const { port, viteModePort } = config.server;
const spaFilePath = path.resolve("./public", "index.html");

const replaceNaisMetaTags = (html: string) => {
  const metaTags = [
    { name: 'nais-telemetry-url', content: process.env.NAIS_FRONTEND_TELEMETRY_COLLECTOR_URL },
    { name: 'nais-app', content: process.env.NAIS_APP_NAME },
    { name: 'nais-team', content: process.env.NAIS_TEAM ?? process.env.NAIS_NAMESPACE },
    { name: 'nais-cluster', content: process.env.NAIS_CLUSTER_NAME },
    { name: 'nais-version', content: process.env.NAIS_APP_IMAGE?.split(':').at(-1) },
  ];

  const tags = metaTags
    .filter((tag): tag is { name: string; content: string } => Boolean(tag.content))
    .map((tag) => `<meta name="${tag.name}" content="${tag.content}" />`)
    .join('\n    ');

  return html.replaceAll('{{{NAIS_META_TAGS}}}', tags);
};

let renderedHtml: string | null = null;
try {
  renderedHtml = replaceNaisMetaTags(fs.readFileSync(spaFilePath, 'utf-8'));
} catch {
  // File doesn't exist in local dev; serveViteMode handles that case
}

function startApp() {
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
            "https://telemetry.nav.no",
            "https://telemetry.ekstern.dev.nav.no",
            "https://cdn.nav.no",
          ],
          "font-src": ["'self'", "https://cdn.nav.no", "data:"],
          "img-src": ["'self'", "data:"],
          "script-src": ["'self'", "https://cdn.nav.no"],
          "style-src": ["'self'", "'unsafe-inline'", "https://cdn.nav.no"],
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

  serveViteMode(server, { port: viteModePort });

  // Server ferdig komprimerte gzip/br filer hvis mulig.
  server.use(serveKomprimerteFilerHvisMulig);
  // serve static files
  server.use(express.static("./public", { index: false }));
  server.use("*splat", (request, response) => {
    if (renderedHtml) {
      response.send(renderedHtml);
    } else {
      response.sendFile(spaFilePath); // NOSONAR: "Missing rate limiting".
    }
  });

  server.listen(port, () => logger.info(`Listening on port ${port}`));
}

try {
  startApp();
} catch (error) {
  logger.error("Oppstart av server feilet", error);
}
