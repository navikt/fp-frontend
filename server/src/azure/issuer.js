import { Issuer } from 'openid-client';
import config from '../config.js';
import logger from '../log.js';

let issuer;

export const getIssuer = async () => {
  if (issuer === undefined) {
    const azureConfig = config.azureAd;
    issuer = await Issuer.discover(azureConfig.discoveryUrl);
    logger.info(`Discovered issuer ${issuer.issuer}`);
  }
  return issuer;
}
