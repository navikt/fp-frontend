const path = require('path');
const { merge } = require('webpack-merge');
const prodConfig = require('../../webpack/webpack.prod.template');

const config = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: '@navikt/fp-prosess-vilkar-svangerskap',
      type: 'umd',
    },
  },
};

module.exports = merge(prodConfig, config);
