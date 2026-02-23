import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import dayjs from 'dayjs';

import { initSentry, RestApiErrorProvider } from '@navikt/fp-app-felles';

import { AppIndexWrapper } from './app/AppIndex';

import 'dayjs/locale/nb.js';
import './index.css';

dayjs.locale('nb');

const app = document.getElementById('root');
if (app === null) {
  throw new Error('No app element');
}

initSentry('fp-frontend');

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
