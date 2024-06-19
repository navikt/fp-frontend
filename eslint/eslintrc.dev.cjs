const common = require('./eslintrc.common.cjs');

const OFF = 0;
const WARN = 1;

module.exports = {
  ...common,
  rules: {
    ...common.rules,
    'no-debugger': OFF,
    'no-console': WARN,
  },
};
