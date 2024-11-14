import axios from 'axios';
import logger from './logger.js';
import config from './config.js';
import { requestAzureOboToken } from '@navikt/oasis';

const getGraphRequest = async (bearerToken, graphUrl) => {
  const scope = 'https://graph.microsoft.com/.default';
  const obo = await requestAzureOboToken(bearerToken, scope);

  if (!obo.ok) {
    const errorMessage = `OBO-utveklsing for ${scope} feilet.`;
    logger.warning(errorMessage);
    throw new Error(errorMessage);
  }

  // TODO: feilhåndtering for axios kall
  const response = await axios.get(graphUrl, {
    headers: { Authorization: `Bearer ${obo.token}` },
  });

  return response.data;
}

export const getUserInfoFromGraphApi = async bearerToken => {
  const query =
    'onPremisesSamAccountName,displayName,givenName,mail,officeLocation,surname,userPrincipalName,id,jobTitle,memberOf';
  const { graphUrl } = config.azureAd;
  return getGraphRequest(bearerToken, `${graphUrl}/v1.0/me?$select=${query}`);
};

export const getUserGroups = async bearerToken => {
  const { graphUrl } = config.azureAd;
  return getGraphRequest(bearerToken, `${graphUrl}/v1.0/me/memberOf`);
};
