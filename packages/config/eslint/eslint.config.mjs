import eslintReact from '@eslint-react/eslint-plugin';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import * as importPlugin from 'eslint-plugin-import-x';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import vitest from '@vitest/eslint-plugin';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import describeNameMatchesFilename from './rules/describe-name-matches-filename.mjs';

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

const DEFERRED_UNICORN_RULES = {
  'unicorn/consistent-boolean-name': OFF,
  'unicorn/consistent-function-scoping': OFF,
  'unicorn/filename-case': OFF,
  'unicorn/max-nested-calls': OFF,
  'unicorn/name-replacements': OFF,
  'unicorn/no-array-callback-reference': OFF,
  'unicorn/no-array-reduce': OFF,
  'unicorn/no-array-sort': OFF,
  'unicorn/no-computed-property-existence-check': OFF,
  'unicorn/no-confusing-array-splice': OFF,
  'unicorn/no-declarations-before-early-exit': OFF,
  'unicorn/no-duplicate-loops': OFF,
  'unicorn/no-for-each': OFF,
  'unicorn/no-null': OFF,
  'unicorn/no-top-level-side-effects': OFF,
  'unicorn/prefer-array-from-map': OFF,
  'unicorn/prefer-await': OFF,
  'unicorn/prefer-includes': OFF,
  'unicorn/prefer-includes-over-repeated-comparisons': OFF,
  'unicorn/prefer-location-assign': OFF,
  'unicorn/prefer-number-coercion': OFF,
  'unicorn/prefer-object-from-entries': OFF,
  'unicorn/prefer-simple-condition-first': OFF,
};

const unicornRecommended = {
  ...eslintPluginUnicorn.configs['flat/recommended'],
  files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  ignores: ['**/*.gen.ts', '**/apiDtoGenerert.ts'],
};

export default [
  { ignores: ['packages/config/eslint/**', 'packages/config/vite/**'] },
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
      'import-x': importPlugin,
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
  eslintReact.configs['recommended-typescript'],
  reactHooks.configs.flat.recommended,
  unicornRecommended,
  eslintConfigPrettier,
  {
    plugins: { unicorn: eslintPluginUnicorn },
    rules: {
      ...vitest.configs.recommended.rules,
      ...DEFERRED_UNICORN_RULES,
      '@eslint-react/purity': ERROR,
      eqeqeq: ERROR,
      'max-len': [ERROR, 160],
      'no-console': ERROR,
      'no-debugger': WARNING,
      'import-x/no-duplicates': ERROR,
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
      '@typescript-eslint/no-unsafe-call': ERROR,
      'import-x/no-default-export': ERROR,
      '@eslint-react/rules-of-hooks': ERROR,
      '@eslint-react/exhaustive-deps': OFF,

      // Note: you must disable the base rule as it can report incorrect errors
      'no-use-before-define': OFF,
      '@typescript-eslint/no-use-before-define': [OFF],
      'no-shadow': OFF,
      '@typescript-eslint/no-shadow': [ERROR],
      'no-unused-vars': OFF,
      '@typescript-eslint/no-unused-vars': [ERROR],

      // TODO (TOR) Ignorert inntil videre grunnet kost/nytte
      'import-x/no-unresolved': OFF,

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
    files: ['**/*.stories.tsx', 'eslint.config.mjs'],
    rules: {
      '@typescript-eslint/no-unsafe-call': OFF, // Denne feiler for .stories pga parameters
      'import-x/no-default-export': OFF,
      '@eslint-react/rules-of-hooks': OFF,
      '@eslint-react/component-hook-factories': OFF,
    },
  },
  { files: ['**/apiDtoGenerert.ts'], rules: { '@typescript-eslint/no-redundant-type-constituents': OFF } },
];
