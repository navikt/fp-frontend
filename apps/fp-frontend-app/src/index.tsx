/* eslint-disable import/no-import-module-exports */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Event, EventHint, init, Integrations } from '@sentry/browser';
import dayjs from 'dayjs';
import 'dayjs/locale/nb.js';

import { RestApiErrorProvider, RestApiProvider } from '@navikt/fp-rest-api-hooks';

import AppIndex from './app/AppIndex';

dayjs.locale('nb');

const app = document.getElementById('app');
if (app === null) {
  throw new Error('No app element');
}

const environment = window.location.hostname;
const isDevelopment = import.meta.env.MODE === 'development';

init({
  dsn: isDevelopment ? 'http://dev@localhost:9100/1' : 'https://d1b7de8cc42949569da03849b47d3ea1@sentry.gc.nav.no/17',
  release: import.meta.env.SENTRY_RELEASE || 'unknown',
  environment,
  integrations: [new Integrations.Breadcrumbs({ console: false })],
  beforeSend: (event: Event, hint: EventHint) => {
    const exception = hint.originalException;
    // @ts-ignore
    if (exception.isAxiosError) {
      // @ts-ignore
      const requestUrl = new URL(exception.request.responseURL);
      // eslint-disable-next-line no-param-reassign
      event.fingerprint = [
        '{{ default }}',
        // @ts-ignore
        String(exception.name),
        // @ts-ignore
        String(exception.message),
        String(requestUrl.pathname),
      ];
      // eslint-disable-next-line no-param-reassign
      event.extra = event.extra ? event.extra : {};
      // @ts-ignore
      // eslint-disable-next-line no-param-reassign
      event.extra.callId = exception.response.config.headers['Nav-Callid'];
    }
    return event;
  },
});

const root = createRoot(app);

root.render(
  <BrowserRouter basename="/">
    <RestApiProvider>
      <RestApiErrorProvider>
        <AppIndex />
      </RestApiErrorProvider>
    </RestApiProvider>
  </BrowserRouter>,
);
