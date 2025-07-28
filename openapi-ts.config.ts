import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
    input: './swagger.json',
    output: 'temp-types',
    plugins: ['@hey-api/client-fetch'],
});
