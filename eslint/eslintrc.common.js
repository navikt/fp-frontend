const OFF = 0;
const ERROR = 2;
const { resolve } = require('path');

const config = {
  env: {
    es6: true,
    browser: true,
  },

  globals: {
    VERSION: 'off',
  },

  parser: '@typescript-eslint/parser',

  plugins: ['jest', '@typescript-eslint'],

  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],

  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      ecmaVersion: 8,
      jsx: true,
      impliedStrict: true,
    },
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: resolve(__dirname, '../webpack/webpack.common.js'),
      },
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      { 'ts': 'never', 'tsx': 'never' }
    ],
    'linebreak-style': OFF,
    'import/no-named-as-default': OFF,
    'max-len': [ERROR, 160],
    'no-undef': OFF,
    'react/require-default-props': OFF,
    'react/jsx-filename-extension': OFF,
    'react/static-property-placement': OFF,
    'react/state-in-constructor': OFF,
    'react/prop-types': OFF,
    'jest/valid-expect': OFF,

    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': OFF,
    '@typescript-eslint/no-use-before-define': [ERROR],
    'no-shadow': OFF,
    '@typescript-eslint/no-shadow': [ERROR],
    'no-unused-vars': OFF,
    '@typescript-eslint/no-unused-vars': [ERROR],

    // TODO (TOR) Ignorert inntil videre grunnet kost/nytte
    'max-classes-per-file': OFF,
    'jsx-a11y/anchor-is-valid': OFF,
    'jsx-a11y/control-has-associated-label': OFF,
    'react/jsx-props-no-spreading': OFF,
    '@typescript-eslint/no-empty-function': OFF,
    '@typescript-eslint/no-explicit-any': OFF,
    '@typescript-eslint/ban-ts-comment': OFF,
    '@typescript-eslint/explicit-module-boundary-types': OFF,
  },
  overrides: [{
    files: ['*.spec.tsx', '*.spec.ts'],
    rules: {
      'no-unused-expressions': OFF,
    },
  }],
};
module.exports = config;
