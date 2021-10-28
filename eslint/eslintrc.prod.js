const { merge } = require('webpack-merge');
const common = require('./eslintrc.common.js');

const ERROR = 2;

const config = {
  rules: {
    'no-console': ERROR,
  },
};

module.exports = merge(common, config);
