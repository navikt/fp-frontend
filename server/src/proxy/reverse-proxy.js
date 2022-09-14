import proxy from 'express-http-proxy';
import url from 'url';
import authUtils from '../auth/utils.js';
import config from '../config.js';
import logger from '../log.js';
import { getRedirectUriFromHeader } from '../redirectUri.js';
import { ulid } from 'ulid'

const xNavCallId = 'x_Nav-CallId';
const xTimestamp = 'x-Timestamp';

const proxyOptions = (api, authClient) => ({
  filter: (req, res) => {
    logger.debug(`Proxy URL ${api.url}.`);
    const authenticated = authUtils.hasValidAccessToken(req);
    logger.debug(`Authenticated = ${authenticated}`);
    if (!authenticated) {
      logger.info("Ikke logget inn. Sender til innlogging. (proxy path)");
      const redirectUri = getRedirectUriFromHeader({ request: req });
      res.header('Location', `${config.server.host}/login?redirect_uri=${redirectUri}`);
      res.sendStatus(401);
    }
    return authenticated;
  },
  proxyReqOptDecorator: (options, req) => {
    if (req.headers[xNavCallId]) {
      options.headers[xNavCallId] = req.headers[xNavCallId];
    } else {
      options.headers[xNavCallId] = ulid();
    }
    options.headers[xTimestamp] = Date.now();
    return new Promise(((resolve, reject) => authUtils.getOnBehalfOfAccessToken(
      authClient, req, api.id, api.scopes
    )
      .then((access_token) => {
        options.headers['Authorization'] = `Bearer ${access_token}`;
        resolve(options);
      },
      (error) => reject(error))
    ));
  },
  proxyReqPathResolver: (req) => {
    const urlFromApi = url.parse(api.url);
    const pathFromApi = (urlFromApi.pathname === '/' ? '' : urlFromApi.pathname);

    const urlFromRequest = url.parse(req.originalUrl);
    const pathFromRequest = urlFromRequest.pathname;

    const queryString = urlFromRequest.query;
    const newPath = (pathFromApi || '') + (pathFromRequest || '') + (queryString ? `?${queryString}` : '');

    logger.info(`Proxying request from '${req.originalUrl}' to '${stripTrailingSlash(urlFromApi.href)}${newPath}'`);
    return newPath;
  },
  proxyErrorHandler: function(err, res, next) {
    switch (err && err.code) {
      case '401':    { return res.status(401).json('{"feilmelding":"Bruker ikke innlogget","type":"MANGLER_TILGANG_FEIL"}'); }
      case '403':    { return res.status(403).json('{"feilmelding":"Timet ut","type":"GENERELL_FEIL"}'); }
      case '404':    { return res.status(404).json('{"feilmelding":"Kunne ikke finne ressursen, beklager.","type":"IKKE_FUNNET_FEIL"}'); }
      case '504':    { return res.status(504).json('{"feilmelding":"Timet ut","type":"GENERELL_FEIL"}'); }
      default:       { next(err); }
    }
  },
  userResHeaderDecorator: function(headers, userReq, userRes, proxyReq, proxyRes) {
    const statusCode = proxyRes.statusCode;
    const requestTime = Date.now() - proxyReq.getHeader(xTimestamp);
    const melding = `${statusCode} ${proxyRes.statusMessage}: ${userReq.method} - ${userReq.originalUrl} (${requestTime}ms)`;
    const callIdValue = proxyReq.getHeader(xNavCallId);
    if (statusCode >= 500) {
      logger.error(melding, {message: callIdValue});
    } else {
      logger.info(melding);
    }
    return headers;
  },
});

const stripTrailingSlash = (str) => (str.endsWith('/') ? str.slice(0, -1) : str);

const setup = (router, authClient) => {
  config.reverseProxyConfig.apis.forEach((api) => {
    router.use(`${api.path}/*`, proxy(api.url, proxyOptions(api, authClient)));
  });
};

export default { setup };
