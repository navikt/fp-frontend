/// <reference types="vitest" />
import { mergeConfig } from 'vite';
import { sentryVitePlugin } from '@sentry/vite-plugin';

import { createSharedAppConfig } from '@navikt/fp-config-vite';

// eslint-disable-next-line import/no-default-export
export default mergeConfig(createSharedAppConfig(), {
  server: {
    port: 9010,
    cors: {
      origin: [
        'https://fpjournalforing.intern.dev.nav.no',
        'https://fpjournalforing.intern.nav.no',
        'http://localhost:9000',
      ],
    },
    proxy: {
      '/fpsak/api': {
        target: 'http://127.0.0.1:9000',
        changeOrigin: false,
        secure: false,
      },
      '/fpfordel/api': {
        target: 'http://127.0.0.1:9000',
        changeOrigin: false,
        secure: false,
      },
    },
  },
  plugins: [
    // Put the Sentry vite plugin after all other plugins
    sentryVitePlugin({
      authToken: process.env.SENTRY_AUTH_TOKEN, // Kommer fra Github organization secrets
      disable: !process.env.SENTRY_AUTH_TOKEN, // Ikke last opp source maps hvis token ikke er satt. Token er bare satt når det bygges fra master branch
      org: 'nav',
      project: 'fp-journalforing',
      url: 'https://sentry.gc.nav.no',
      release: {
        name: process.env.VITE_SENTRY_RELEASE,
      },
    }),
  ],
});
