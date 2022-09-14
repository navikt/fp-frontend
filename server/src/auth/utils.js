import openidClient from 'openid-client';
import logger from '../log.js';

const { TokenSet } = openidClient;
const tokenSetSelfId = 'self';

const getTokenSetsFromSession = (req) => {
  if (req && req.user) {
    return req.user.tokenSets;
  }
  return null;
};

const hasValidAccessToken = (req, key = tokenSetSelfId) => {
  const tokenSets = getTokenSetsFromSession(req);
  if (!tokenSets) {
    return false;
  }
  const tokenSet = tokenSets[key];
  if (!tokenSet) {
    return false;
  }
  return new TokenSet(tokenSet).expired() === false;
};

const getOnBehalfOfAccessToken = (authClient, req, clientId, scope) => new Promise(((resolve, reject) => {
  const tokenSets = getTokenSetsFromSession(req);
  if (hasValidAccessToken(req, clientId)) {
    resolve(tokenSets[clientId].access_token);
  } else {
    authClient.grant({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
      requested_token_use: 'on_behalf_of',
      scope,
      assertion: tokenSets[tokenSetSelfId].access_token,
      subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
      subject_token: tokenSets[tokenSetSelfId].access_token,
      audience: scope,
    }, { clientAssertionPayload: {
        aud: authClient.issuer.metadata.token_endpoint,
        nbf: Math.floor(Date.now() / 1000),
      }
    })
      .then((tokenSet) => {
        req.user.tokenSets[clientId] = tokenSet;
        resolve(tokenSet.access_token);
      })
      .catch((err) => {
        logger.error(err);
        reject(err);
      });
  }
}));

export default {
  getOnBehalfOfAccessToken,
  hasValidAccessToken,
  tokenSetSelfId,
};
