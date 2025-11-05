import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: './swagger.json',
  output: 'temp-types',
  parser: {
    transforms: {
      readWrite: false,
    },
  },
  plugins: [
    '@hey-api/client-fetch',
    {
      name: '@hey-api/typescript',
      definitions: {
        case: 'preserve',
      },
    },
  ],
});
