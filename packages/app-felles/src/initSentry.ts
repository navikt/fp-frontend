import { breadcrumbsIntegration, init } from '@sentry/browser';

export const initSentry = () => {
  const environment = globalThis.location.hostname;

  const isDevelopment = import.meta.env.MODE === 'development';

  if (!isDevelopment) {
    init({
      dsn: 'https://d1b7de8cc42949569da03849b47d3ea1@sentry.gc.nav.no/17',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      release: import.meta.env['SENTRY_RELEASE'] ?? 'unknown',
      environment,
      integrations: [breadcrumbsIntegration({ console: false })],
    });
  }
};
