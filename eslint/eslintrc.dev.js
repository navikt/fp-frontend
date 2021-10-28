const { merge } = require('webpack-merge');
const common = require('./eslintrc.common.js');

const OFF = 0;
const WARN = 1;

const config = {
  rules: {
    'no-debugger': OFF,
    'no-console': WARN,
  },
};

module.exports = merge(common, config);
