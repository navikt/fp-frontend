const path = require('path');
const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commonDevAndProd = require('./webpack.common');

const sentryMock = require("./mocks/sentry");
const fakeError = require("./mocks/fake-error");
const deps = require('../package.json').dependencies;

const PUBLIC_PATH = '/'

const config = {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:9100',
    path.resolve(path.join(__dirname, '../packages'), 'sak-app/src') + '/index.ts',
  ],
  output: {
    path: path.resolve(__dirname, './public'),
    publicPath: PUBLIC_PATH,
    filename: '[name].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "ft_frontend_saksbehandling",
      remotes: {
        ft_fakta_beregning: 'ft_fakta_beregning@http://localhost:9006/remoteEntry.js?[(new Date).getTime()]',
        ft_fakta_fordel_beregningsgrunnlag: 'ft_fakta_fordel_beregningsgrunnlag@http://localhost:9007/remoteEntry.js?[(new Date).getTime()]',
        ft_prosess_beregningsgrunnlag: 'ft_prosess_beregningsgrunnlag@http://localhost:9008/remoteEntry.js?[(new Date).getTime()]',
        ft_fakta_tilbakekreving_feilutbetaling: 'ft_fakta_tilbakekreving_feilutbetaling@http://localhost:9009/remoteEntry.js?[(new Date).getTime()]',
        ft_prosess_tilbakekreving_foreldelse: 'ft_prosess_tilbakekreving_foreldelse@http://localhost:9010/remoteEntry.js?[(new Date).getTime()]',
        ft_prosess_tilbakekreving: 'ft_prosess_tilbakekreving@http://localhost:9011/remoteEntry.js?[(new Date).getTime()]',
        ft_prosess_tilbakekreving_vedtak: 'ft_prosess_tilbakekreving_vedtak@http://localhost:9012/remoteEntry.js?[(new Date).getTime()]',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
  ],
  optimization: {
    moduleIds: 'named',
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    historyApiFallback: true,
    port: 9100,
    open: true,
    static: {
      directory: 'packages',
      watch: true,
    },
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      sentryMock(devServer.app);
      fakeError(devServer.app);

      return middlewares
    },
    onListening: function (devServer) {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }
      const port = devServer.server.address().port;
      console.log(`Listening at http://localhost:${port}/`);
    },
    proxy: [
      {
        //context: ['/fpoppdrag/api', '/fptilbake/api', '/fplos/api', '/fpsak/api', '/fpformidling/api'],
        context: () => true,
        target: process.env.BACKEND_URL || 'http://127.0.0.1:9000',
        secure: false,
        changeOrigin: (!!process.env.BACKEND_URL),
      }
    ],
    devMiddleware: {
      publicPath: PUBLIC_PATH,
      stats: {
        children: false,
        colors: true,
      },
    },
  },
};


if (process.argv.includes('--no-fix')) {
  console.warn('Setting eslint-loader option \'fix\' to false');
  config.module.rules.find(rules => rules.loader === 'eslint-loader').options.fix = false;
}

module.exports = merge(commonDevAndProd, config);
