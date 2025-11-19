import { breadcrumbsIntegration, init } from '@sentry/browser';

export const initSentry = (app: 'fp-frontend' | 'fp-journalforing' | 'fp-avdelingsleder') => {
  init({
    dsn: getDsn(app),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    release: import.meta.env['VITE_SENTRY_RELEASE'] ?? 'unknown',
    environment: globalThis.location.hostname,
    enabled: import.meta.env.MODE !== 'development',
    integrations: [breadcrumbsIntegration({ console: false })],
  });
};

const getDsn = (app: 'fp-frontend' | 'fp-journalforing' | 'fp-avdelingsleder') => {
  switch (app) {
    case 'fp-frontend':
      return 'https://d1b7de8cc42949569da03849b47d3ea1@sentry.gc.nav.no/17';
    case 'fp-avdelingsleder':
      return 'https://acfe5c7d102b49aa1b622345dc6cd0c0@sentry.gc.nav.no/184';
    case 'fp-journalforing':
      return 'https://e3fbcf06855a6a4caf8d9c8e1e92479b@sentry.gc.nav.no/185';
  }
};
