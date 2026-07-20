/// <reference types="vitest" />
import { mergeConfig } from 'vite';
import { sentryVitePlugin } from '@sentry/vite-plugin';

import { createSharedAppConfig } from '@navikt/fp-config-vite';

// Settes i build-workflowen (build-fp-frontend.yml -> build.yml). Når den er satt serveres de bygde
// assetene fra CDN, mens routing og API-prefiks styres av serveren.
const cdnUrl = process.env.VITE_CDN_URL;

// eslint-disable-next-line import-x/no-default-export
export default mergeConfig(createSharedAppConfig(), {
  ...(cdnUrl
    ? {
        experimental: {
          renderBuiltUrl: (filename: string) => `${cdnUrl}${filename}`,
        },
      }
    : {}),
  server: {
    port: 9010,
    cors: {
      origin: ['https://fpsak.intern.dev.nav.no', 'https://fpsak.intern.nav.no', 'http://localhost:9000'],
    },
    proxy: {
      '/fpsak/api': {
        target: 'http://127.0.0.1:9000',
        changeOrigin: false,
        secure: false,
      },
      '/fptilbake/api': {
        target: 'http://127.0.0.1:9000',
        changeOrigin: false,
        secure: false,
      },
      '/fplos/api': {
        target: 'http://127.0.0.1:9000',
        changeOrigin: false,
        secure: false,
      },
      '/fpmottak/api': {
        target: 'http://127.0.0.1:9000',
        changeOrigin: false,
        secure: false,
      },
      '/fpformidling/api': {
        target: 'http://127.0.0.1:9000',
        changeOrigin: false,
        secure: false,
      },
    },
  },
  plugins: [
    // Put the Sentry vite plugin after all other plugins
    sentryVitePlugin({
      authToken: process.env.VITE_SENTRY_AUTH_TOKEN, // Kommer fra Github organization secrets
      disable: !process.env.VITE_SENTRY_AUTH_TOKEN, // Ikke last opp source maps hvis token ikke er satt. Token er bare satt når det bygges fra master branch
      org: 'nav',
      project: 'fp-frontend',
      url: 'https://sentry.gc.nav.no',
      release: {
        name: process.env.VITE_SENTRY_RELEASE,
      },
    }),
  ],
});
