import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: ['./fpsak-swagger.json', './fplos-swagger.json'],
  output: [
    {
      clean: false,
      postProcess: ['prettier', 'eslint'],
      path: 'src/',
      fileName: {
        name: 'apiDtoGenerert',
        suffix: null,
      },
    },
    {
      clean: false,
      postProcess: ['prettier', 'eslint'],
      path: 'src/los',
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
