import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import dayjs from 'dayjs';

import { initSentry, RestApiErrorProvider } from '@navikt/fp-app-felles';

import { JournalføringAppIndexWrapper } from './JournalforingAppIndex';

import 'dayjs/locale/nb.js';

dayjs.locale('nb');

const app = document.getElementById('root');
if (app === null) {
  throw new Error('No app element');
}
initSentry('fp-journalforing');

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
