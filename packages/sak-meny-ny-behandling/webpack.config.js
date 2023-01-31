const path = require('path');
const { merge } = require('webpack-merge');
const prodConfig = require('../../webpack/webpack.prod.template');
const styleModulesRule = require('../../webpack/rules/style-modules-rule');
const styleRule = require('../../webpack/rules/style-rule');

const SRC_DIR = path.resolve(__dirname, './src');

const config = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: '@navikt/fp-sak-meny-ny-behandling',
      type: 'umd',
    },
  },
  module: {
    rules: prodConfig.module.rules.concat([styleModulesRule(SRC_DIR), styleRule(SRC_DIR)]),
  },
};

module.exports = merge(prodConfig, config);
