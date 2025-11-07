import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: './swagger.json',
  output: {
    clean: false,
    format: 'prettier',
    lint: 'eslint',
    path: 'packages/types/src/',
    fileName: {
      name: 'apiDtoGenerert',
      suffix: null,
    },
  },
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
