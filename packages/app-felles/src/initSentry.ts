import { breadcrumbsIntegration, init } from '@sentry/browser';

export const initSentry = () => {
  init({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    dsn: import.meta.env['VITE_SENTRY_DSN'] ?? 'unknown',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    release: import.meta.env['VITE_SENTRY_RELEASE'] ?? 'unknown',
    environment: globalThis.location.hostname,
    enabled: import.meta.env.MODE !== 'development',
    integrations: [breadcrumbsIntegration({ console: false })],
  });
};
