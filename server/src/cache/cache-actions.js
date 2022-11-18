import tokenCache from './token-cache.js';
import logger from '../log.js';

export const flush = () => {
  tokenCache.flushAll();
};

export const getTokenInCache = (cacheKey) => {
  const tokenInCache = tokenCache.get(cacheKey);
  if (tokenInCache) {
    logger.debug('Henter fra cache.');
    return [true, tokenInCache];
  }
  logger.debug('Ikke token i cache - henter.');
  return [false];
};

export const setTokenInCache = (cacheKey, tokenSet) => {
  if (tokenSet.access_token == null) return;
  logger.debug('Set token in cache.');
  tokenCache.set(cacheKey, tokenSet.access_token, (tokenSet.expires_in ?? 65) - 5);
};
