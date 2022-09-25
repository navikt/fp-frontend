import axios from 'axios';
import { grantAzureOboToken } from './grant.js';
import logger from '../log.js';

const getGraphRequest = (bearerToken, graphUrl) => new Promise(((resolve, reject) => {
  const scope = 'https://graph.microsoft.com/.default';
  grantAzureOboToken(bearerToken, scope)
    .then((accessToken) => axios.get(graphUrl, {
        headers: {Authorization: `Bearer ${accessToken}`}
      }))
    .then((response) => resolve(response.data))
    .catch((err) => {
      if (err.response.data) {
        logger.warning('Error during graph call: ', err);
        reject(err.response.data);
      } else {
        reject(err);
      }
    });
}));

const getUserInfoFromGraphApi = (bearerToken) => {
  const query = 'onPremisesSamAccountName,displayName,givenName,mail,officeLocation,surname,userPrincipalName,id,jobTitle';
  const graphUrl = `https://graph.microsoft.com/v1.0/me?$select=${query}`;
  return getGraphRequest(bearerToken, graphUrl);
};

const getUserGroups = (bearerToken) => {
  const graphUrl = 'https://graph.microsoft.com/v1.0/me/memberOf';
  return getGraphRequest(bearerToken, graphUrl);
};

export default {
  getUserInfoFromGraphApi,
  getUserGroups,
};
