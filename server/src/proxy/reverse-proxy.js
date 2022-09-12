import proxy from 'express-http-proxy';
import url from 'url';
import authUtils from '../auth/utils.js';
import config from '../config.js';

const options = (authClient) => ({
  parseReqBody: false,
  timeout: 2000,  // in milliseconds
  proxyReqOptDecorator: (options, req) => {
    const { clientId } = config.reverseProxy;
    const scope = `api://${clientId}/.default`;
    return new Promise(((resolve, reject) => authUtils.getOnBehalfOfAccessToken(
      authClient, req, clientId, scope,
    )
      .then((access_token) => {
        options.headers.Authorization = `Bearer ${access_token}`;
        resolve(options);
      },
      (error) => reject(error))
    ));
  },
  proxyReqPathResolver: (req) => {
    const urlFromApi = url.parse(config.reverseProxy.url);
    const pathFromApi = (urlFromApi.pathname === '/' ? '' : urlFromApi.pathname);

    const urlFromRequest = url.parse(req.originalUrl);
    const pathFromRequest = urlFromRequest.pathname;

    const queryString = urlFromRequest.query;
    const newPath = (pathFromApi || '') + (pathFromRequest || '') + (queryString ? `?${queryString}` : '');

    console.log(`Proxying request from '${req.originalUrl}' to '${stripTrailingSlash(urlFromApi.href)}${newPath}'`);
    return newPath;
  },
  proxyErrorHandler: function(err, res, next) {
    switch (err && err.code) {
      case '401':    { return res.status(401).json('{"feilmelding":"Bruker ikke innlogget","type":"MANGLER_TILGANG_FEIL"}'); }
      case '403':    { return res.status(403).json('{"feilmelding":"Timet ut","type":"GENERELL_FEIL"}'); }
      case '404':    { return res.status(404).json('{"feilmelding":"Kunne ikke finne ressursen, beklager.","type":"IKKE_FUNNET_FEIL"}'); }
      case '504':    { return res.status(504).json('{"feilmelding":"Timet ut","type":"GENERELL_FEIL"}'); }
      default:       { next(err); }
    }
  },
});

const stripTrailingSlash = (str) => (str.endsWith('/') ? str.slice(0, -1) : str);

const setup = (router, authClient) => {
  router.use(`/${config.reverseProxy.path}/api/*`, proxy(config.reverseProxy.url, options(authClient)));
};

export default { setup };
