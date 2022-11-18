import 'dotenv/config';
import logger from './log.js';

const envVar = ({
  name,
  required = true,
}) => {
  if (!process.env[name] && required) {
    logger.error(`Missing required environment variable '${name}'`);
    process.exit(1);
  }
  return process.env[name];
};

const server = {
  // should be equivalent to the URL this application is hosted on for correct CORS origin header
  host: envVar({
    name: 'HOST',
    required: false,
  }) || 'localhost',

  // port for your application
  port: envVar({
    name: 'PORT',
    required: false,
  }) || 3000,
};

const azureAd = {
  // automatically provided by NAIS at runtime
  discoveryUrl: envVar({
    name: 'AZURE_APP_WELL_KNOWN_URL',
    required: true,
  }),
  clientId: envVar({
    name: 'AZURE_APP_CLIENT_ID',
    required: true,
  }),
  clientJwks: JSON.parse(envVar({
    name: 'AZURE_APP_JWKS',
    required: true,
  })),

  // leave at default
  tokenEndpointAuthMethod: 'private_key_jwt',
  tokenEndpointAuthSigningAlg: 'RS256',
};

const cors = {
  allowedHeaders: envVar({
    name: 'CORS_ALLOWED_HEADERS',
    required: false,
  }) || 'x_Nav-CallId',
  exposedHeaders: envVar({
    name: 'CORS_EXPOSED_HEADERS',
    required: false,
  }) || '',
  allowedMethods: envVar({
    name: 'CORS_ALLOWED_METHODS',
    required: false,
  }) || '',
};

// eslint-disable-next-line consistent-return
const configValueAsJson = ({ name, required = true }) => {
  const value = envVar({ name, required });
  if (!value) { return null; }
  try {
    return JSON.parse(value);
  } catch (error) {
    logger.error(`Config: '${name}' er ikke et gyldig JSON-objekt.`, error);
    process.exit(1);
  }
};

const getProxyConfig = () => {
  const config = configValueAsJson({ name: 'PROXY_CONFIG' });
  if (!config.apis) {
    logger.error("Config: 'PROXY_CONFIG' mangler 'apis' entry.");
    exit(1);
  }
  config.apis.forEach((entry, index) => {
    if (!entry.path) {
      logger.error(`Api entry ${index} mangler 'path'`);
      process.exit(1);
    }
    if (!entry.url) {
      logger.error(`Api entry ${index} mangler 'url'`);
      process.exit(1);
    }
    if (!entry.scopes) {
      logger.error(`Api entry ${index} mangler 'scopes'`);
      process.exit(1);
    }
  });

  return config;
};

export default {
  server,
  azureAd,
  reverseProxyConfig: getProxyConfig(),
  cors,
};
