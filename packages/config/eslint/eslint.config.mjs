import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import vitest from 'eslint-plugin-vitest';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import describeNameMatchesFilename from './rules/describe-name-matches-filename.ts';

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      vitest,
      'simple-import-sort': simpleImportSort,
      local: {
        rules: {
          'describe-name-matches-filename': describeNameMatchesFilename,
        },
      },
    },
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: '../typescript/tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  pluginReact.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  importPlugin.flatConfigs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      ...vitest.configs.recommended.rules,
      'max-len': [ERROR, 160],
      'no-console': ERROR,
      'no-debugger': WARNING,
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-curly-brace-presence': ['error', { props: 'never' }],
      'react/prop-types': OFF,
      'jsx-a11y/no-autofocus': OFF,
      'import/no-duplicates': ERROR,
      'react/react-in-jsx-scope': OFF,
      '@typescript-eslint/no-restricted-types': [
        'error',
        {
          types: {
            'React.FC': {
              message: 'Useless and has some drawbacks, see https://github.com/facebook/create-react-app/pull/8177',
            },
            FC: {
              message: 'Useless and has some drawbacks, see https://github.com/facebook/create-react-app/pull/8177',
            },
            'React.FunctionComponent': {
              message: 'Useless and has some drawbacks, see https://github.com/facebook/create-react-app/pull/8177',
            },
            FunctionComponent: {
              message: 'Useless and has some drawbacks, see https://github.com/facebook/create-react-app/pull/8177',
            },
          },
        },
      ],
      '@typescript-eslint/no-explicit-any': ERROR,
      '@typescript-eslint/ban-ts-comment': ERROR,
      '@typescript-eslint/no-unnecessary-condition': ERROR,
      'local/describe-name-matches-filename': ERROR,
      '@typescript-eslint/no-unsafe-enum-comparison': OFF,
      '@typescript-eslint/no-misused-promises': OFF,
      '@typescript-eslint/no-unsafe-call': OFF, // Denne feiler for .stories pga parameters

      // Note: you must disable the base rule as it can report incorrect errors
      'no-use-before-define': OFF,
      '@typescript-eslint/no-use-before-define': [OFF],
      'no-shadow': OFF,
      '@typescript-eslint/no-shadow': [ERROR],
      'no-unused-vars': OFF,
      '@typescript-eslint/no-unused-vars': [ERROR],

      // TODO (TOR) Ignorert inntil videre grunnet kost/nytte
      'import/no-unresolved': OFF,

      'no-restricted-syntax': [
        'error',
        {
          // Denne selectoren er chatGPT-generert. Men den funker til å differensiere "!"-bruk på index-access kontra annen bruk
          selector:
            "TSNonNullExpression[expression.type='Identifier'], TSNonNullExpression[expression.type='MemberExpression'][expression.computed=false]",
          message:
            'Ikke bruk non-null assertions på variabler eller properties. Bruk de kun på index access på arrays eller objecter hvis nødvendig',
        },
      ],

      'simple-import-sort/imports': [
        'error',
        {
          groups: [['^react'], ['^@?\\w'], ['^@navikt/fp-*'], ['@/(.*)'], ['^[./]'], ['./*.module.css'], ['./*.json']],
        },
      ],
    },
  },
  {
    ignores: ['**/*.stories.tsx', 'eslint.config.mjs'],
    rules: {
      'import/no-default-export': ERROR,
    },
  },
];
