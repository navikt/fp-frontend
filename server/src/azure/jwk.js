import { createRemoteJWKSet } from 'jose';
import { getIssuer } from './issuer.js';

let remoteJWKSet;

export const getJwkSet = async () => {
  if (remoteJWKSet === undefined) {
    remoteJWKSet = createRemoteJWKSet(new URL((await getIssuer()).metadata.jwks_uri));
  }
  return remoteJWKSet;
};

export default {
  getJwkSet,
};
