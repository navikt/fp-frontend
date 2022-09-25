import { createRemoteJWKSet } from 'jose';

import { getIssuer } from './issuer.js';

let remoteJWKSet;

export const getJwkSet = () => new Promise((async () => {
  if (remoteJWKSet == null) {
    const issuer = await getIssuer();
    remoteJWKSet = createRemoteJWKSet(new URL(issuer.metadata.jwks_uri));
  }
  return remoteJWKSet;
}));



