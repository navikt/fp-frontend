/// <reference types="vitest" />
import { mergeConfig } from 'vite';

import { createSharedAppConfig } from '@navikt/fp-config-vite';

// eslint-disable-next-line import/no-default-export
export default mergeConfig(createSharedAppConfig(), {
  server: {
    port: 9010,
    cors: {
      origin: [
        'https://fp-avdelingsleder.intern.dev.nav.no',
        'https://fp-avdelingsleder.intern.nav.no',
        'http://localhost:9000',
      ],
    },
    proxy: {
      '/fpsak/api': {
        target: 'http://127.0.0.1:9000',
        changeOrigin: false,
        secure: false,
      },
      '/fplos/api': {
        target: 'http://127.0.0.1:9000',
        changeOrigin: false,
        secure: false,
      },
    },
  },
});
