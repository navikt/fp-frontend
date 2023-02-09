import proxy from 'express-http-proxy';
import url from 'url';

import { grantAzureOboToken } from './azure/grant.js';

import config from './config.js';
import log from './log.js';

const xTimestamp = 'x-Timestamp';
const stripTrailingSlash = (str) => (str.endsWith('/') ? str.slice(0, -1) : str);

const proxyOptions = (api) => ({
  timeout: 60000,
  proxyReqOptDecorator: (options, req) => {
    const requestTime = Date.now();
    options.headers[xTimestamp] = requestTime;
    delete options.headers.cookie;
    // eslint-disable-next-line no-promise-executor-return
    return new Promise(((resolve, reject) => grantAzureOboToken(req.headers.authorization, api.scopes)
      .then((accessToken) => {
        log.info(`Token veksling tok: (${Date.now() - requestTime}ms)`);
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

    log.info(`Proxying request from '${req.originalUrl}' to '${stripTrailingSlash(urlFromApi.href)}${newPath}'`);
    return newPath;
  },
  userResHeaderDecorator: (headers, userReq, userRes, proxyReq, proxyRes) => {
    // FPSAK og TILBAKE sender er redirect med full hostname - dette må man modifisere slik at det går tilbake via proxy.
    const location = proxyRes.headers.location;
    if (location && location.includes(api.url)) {
      headers.location = location.split(api.url)[1];
      log.debug(`Location header etter endring: ${headers.location}`);
    }
    const { statusCode } = proxyRes;
    const requestTime = Date.now() - proxyReq.getHeader(xTimestamp);
    const melding = `${statusCode} ${proxyRes.statusMessage}: ${userReq.method} - ${userReq.originalUrl} (${requestTime}ms)`;
    const callIdValue = proxyReq.getHeader('Nav-Callid');
    if (statusCode >= 500) {
      log.logger.warn(melding, { 'Nav-Callid': callIdValue });
    } else {
      log.logger.info(melding, { 'Nav-Callid': callIdValue });
    }
    return headers;
  },
  proxyErrorHandler: function(err, res, next) {
    switch (err && err.code) {
      case 'ENOTFOUND': { log.warning(`${err}, with code: ${err.code}`); return res.status(404).send(); }
      case 'ECONNRESET': { return res.status(504).send(); }
      case 'ECONNREFUSED': { return res.status(500).send(); }
      default: { log.warning(`${err}, with code: ${err.code}`); next(err); }
    }
  },
});

// eslint-disable-next-line func-names
const timedOut = function (req, res, next) {
  if (!req.timedout) {
    next();
  } else {
    log.warning(`Request for ${req.originalUrl} timed out!`);
  }
};

const setup = (router) => {
  config.reverseProxyConfig.apis.forEach((api) => {
    router.use(`${api.path}/*`, timedOut, proxy(api.url, proxyOptions(api)));
  });
};

export default { setup };
