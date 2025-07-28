import { requestAzureOboToken } from "@navikt/oasis";

import config from "./config.js";
import logger from "./logger.js";

const getGraphRequest = async (bearerToken: string, graphUrl: string) => {
  const scope = "https://graph.microsoft.com/.default";
  const obo = await requestAzureOboToken(bearerToken, scope);

  if (!obo.ok) {
    const errorMessage = `OBO-utveklsing for ${scope} feilet.`;
    logger.warning(errorMessage);
    throw new Error(errorMessage);
  }

  const response = await fetch(graphUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${obo.token}`,
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Kall mot MS-graph feilet: ${response.status}: ${text}`);
  }

  return await response.json();
};

export const getUserInfoFromGraphApi = async (bearerToken: string) => {
  const query =
    "onPremisesSamAccountName,displayName,givenName,mail,officeLocation,surname,userPrincipalName,id,jobTitle,memberOf";
  const { graphUrl } = config.azureAd;
  return getGraphRequest(bearerToken, `${graphUrl}/v1.0/me?$select=${query}`);
};

export const getUserGroups = async (bearerToken: string) => {
  const { graphUrl } = config.azureAd;
  return getGraphRequest(bearerToken, `${graphUrl}/v1.0/me/memberOf`);
};
