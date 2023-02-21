const path = require('path');
const { merge } = require('webpack-merge');
const commonDevAndProd = require('./webpack.common');

const sentryMock = require("./mocks/sentry");
const fakeError = require("./mocks/fake-error");

const PUBLIC_PATH = '/';

const config = {
  mode: 'development',
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:9100',
    path.resolve(path.join(__dirname, '../src/index.ts')),
  ],
  resolve: {
    alias: {
      // Dette for å tvinge bruk av en versjon av React når en linker inn pakker fra annet repo
      react: require.resolve('react'),
    },
  },
  output: {
    path: path.resolve(__dirname, './public'),
    publicPath: PUBLIC_PATH,
    filename: '[name].js',
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  devServer: {
    historyApiFallback: true,
    port: 9100,
    open: true,
    hot: true,
    static: {
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
      console.log(`Local frontend listening at http://localhost:${port}`);
      console.log(`For login go to http://localhost:9000/oauth2/login?redirect=http://localhost:${port}`);
      console.log(`For logout go to http://localhost:9000/logout`);
    },
    proxy: {
      '**/api/**': {
        target: 'http://localhost:9000',
        secure: false,
        changeOrigin: false,
      },
    },
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
