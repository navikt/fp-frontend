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
        target: `${api.url}${api.path}`,
        changeOrigin: true,
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
            (request as unknown as Record<string, unknown>)._proxyStartTime = Date.now();
          },
          proxyRes: (proxyResponse, request, response) => {
            // Location header rewrite — strip backend origin, keep relative path
            const location = proxyResponse.headers.location;
            if (location) {
              const targetOrigin = new URL(api.url).origin;
              if (location.startsWith(targetOrigin)) {
                proxyResponse.headers.location =
                  location.slice(targetOrigin.length);
              }
            }

            // Response logging
            const { statusCode, statusMessage } = proxyResponse;
            const startTime = (request as unknown as Record<string, unknown>)
              ._proxyStartTime as number;
            const duration = startTime ? Date.now() - startTime : 0;
            const melding = `${statusCode} ${statusMessage}: ${request.method} - ${request.originalUrl} (${duration}ms)`;
            const callIdValue = request.headers["nav-callid"];
            if (Number(statusCode) >= 500) {
              logger.logger.warn(melding, { callId: callIdValue });
            } else {
              logger.logger.info(melding, { callId: callIdValue });
            }
          },
        },
      }),
    );
  }
};
