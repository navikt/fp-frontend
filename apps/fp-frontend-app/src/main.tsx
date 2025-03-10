import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { breadcrumbsIntegration, type ErrorEvent, type EventHint, init } from '@sentry/browser';
import dayjs from 'dayjs';

import { AppIndexWrapper } from './app/AppIndex';
import { RestApiErrorProvider } from './data/error/RestApiErrorContext';

import 'dayjs/locale/nb.js';

dayjs.locale('nb');

const app = document.getElementById('root');
if (app === null) {
  throw new Error('No app element');
}

const environment = window.location.hostname;
const isDevelopment = import.meta.env.MODE === 'development';

init({
  dsn: isDevelopment ? 'http://dev@localhost:9010/1' : 'https://d1b7de8cc42949569da03849b47d3ea1@sentry.gc.nav.no/17',
  release: import.meta.env['SENTRY_RELEASE'] || 'unknown',
  environment,
  integrations: [breadcrumbsIntegration({ console: false })],
  beforeSend: (event: ErrorEvent, hint: EventHint) => {
    const exception = hint.originalException;
    // @ts-expect-error
    if (exception.isAxiosError) {
      // @ts-expect-error
      const requestUrl = new URL(exception.request.responseURL);
      event.fingerprint = [
        '{{ default }}',
        // @ts-expect-error
        String(exception.name),
        // @ts-expect-error
        String(exception.message),
        String(requestUrl.pathname),
      ];
      event.extra = event.extra ? event.extra : {};
      // @ts-expect-error
      event.extra.callId = exception.response.config.headers['Nav-Callid'];
    }
    return event;
  },
});

const root = createRoot(app);

root.render(
  <StrictMode>
    <BrowserRouter basename="/">
      <RestApiErrorProvider>
        <AppIndexWrapper />
      </RestApiErrorProvider>
    </BrowserRouter>
  </StrictMode>,
);
