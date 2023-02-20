const path = require('path');
const { merge } = require('webpack-merge');
const prodConfig = require('../../webpack/webpack.prod.template');
const devConfig = require('../../webpack/webpack.dev.template');
const styleModulesRule = require('../../webpack/rules/style-modules-rule');
const styleRule = require('../../webpack/rules/style-rule');

const SRC_DIR = path.resolve(__dirname, './src');

const config = (env) => {
  const prodOrDevConfig = env.watch === 'true' ? devConfig : prodConfig;
  return {
    output: {
      path: path.resolve(__dirname, 'dist'),
      library: {
        name: '@navikt/fp-prosess-anke-resultat',
        type: 'umd',
      },
    },
    module: {
      rules: prodOrDevConfig.module.rules.concat([styleModulesRule(SRC_DIR), styleRule(SRC_DIR)]),
    },
  };
};

module.exports = (env) => merge(env.watch === 'true' ? devConfig : prodConfig, config(env));
