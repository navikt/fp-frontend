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
  }) || 'x-correlation-id',
  exposedHeaders: envVar({
    name: 'CORS_EXPOSED_HEADERS',
    required: false,
  }) || '',
  allowedMethods: envVar({
    name: 'CORS_ALLOWED_METHODS',
    required: false,
  }) || 'x_Nav-CallId',
}

const getProxyConfig = () => {
  var config = configValueAsJson({ name: 'PROXY_CONFIG' });
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
    entry.id = `api-${entry.path}-${index}`;
  });
  return config;
};

const configValueAsJson = ({ name, secret = false, required = true }) => {
  const value = configValue({ name, secret, required });
  if (!value) { return null; }
  try {
    return JSON.parse(value);
  } catch (error) {
    logger.error(`Config: '${name}' er ikke et gyldig JSON-objekt.`, error);
    process.exit(1);
  }
};

const ENV_PREFIX = "env:"
const PATH_PREFIX = "path:"
const VALUE_PREFIX = "value:"

const configValue = ({name, secret = false, required = true}) => {
  // Finner ut hvor vi skal lete etter config
  const pointer = process.env[name];
  if (!pointer && required) {
    logger.error(`Config: Mangler environment variable ${name}`);
    process.exit(1);
  } else if (!pointer) {
    logger.info(`Config: Optional ${name} ikke satt.`);
    return null;
  }

  // Setter configverdi
  let value = null;
  if (pointer.startsWith(ENV_PREFIX)) {
    value = process.env[pointer.slice(ENV_PREFIX.length)];
  } else if (pointer.startsWith(PATH_PREFIX)) {
    value = fs.readFileSync(pointer.slice(PATH_PREFIX.length), 'utf-8');
  } else if (pointer.startsWith(VALUE_PREFIX)) {
    value = pointer.slice(VALUE_PREFIX.length);
  } else {
    value = pointer;
  }

  // Validerer
  if (!value && required) {
    logger.error(`Config: Mangler verdi på ${pointer}`);
    process.exit(1);
  } else if (!value) {
    logger.info(`Config: Optional ${name} ikke satt.`);
    return null;
  }

  // Logger
  if (secret) {
    if (pointer.startsWith(VALUE_PREFIX)) {
      logger.info(`Config: ${name}=*** (hentet fra ${VALUE_PREFIX}***)`);
    } else {
      logger.info(`Config: ${name}=*** (hentet fra ${pointer})`);
    }
  } else {
    logger.info(`Config: ${name}=${value} (hentet fra ${pointer})`);
  }

  return value;
};


export default {
  server,
  azureAd,
  reverseProxyConfig: getProxyConfig(),
  cors,
};
