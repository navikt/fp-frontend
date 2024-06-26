const common = require('./eslintrc.common.cjs');

module.exports = {
  ...common,
  rules: {
    ...common.rules,
    'no-console': 2,
  },
};
