import type { Preview } from '@storybook/react';
import dayjs from 'dayjs';
import { initialize, mswLoader } from 'msw-storybook-addon';

import 'dayjs/locale/nb.js';
import '@navikt/ds-css';

dayjs.locale('nb');

const preview: Preview = {
  beforeAll: async () => {
    initialize({
      onUnhandledRequest: 'bypass',
      serviceWorker: {
        url: './mockServiceWorker.js',
      },
    });
  },
  loaders: [mswLoader],
};

export default preview;
