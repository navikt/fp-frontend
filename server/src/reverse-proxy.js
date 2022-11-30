import proxy from 'express-http-proxy';
import url from 'url';
import { ulid } from 'ulid';

import { grantAzureOboToken } from './azure/grant.js';

import config from './config.js';
import logger from './log.js';

const xNavCallId = 'x_Nav-CallId';
const xTimestamp = 'x-Timestamp';
const stripTrailingSlash = (str) => (str.endsWith('/') ? str.slice(0, -1) : str);

const proxyOptions = (api) => ({
  timeout: 10000,
  proxyReqOptDecorator: (options, req) => {
    if (req.headers[xNavCallId]) {
      options.headers[xNavCallId] = req.headers[xNavCallId];
    } else {
      options.headers[xNavCallId] = ulid();
    }
    const requestTime = Date.now();
    options.headers[xTimestamp] = requestTime;
    options.headers.cookie = '';
    // eslint-disable-next-line no-promise-executor-return
    return new Promise(((resolve, reject) => grantAzureOboToken(req.headers.authorization, api.scopes)
      .then((accessToken) => {
        logger.info(`Token veksling tok: (${Date.now() - requestTime}ms)`);
        // eslint-disable-next-line camelcase
        options.headers.Authorization = `Bearer ${accessToken}`;
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
  userResHeaderDecorator: (headers, userReq, userRes, proxyReq, proxyRes) => {
    // FPSAK og TILBAKE sender er redirect med full hostname - dette må man modifisere slik at det går tilbake via proxy.
    const location = proxyRes.headers.location;
    if (location && location.includes(api.url)) {
      headers.location = location.split(api.url)[1];
      logger.debug(`Location header etter endring: ${headers.location}`);
    }
    const { statusCode } = proxyRes;
    const requestTime = Date.now() - proxyReq.getHeader(xTimestamp);
    const melding = `${statusCode} ${proxyRes.statusMessage}: ${userReq.method} - ${userReq.originalUrl} (${requestTime}ms)`;
    const callIdValue = proxyReq.getHeader(xNavCallId);
    if (statusCode >= 500) {
      logger.warning(melding, { message: callIdValue });
    } else {
      logger.info(melding);
    }
    return headers;
  },
  proxyErrorHandler: function(err, res, next) {
    switch (err && err.code) {
      case 'ENOTFOUND': { logger.warning(`${err}, with code: ${err.code}`); return res.status(404).send(); }
      case 'ECONNRESET': { return res.status(504).send(); }
      case 'ECONNREFUSED': { return res.status(500).send(); }
      default: { logger.warning(`${err}, with code: ${err.code}`); next(err); }
    }
  },
});

// eslint-disable-next-line func-names
const timedOut = function (req, res, next) {
  if (!req.timedout) {
    next();
  } else {
    logger.warning(`Request for ${req.originalUrl} timed out!`);
  }
};

const setup = (router) => {
  config.reverseProxyConfig.apis.forEach((api) => {
    router.use(`${api.path}/*`, timedOut, proxy(api.url, proxyOptions(api)));
  });
};

export default { setup };
