import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import dayjs from 'dayjs';

import { initFaro, initSentry, RestApiErrorProvider } from '@navikt/fp-app-felles';

import { JournalføringAppIndexWrapper } from './JournalforingAppIndex';

import 'dayjs/locale/nb.js';
import './index.css';

dayjs.locale('nb');

const app = document.getElementById('root');
if (app === null) {
  throw new Error('No app element');
}
initSentry('fp-journalforing');
initFaro();

const root = createRoot(app);

root.render(
  <StrictMode>
    <BrowserRouter basename="/">
      <RestApiErrorProvider>
        <JournalføringAppIndexWrapper />
      </RestApiErrorProvider>
    </BrowserRouter>
  </StrictMode>,
);
