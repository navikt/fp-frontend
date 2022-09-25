import proxy from 'express-http-proxy';
import url from 'url';
import { ulid } from 'ulid';

import { grantAzureOboToken } from './azure/grant.js';

import config from './config.js';
import logger from './log.js';

const xNavCallId = 'x_Nav-CallId';
const xTimestamp = 'x-Timestamp';

const proxyOptions = (api) => ({
  proxyReqOptDecorator: (options, req) => {
    if (req.headers[xNavCallId]) {
      options.headers[xNavCallId] = req.headers[xNavCallId];
    } else {
      options.headers[xNavCallId] = ulid();
    }
    const requestTime = Date.now();
    options.headers[xTimestamp] = requestTime;
    return new Promise(((resolve, reject) => grantAzureOboToken(req.headers.authorization, api.scopes)
      .then((access_token) => {
        logger.info(`Token veksling tok: (${Date.now() - requestTime}ms)`);
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
  userResHeaderDecorator: function(headers, userReq, userRes, proxyReq, proxyRes) {
    // FPSAK sender er redirect med full hostname - dette må man modifisere slik at det går tilbake via proxy.
    const location = proxyRes.headers.location;
    if (location && location.includes(api.url)) {
      headers.location = location.split(api.url)[1];
      logger.debug(`Location header etter endring: ${headers.location}`)
    }
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

const setup = (router) => {
  config.reverseProxyConfig.apis.forEach((api) => {
    router.use(`${api.path}/*`, proxy(api.url, proxyOptions(api)));
  });
};

export default { setup };
