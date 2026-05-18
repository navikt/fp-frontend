import { getToken, requestAzureOboToken } from "@navikt/oasis";
import { NextFunction, Request, Response, Router } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

import config from "./config.js";
import logger from "./logger.js";

export const setupProxies = (router: Router) => {
  for (const api of config.reverseProxyConfig.apis) {
    router.use(
      api.path,
      async (request: Request, response: Response, next: NextFunction) => {
        const token = getToken(request);
        if (!token) {
          logger.warning(
            "Fant ikke Wonderwall token ved OBO-utveksling. Dette burde ikke inntreffe",
          );
          response.status(401).send();
          return;
        }
        const obo = await requestAzureOboToken(token, api.scopes);
        if (obo.ok) {
          request.headers["obo-token"] = obo.token;
          return next();
        } else {
          logger.warning(`OBO-utveksling for ${api.scopes} feilet.`);
          response.status(403).send();
        }
      },
      createProxyMiddleware({
        target: api.url,
        changeOrigin: true,
        timeout: 600_000,
        proxyTimeout: 60_000,
        logger: logger.logger,
        on: {
          proxyReq: (proxyRequest, request) => {
            const obo = request.headers["obo-token"];
            if (obo) {
              proxyRequest.removeHeader("obo-token");
              proxyRequest.removeHeader("cookie");
              proxyRequest.setHeader("Authorization", `Bearer ${obo}`);
            } else {
              logger.warning(
                `Access token ligger ikke i sesjon for scope ${api.scopes}`,
              );
            }
          },
          proxyRes: (proxyResponse) => {
            const location = proxyResponse.headers.location;
            if (location) {
              const targetOrigin = new URL(api.url).origin;
              if (location.startsWith(targetOrigin)) {
                proxyResponse.headers.location =
                  location.slice(targetOrigin.length);
              }
            }
          },
        },
      }),
    );
  }
};
