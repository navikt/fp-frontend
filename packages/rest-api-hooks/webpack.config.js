const path = require('path');
const { merge } = require('webpack-merge');
const prodConfig = require('../../webpack/webpack.prod.template');
const devConfig = require('../../webpack/webpack.dev.template');

const config = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: '@navikt/fp-rest-api-hooks',
      type: 'umd',
    },
  },
};

module.exports = (env) => merge(env.watch === 'true' ? devConfig : prodConfig, config);
