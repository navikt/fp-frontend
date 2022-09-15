import logger from '../log.js';

const getOnBehalfOfAccessToken = (authClient, req, scope) => new Promise(((resolve, reject) => {
  logger.info(`Henter grant til ${scope}.`)
  const grantBody = {
    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
    requested_token_use: 'on_behalf_of',
    scope: scope,
    assertion: req.headers.authorization.substring("Bearer ".length),
    audience: scope,
  };
  const clientAssertionPayload = {
    aud: authClient.issuer.metadata.token_endpoint,
    nbf: Math.floor(Date.now() / 1000),
  };

  authClient.grant(grantBody, {clientAssertionPayload})
    .then((tokenSet) => {
      resolve(tokenSet.access_token);
    })
    .catch((err) => {
      logger.error(err);
      reject(err);
    });
}));

export default {
  getOnBehalfOfAccessToken
};
