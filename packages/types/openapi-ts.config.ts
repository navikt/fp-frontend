import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: ['./fp-sak-swagger.json', './fp-los-swagger.json'],
  output: [
    {
      clean: false,
      postProcess: ['prettier', 'eslint'],
      path: 'src/',
      fileName: {
        name: 'fpsakDtoGenerert',
        suffix: null,
      },
    },
    {
      clean: false,
      postProcess: ['prettier', 'eslint'],
      path: 'src/',
      fileName: {
        name: 'fplosDtoGenerert',
        suffix: null,
      },
    },
  ],
  parser: {
    transforms: {
      readWrite: false,
    },
  },
  plugins: [
    {
      name: '@hey-api/typescript',
      definitions: {
        case: 'preserve',
      },
      exportFromIndex: false,
    },
  ],
});
