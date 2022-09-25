import { verifyJwt } from '../utils/verify.js';

import { getIssuer } from './issuer.js';
import { getJwkSet } from './jwk.js';
import config from '../config.js';
import logger from '../log.js';

export const isTokenValid = async (bearerToken) => {
  const verificationResult = await verifyJwt(bearerToken, await getJwkSet(), await getIssuer());

  if ('errorType' in verificationResult) {
    logger.error(verificationResult);
    return false;
  }

  const azureConfig = config.azureAd;
  if (verificationResult.payload.aud !== azureConfig.clientId) {
    logger.error("AUD != clientId")
    return false;
  }

  return true;
}
