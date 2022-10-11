'use strict';
require('dotenv')
  .config();
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev');
const vtpLogin = require('./mocks/login');
const sentryMock = require('./mocks/sentry');
const fakeError = require('./mocks/fake-error');
if (process.argv.includes('--no-fix')) {
  console.warn('Setting eslint-loader option \'fix\' to false');
  config.module.rules.find(rules => rules.loader === 'eslint-loader').options.fix = false;
}

const options = {
  static: {
    directory: 'packages',
    watch: true,
  },
  onBeforeSetupMiddleware: function (devServer) {
    vtpLogin(devServer.app);
    sentryMock(devServer.app);
    fakeError(devServer.app);
  },
  proxy: {
    '/fpoppdrag/**': {
      target: process.env.APP_URL_FPOPPDRAG || 'http://127.0.0.1:8070',
      secure: false,
      changeOrigin: (!!process.env.APP_URL_FPOPPDRAG),
    },
    '/fptilbake/**': {
      target: process.env.APP_URL_FPTILBAKE || 'http://127.0.0.1:8030',
      secure: false,
      changeOrigin: (!!process.env.APP_URL_FPTILBAKE),
    },
    '/fpformidling/**': {
      target: process.env.APP_URL_FPFORMIDLING || 'http://127.0.0.1:8010',
      secure: false,
      changeOrigin: (!!process.env.APP_URL_FPFORMIDLING),
    },
    '/fplos/api/**': {
      target: process.env.APP_URL_LOS|| 'http://localhost:8071',
      secure: false,
      changeOrigin: (!!process.env.APP_URL_LOS),
    },
    '/fpsak/(api|jetty)/**': {
      target: process.env.APP_URL_FPSAK || 'http://127.0.0.1:8080',
      secure: false,
      changeOrigin: (!!process.env.APP_URL_FPSAK),
      onProxyRes: function onProxyRes(proxyRes, req, res) {
        // For å håndtere redirects på 202 Accepted responser med location headers...
        if (proxyRes.headers.location && proxyRes.headers.location.startsWith(process.env.APP_URL_FPSAK)) {
          proxyRes.headers.location = proxyRes.headers.location.split(process.env.APP_URL_FPSAK)[1];
        }
      },
    },
  },
  devMiddleware: {
    publicPath: config.output.publicPath,
    stats: {
      children: false,
      colors: true,
    },
  },
  historyApiFallback: true,
  port: 9000,
};

const wds = new WebpackDevServer(options, webpack(config));

(async () => {
  try {
    await wds.start();
  } catch(error) {
    return console.log(err); // NOSONAR
  }

  console.log('Listening at http://localhost:9000/');

  console.log('If running agains VTP you can login or change user here: http://localhost:9000/login-with-vtp');
})();
