import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { render } from 'react-dom';
import {
  Event, EventHint, init, Integrations,
} from '@sentry/browser';

import { RestApiErrorProvider, RestApiProvider } from '@fpsak-frontend/rest-api-hooks';

import AppIndex from './app/AppIndex';

const app = document.getElementById('app');
if (app === null) {
  throw new Error('No app element');
}

/* global VERSION:true */
/* eslint no-undef: "error" */
// @ts-ignore
const release = VERSION;
const environment = window.location.hostname;
const isDevelopment = process.env.NODE_ENV === 'development';
init({
  dsn: isDevelopment ? 'http://dev@localhost:9000/1' : 'https://d1b7de8cc42949569da03849b47d3ea1@sentry.gc.nav.no/17',
  release,
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

const history = createBrowserHistory({
  basename: '/fpsak/',
});

render(
  <Router history={history}>
    <RestApiProvider>
      <RestApiErrorProvider>
        <AppIndex />
      </RestApiErrorProvider>
    </RestApiProvider>
  </Router>,
  app,
);
