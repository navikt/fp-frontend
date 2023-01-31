'use strict';
require('dotenv')
  .config();
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

module.exports = (webpackConfig, port) => {
  const options = {
    static: {
      watch: true,
    },
    devMiddleware: {
      publicPath: webpackConfig.output.publicPath,
      stats: {
        children: false,
        colors: true,
      },
    },
    historyApiFallback: true,
    port,
  };

  const wds = new WebpackDevServer(webpack(webpackConfig), options);

  (async () => {
    try {
      await wds.start();
    } catch(error) {
      return console.log(err); // NOSONAR
    }

    console.log('Listening at http://localhost:' + port + '/');
  })();
}
