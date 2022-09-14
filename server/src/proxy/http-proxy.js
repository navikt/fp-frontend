import httpsProxyAgent from 'https-proxy-agent';
import config from '../config.js';
import logger from '../log.js';

const { HttpsProxyAgent } = httpsProxyAgent;

const agent = () => {
  const proxyUri = config.server.proxy;
  if (proxyUri) {
    logger.info(`Proxying requests via ${proxyUri} for openid-client`);
    const agent = new HttpsProxyAgent(proxyUri);
    return {
      http: agent,
      https: agent,
    };
  }
  logger.info('Environment variable HTTP_PROXY is not set, not proxying requests for openid-client');
  return null;
};

export default { agent: agent() };
