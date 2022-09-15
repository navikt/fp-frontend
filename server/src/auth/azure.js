import { Issuer } from 'openid-client';
import config from '../config.js';
import logger from '../log.js';

const metadata = {
  client_id: config.azureAd.clientId,
  token_endpoint_auth_method: config.azureAd.tokenEndpointAuthMethod,
  token_endpoint_auth_signing_alg: config.azureAd.tokenEndpointAuthSigningAlg,
};

const client = async () => {
  const issuer = await Issuer.discover(config.azureAd.discoveryUrl);
  logger.info(`Discovered issuer ${issuer.issuer}`);
  const jwks = config.azureAd.clientJwks;
  return new issuer.Client(metadata, jwks);
};

export default {
  client
};
