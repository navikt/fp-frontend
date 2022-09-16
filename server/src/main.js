import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import limit from './ratelimit.js';
import * as headers from "./headers.js";
import logger from './log.js';

// for debugging during development
import config from './config.js';
import azure from './auth/azure.js';
import msgraph from "./auth/msgraph.js";
import reverseProxy from "./reverse-proxy.js";

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
              'https://graph.microsoft.com',
              'https://login.microsoft.com'
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
      if (!req.headers.authorization) {
        res.redirect(`/oauth2/login?redirect=${req.originalUrl}`);
      } else {
        // TODO: Validate the token https://doc.nais.io/security/auth/azure-ad/sidecar/#token-validation
        next();
      }
    };

    // The routes below require the user to be authenticated
    server.use(ensureAuthenticated);

    server.get(["/logout"], async (req, res) => {
      if (req.headers.authorization) {
        res.redirect("/oauth2/logout");
      }
    });

    // DO NOT DO THIS IN PRODUCTION
    server.get('/', (req, res) => {
      res.redirect("/oauth2/session");
    });

    const authClient = await azure.client();

    // return user info fetched from the Microsoft Graph API
    server.get('/me', (req, res) => {
      msgraph.getUserInfoFromGraphApi(authClient, req)
        .then((userinfo) => res.json(userinfo))
        .catch((err) => res.status(500)
          .json(err));
    });

    // return groups that the user is a member of from the Microsoft Graph API
    server.get('/me/memberOf', (req, res) => {
      msgraph.getUserGroups(authClient, req)
        .then((userinfo) => res.json(userinfo))
        .catch((err) => res.status(500)
          .json(err));
    });

    reverseProxy.setup(server, authClient);

    // serve static files
    server.use('/fpsak', express.static('/app/fpsak/'));
    server.use('*', (req, res) => {
      res.sendFile('index.html', { root: '/app/fpsak' });
    });

    server.listen(port, () => logger.info(`Listening on port ${port}`));
  } catch (error) {
    logger.error('Error during start-up: ', error);
  }
}

startApp()
  .catch((err) => logger.error(err));
