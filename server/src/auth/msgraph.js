import axios from 'axios';
import utils from './utils.js';
import config from '../config.js'
import logger from '../log.js';
import TunnelAgent from 'tunnel-agent'; //axios er dårlig å håndtere proxy selv
import * as url from 'url';

const getGraphRequest = (authClient, req, graphUrl) => new Promise(((resolve, reject) => {
  const clientId = 'https://graph.microsoft.com';
  const scope = 'https://graph.microsoft.com/.default';
  utils.getOnBehalfOfAccessToken(authClient, req, clientId, scope)
    .then((accessToken) => axios.create({proxy: false})
      .get(graphUrl, {
        headers: {Authorization: `Bearer ${accessToken}`},
        httpsAgent: TunnelAgent.httpsOverHttp({proxy: url.parse(config.server.proxy)})
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

const getUserInfoFromGraphApi = (authClient, req) => {
  const query = 'onPremisesSamAccountName,displayName,givenName,mail,officeLocation,surname,userPrincipalName,id,jobTitle';
  const graphUrl = `https://graph.microsoft.com/v1.0/me?$select=${query}`;
  return getGraphRequest(authClient, req, graphUrl);
};

const getUserGroups = (authClient, req) => {
  const graphUrl = 'https://graph.microsoft.com/v1.0/me/memberOf';
  return getGraphRequest(authClient, req, graphUrl);
};

export default {
  getUserInfoFromGraphApi,
  getUserGroups,
};
