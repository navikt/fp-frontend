import url from "node:url";

import { getToken, requestAzureOboToken } from "@navikt/oasis";
import { Router } from "express";
import proxy, { ProxyOptions } from "express-http-proxy";

import config, { ProxyConfig } from "./config.js";
import logger from "./logger.js";

const xTimestamp = "x-Timestamp";
const stripTrailingSlash = (str: string) =>
  str.endsWith("/") ? str.slice(0, -1) : str;

const proxyOptions = (api: ProxyConfig["apis"][0]) =>
  ({
    parseReqBody: false,
    timeout: 60_000,
    proxyReqOptDecorator: (options, req) => {
      const requestTime = Date.now();

      // I tilfelle headers er undefined.
      options.headers = options.headers ?? {};

      options.headers[xTimestamp] = requestTime;
      delete options.headers.cookie;

      return new Promise((resolve, reject) => {
        // Vi har allerede validert token før vi kommer hit. Så dette burde aldri inntreffe
        const token = getToken(req);
        if (!token) {
          logger.warning(
            "Fant ikke Wonderwall token ved OBO-utveksling. Dette burde ikke inntreffe",
          );
          reject(new Error("Intet Wonderwall token"));
        }
        if (token) {
          requestAzureOboToken(token, api.scopes).then((obo) => {
            if (obo.ok) {
              logger.info(
                `Token veksling tok: (${Date.now() - requestTime}ms)`,
              );
              // I tilfelle headers er undefined.
              options.headers = options.headers ?? {};
              options.headers.Authorization = `Bearer ${obo.token}`;
              resolve(options);
            } else {
              logger.warning(`OBO-utveklsing for ${api.scopes} feilet.`);
              reject(obo.error); // NOSONAR: Sonarcloud forstår ikke at obo.error er et Error objekt. Dermed gir den en false positive.
            }
          });
        }
      });
    },
    proxyReqPathResolver: (req) => {
      const urlFromApi = url.parse(api.url);
      const pathFromApi =
        urlFromApi.pathname === "/" ? "" : urlFromApi.pathname;

      const urlFromRequest = url.parse(req.originalUrl);
      const pathFromRequest = urlFromRequest.pathname;

      const queryString = urlFromRequest.query;
      const newPath =
        (pathFromApi ?? "") +
        (pathFromRequest ?? "") +
        (queryString ? `?${queryString}` : "");

      logger.info(
        `Proxying request from '${req.originalUrl}' to '${stripTrailingSlash(urlFromApi.href)}${newPath}'`,
      );
      return newPath;
    },
    userResHeaderDecorator: (headers, userReq, userRes, proxyReq, proxyRes) => {
      // FPSAK og TILBAKE sender er redirect med full hostname - dette må man modifisere slik at det går tilbake via proxy.
      const location = proxyRes.headers.location;
      if (location?.includes(api.url)) {
        headers.location = location.split(api.url)[1];
        logger.debug(`Location header etter endring: ${headers.location}`);
      }
      const { statusCode } = proxyRes;
      const requestTime = Date.now() - Number(proxyReq.getHeader(xTimestamp));
      const melding = `${statusCode} ${proxyRes.statusMessage}: ${userReq.method} - ${userReq.originalUrl} (${requestTime}ms)`;
      const callIdValue = proxyReq.getHeader("Nav-Callid");
      if (Number(statusCode) >= 500) {
        logger.logger.warn(melding, { "Nav-Callid": callIdValue });
      } else {
        logger.logger.info(melding, { "Nav-Callid": callIdValue });
      }
      return headers;
    },
    proxyErrorHandler: function (err, res, next) {
      switch (err?.code) {
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
  }) satisfies ProxyOptions;

export const setupProxies = (router: Router) => {
  for (const api of config.reverseProxyConfig.apis) {
    router.use(
      `${api.path}/*splat`,
      (request, response, next) => {
        if (request.timedout) {
          logger.warning(`Request for ${request.originalUrl} timed out!`);
        } else {
          next();
        }
      },
      proxy(api.url, proxyOptions(api)),
    );
  }
};
