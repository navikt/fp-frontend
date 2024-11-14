import url from "node:url";

import { getToken, requestAzureOboToken } from "@navikt/oasis";
import { NextFunction, Request, Response, Router } from "express";
import proxy from "express-http-proxy";

import config from "./config.js";
import logger from "./logger.js";

const xTimestamp = "x-Timestamp";
const stripTrailingSlash = (str) =>
  str.endsWith("/") ? str.slice(0, -1) : str;

const proxyOptions = (api) => ({
  parseReqBody: false,
  timeout: 60_000,
  proxyReqOptDecorator: (options, req) => {
    const requestTime = Date.now();
    options.headers[xTimestamp] = requestTime;
    delete options.headers.cookie;
    return new Promise((resolve, reject) => {
      // Vi har allerede validert token før vi kommer hit. Så dette burde aldri inntreffe
      const token = getToken(req);
      if (!token) {
        logger.warning(
          "Fant ikke Wonderwall token ved OBO-utveksling. Dette burde ikke inntreffe",
        );
        reject("Intet Wonderwall token");
      }
      requestAzureOboToken(token, api.scopes).then((obo) => {
        if (obo.ok) {
          logger.info(`Token veksling tok: (${Date.now() - requestTime}ms)`);
          options.headers.Authorization = `Bearer ${obo.token}`;
          resolve(options);
        } else {
          logger.warning(`OBO-utveklsing for ${api.scopes} feilet.`);
          reject(obo.error);
        }
      });
    });
  },
  proxyReqPathResolver: (req) => {
    const urlFromApi = url.parse(api.url);
    const pathFromApi = urlFromApi.pathname === "/" ? "" : urlFromApi.pathname;

    const urlFromRequest = url.parse(req.originalUrl);
    const pathFromRequest = urlFromRequest.pathname;

    const queryString = urlFromRequest.query;
    const newPath =
      (pathFromApi || "") +
      (pathFromRequest || "") +
      (queryString ? `?${queryString}` : "");

    logger.info(
      `Proxying request from '${req.originalUrl}' to '${stripTrailingSlash(urlFromApi.href)}${newPath}'`,
    );
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
    const callIdValue = proxyReq.getHeader("Nav-Callid");
    if (statusCode >= 500) {
      logger.logger.warn(melding, { "Nav-Callid": callIdValue });
    } else {
      logger.logger.info(melding, { "Nav-Callid": callIdValue });
    }
    return headers;
  },
  proxyErrorHandler: function (err, res, next) {
    switch (err && err.code) {
      case "ENOTFOUND": {
        logger.warning(`${err}, with code: ${err.code}`);
        return res.status(404).send();
      }
      case "ECONNRESET": {
        return res.status(504).send();
      }
      case "ECONNREFUSED": {
        return res.status(500).send();
      }
      default: {
        logger.warning(`${err}, with code: ${err.code}`);
        next(err);
      }
    }
  },
});

const setup = (router: Router) => {
  for (const api of config.reverseProxyConfig.apis) {
    router.use(
      `${api.path}/*`,
      (request, response, next) => {
        // TODO
        if (request.timedout) {
          logger.warning(`Request for ${response.originalUrl} timed out!`);
        } else {
          next();
        }
      },
      proxy(api.url, proxyOptions(api)),
    );
  }
};

export default { setup };
