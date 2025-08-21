import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { breadcrumbsIntegration, init } from '@sentry/browser';
import dayjs from 'dayjs';

import { LosAppIndexWrapper } from './app/LosAppIndex';
import { RestApiErrorProvider } from './data/error/RestApiErrorContext';

import 'dayjs/locale/nb.js';

dayjs.locale('nb');

const app = document.getElementById('root');
if (app === null) {
  throw new Error('No app element');
}

const environment = window.location.hostname;
const isDevelopment = import.meta.env.MODE === 'development';

if (!isDevelopment) {
  init({
    dsn: 'https://d1b7de8cc42949569da03849b47d3ea1@sentry.gc.nav.no/17',
    release: import.meta.env['SENTRY_RELEASE'] ?? 'unknown',
    environment,
    integrations: [breadcrumbsIntegration({ console: false })],
  });
}

const root = createRoot(app);

root.render(
  <StrictMode>
    <BrowserRouter basename="/">
      <RestApiErrorProvider>
        <LosAppIndexWrapper />
      </RestApiErrorProvider>
    </BrowserRouter>
  </StrictMode>,
);
