import { getToken, validateAzureToken } from "@navikt/oasis";
import { NextFunction, Request, Response } from "express";

import logger from "./logger.js";

/**
 * Validerer token som kommer fra Wonderwall
 */
export const verifyToken = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const token = getToken(request);
  if (!token) {
    logger.debug("User token missing.");
    response.status(401).send();
    return;
  }

  const validation = await validateAzureToken(token);
  if (!validation.ok) {
    logger.debug("User token is NOT valid.");
    response.status(403).send();
    return;
  }

  logger.debug("User token is valid. Continue.");
  return next();
};
