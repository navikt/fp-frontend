import { getToken, validateToken } from "@navikt/oasis";
import logger from '../log.js';

/**
 * Validerer token som kommer fra Wonderwall
 * TODO: forrige impl hadde redirect til login dersom man ikke hadde token. Jeg mener at dette skal Wonderwall gjøre for oss og ikke er nødvendig
 */
export const verifyToken = async (
  request,
  response,
  next,
) => {
  const token = getToken(request);
  if (!token) {
    logger.debug('User token missing.');
    return response.status(401).send();
  }

  const validation = await validateToken(token);
  if (!validation.ok) {
    logger.debug('User token is NOT valid.');
    return response.status(403).send();
  }

  logger.debug('User token is valid. Continue.');
  return next();
};
