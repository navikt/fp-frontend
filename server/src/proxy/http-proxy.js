import httpsProxyAgent from 'https-proxy-agent';
import config from '../config.js';

const { HttpsProxyAgent } = httpsProxyAgent;

const agent = () => {
  const proxyUri = config.server.proxy;
  if (proxyUri) {
    console.log(`Proxying requests via ${proxyUri} for openid-client`);
    const agent = new HttpsProxyAgent(proxyUri);
    return {
      http: agent,
      https: agent,
    };
  }
  console.log('Environment variable HTTP_PROXY is not set, not proxying requests for openid-client');
  return null;
};

export default { agent: agent() };
