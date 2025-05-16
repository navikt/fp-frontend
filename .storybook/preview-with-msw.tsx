import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';

import defaultPrewiew from './preview-storybook';

const previewWithMSW: Preview = {
  ...defaultPrewiew,
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

export default previewWithMSW;
