import proxy from 'express-http-proxy';
import url from 'url';
import authUtils from './auth/utils.js';
import config from './config.js';
import logger from './log.js';
import { ulid } from 'ulid';

const xNavCallId = 'x_Nav-CallId';
const xTimestamp = 'x-Timestamp';

const proxyOptions = (api, authClient) => ({
  timeout: 30000,
  proxyReqOptDecorator: (options, req) => {
    if (req.headers[xNavCallId]) {
      options.headers[xNavCallId] = req.headers[xNavCallId];
    } else {
      options.headers[xNavCallId] = ulid();
    }
    options.headers[xTimestamp] = Date.now();
    return new Promise(((resolve, reject) => authUtils.getOnBehalfOfAccessToken(authClient, req, api.scopes)
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
