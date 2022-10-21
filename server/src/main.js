import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import limit from './ratelimit.js';
import * as headers from "./headers.js";
import logger from './log.js';
import { getIssuer } from './azure/issuer.js';

// for debugging during development
import config from './config.js';
import msgraph from "./azure/msgraph.js";
import reverseProxy from "./reverse-proxy.js";
import {validateAuthorization} from "./azure/validate.js";

const server = express();
const { port } = config.server;

async function startApp() {
  try {
    headers.setup(server);

    // Logging i json format
    server.use(logger.morganMiddleware);

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.use(limit);

    server.set("trust proxy", 1);

    server.use(
      helmet({
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            connectSrc: [
              "'self'",
              'https://sentry.gc.nav.no',
              'https://graph.microsoft.com'
            ],
            frameSrc: ["'none'"],
            childSrc: ["'none'"],
            mediaSrc: ["'none'"],
            objectSrc: ["'none'"],
          },
        },
        hidePoweredBy: true,
        noSniff: true
      }),
    );

    // CORS konfig
    server.use(
      cors({
        origin: config.server.host,
        methods: config.cors.allowedMethods,
        exposedHeaders: config.cors.exposedHeaders,
        allowedHeaders: config.cors.allowedHeaders
      })
    );

    const issuer = await getIssuer();

    // Liveness and readiness probes for Kubernetes / nais
    server.get(['/isAlive', '/isReady'], (req, res) => {
      res.status(200).send('Alive');
    });

    server.get(["/oauth2/login"], async (req, res) => {
      res.status(502).send({
        message: "Wonderwall must handle /oauth2/login",
      });
    });

    const ensureAuthenticated = async (req, res, next) => {
      const {authorization} = req.headers;
      const loginPath = `/oauth2/login?redirect=${req.originalUrl}`;
      if (!authorization) {
         logger.debug("User token missing. Redirect til login.")
         res.redirect(loginPath);
      } else {
        // Validate token and continue to app
        if (await validateAuthorization(authorization)) {
          logger.debug("User token is valid. Continue.")
          next();
        } else {
          logger.debug("User token is NOT valid. Redirect til login.")
          res.redirect(loginPath);
        }
      }
    };

    // The routes below require the user to be authenticated
    server.use(ensureAuthenticated);

    server.get('/ip', (req, res) => res.send(req.ip))
    server.get('/json', (req, res) => res.send(req))

    server.get(["/logout"], async (req, res) => {
      if (req.headers.authorization) {
        res.redirect("/oauth2/logout");
      }
    });

    logger.debug("OK.")

    // return user info fetched from the Microsoft Graph API
    server.get('/me', (req, res) => {
      msgraph.getUserInfoFromGraphApi(req.headers.authorization)
        .then((userinfo) => res.json(userinfo))
        .catch((err) => res.status(500)
          .json(err));
    });

    // return groups that the user is a member of from the Microsoft Graph API
    server.get('/me/memberOf', (req, res) => {
      msgraph.getUserGroups(req.headers.authorization)
        .then((userinfo) => res.json(userinfo))
        .catch((err) => res.status(500)
          .json(err));
    });

    reverseProxy.setup(server);

    // serve static files
    const rootDir = '.';
    server.use(express.static(rootDir));
    server.use('/', (req, res) => {
      res.sendFile('index.html', { root: rootDir });
    });

    server.listen(port, () => logger.info(`Listening on port ${port}`));
  } catch (error) {
    logger.error('Error during start-up: ', error);
  }
}

startApp()
  .catch((err) => logger.error(err));
