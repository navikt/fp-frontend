import "dotenv/config";

import logger from "./logger.js";

const environmentVariable = (name: string, isRequired: boolean) => {
  // eslint-disable-next-line unicorn/no-computed-property-existence-check
  if (isRequired && !process.env[name]) {
    const errorMessage = `Missing required environment variable '${name}'`;
    logger.error(errorMessage);
    throw new Error(errorMessage);
  }
  return process.env[name];
};

const configValueAsJson = (name: string, isRequired: boolean) => {
  const value = environmentVariable(name, isRequired);
  if (!value) {
    return null;
  }
  try {
    return JSON.parse(value);
  } catch (error) {
    const errorMessage = `Config: '${name}' er ikke et gyldig JSON-objekt.`;
    logger.error(errorMessage, error);
    throw new Error(errorMessage, { cause: error });
  }
};

const server = {
  // should be equivalent to the URL this app is hosted on for correct CORS origin header
  host: environmentVariable("HOST", false) ?? "localhost",

  // port for your app
  port: environmentVariable("PORT", false) ?? 3000,
  viteModePort: environmentVariable("VITE_MODE_PORT", false) ?? "9010",
};

const azureAd = {
  // automatically provided by NAIS at runtime
  discoveryUrl: environmentVariable("AZURE_APP_WELL_KNOWN_URL", true),
  clientId: environmentVariable("AZURE_APP_CLIENT_ID", true),
  clientJwks: configValueAsJson("AZURE_APP_JWKS", true),
  graphUrl: environmentVariable("MS_GRAPH_URL", false),

  // leave at default
  tokenEndpointAuthMethod: "private_key_jwt",
  tokenEndpointAuthSigningAlg: "RS256",
};

const cors = {
  allowedHeaders:
    environmentVariable("CORS_ALLOWED_HEADERS", false) ?? "Nav-Callid",
  exposedHeaders: environmentVariable("CORS_EXPOSED_HEADERS", false) ?? "",
  allowedMethods: environmentVariable("CORS_ALLOWED_METHODS", false) ?? "",
};

type ProxyConfig = {
  apis: [
    {
      path: string;
      url: string;
      scopes: string;
    },
  ];
};
const getProxyConfig = () => {
  const config = configValueAsJson("PROXY_CONFIG", false);
  if (!config.apis) {
    const errorMessage = "Config: 'PROXY_CONFIG' mangler 'apis' entry.";
    logger.error(errorMessage);
    throw new Error(errorMessage);
  }
  for (const [index, entry] of config.apis.entries()) {
    if (!entry.path) {
      const errorMessage = `Api entry ${index} mangler 'path'`;
      logger.error(errorMessage);
      throw new Error(errorMessage);
    }
    if (!entry.url) {
      const errorMessage = `Api entry ${index} mangler 'url'`;
      logger.error(errorMessage);
      throw new Error(errorMessage);
    }
    if (!entry.scopes) {
      const errorMessage = `Api entry ${index} mangler 'scopes'`;
      logger.error(errorMessage);
      throw new Error(errorMessage);
    }
  }

  return config as ProxyConfig;
};

export default {
  server,
  azureAd,
  reverseProxyConfig: getProxyConfig(),
  cors,
};
