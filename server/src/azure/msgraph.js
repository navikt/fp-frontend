import axios from 'axios';
import logger from '../log.js';
import config from '../config.js';
import { requestOboToken } from '@navikt/oasis';

const getGraphRequest = async (bearerToken, graphUrl) => {
  const scope = 'https://graph.microsoft.com/.default';
  const obo = await requestOboToken(bearerToken, scope);

  if (obo.ok) {
    // TODO: feilhåndtering for axios kall
      const response = await axios.get(graphUrl, {
        headers: { Authorization: `Bearer ${obo.token}` },
      });

      return response.data;

  } else {
    logger.warning(`OBO-utveklsing for ${scope} feilet.`);
    throw obo.error;
  }
}

const getUserInfoFromGraphApi = bearerToken => {
  const query =
    'onPremisesSamAccountName,displayName,givenName,mail,officeLocation,surname,userPrincipalName,id,jobTitle,memberOf';
  const { graphUrl } = config.azureAd;
  return getGraphRequest(bearerToken, `${graphUrl}/v1.0/me?$select=${query}`);
};

const getUserGroups = bearerToken => {
  const { graphUrl } = config.azureAd;
  return getGraphRequest(bearerToken, `${graphUrl}/v1.0/me/memberOf`);
};

export default {
  getUserInfoFromGraphApi,
  getUserGroups,
};
