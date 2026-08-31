/// <reference types="vitest" />
import { mergeConfig } from 'vite';

import { createSharedAppConfig } from '@navikt/fp-config-vite';

// Settes i build-workflowen (build-fp-avdelingsleder.yml -> build.yml). Når den er satt serveres de bygde
// assetene fra CDN, mens routing og API-prefiks styres av serveren.
const cdnUrl = process.env.VITE_CDN_URL;

// eslint-disable-next-line import-x/no-default-export
export default mergeConfig(createSharedAppConfig(), {
  ...(cdnUrl && {
    experimental: {
      renderBuiltUrl: (filename: string) => `${cdnUrl}${filename}`,
    },
  }),
  server: {
    port: 9014,
    cors: {
      origin: [
        'https://fpavdelingsleder.intern.dev.nav.no',
        'https://fpavdelingsleder.intern.nav.no',
        'http://localhost:9004',
      ],
    },
    proxy: {
      '/fplos/api': {
        target: 'http://127.0.0.1:9004',
        changeOrigin: false,
        secure: false,
      },
    },
  },
});
