import { breadcrumbsIntegration, init } from '@sentry/browser';

export const initSentry = () => {
  init({
    dsn: 'https://d1b7de8cc42949569da03849b47d3ea1@sentry.gc.nav.no/17',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    release: import.meta.env['VITE_SENTRY_RELEASE'] ?? 'unknown',
    environment: globalThis.location.hostname,
    enabled: import.meta.env.MODE !== 'development',
    integrations: [breadcrumbsIntegration({ console: false })],
  });
};
