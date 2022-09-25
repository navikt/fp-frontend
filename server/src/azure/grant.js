import logger from '../log.js';
import {getTokenInCache, setTokenInCache} from '../cache/index.js';
import {createOidcUnknownError} from '../utils/oidcUtils.js';
import {getAuthClient} from './client.js';

export const grantAzureOboToken = (userToken, scope) => new Promise((async (resolve, reject) => {
  logger.info(`Henter grant ${scope}.`)

  const token = userToken.replace('Bearer ', '');

  const cacheKey = `azure-${token}-${scope}`;
  const [cacheHit, tokenInCache] = getTokenInCache(cacheKey);

  if (cacheHit) {
    logger.debug('Cache hit.');
    resolve(tokenInCache);
  } else {
    const client = await getAuthClient();
    const grantBody = {
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
      requested_token_use: 'on_behalf_of',
      scope,
      assertion: token
    };

    const clientAssertionPayload = {
      aud: client.issuer.metadata.token_endpoint,
      nbf: Math.floor(Date.now() / 1000),
    };
    await client.grant(grantBody, {clientAssertionPayload})
      .then((tokenSet) => {
        setTokenInCache(cacheKey, tokenSet);
        resolve(tokenSet.access_token)
      })
      .catch((err) => {
        logger.error(createOidcUnknownError(err));
        reject(err);
      });
  }
}));
