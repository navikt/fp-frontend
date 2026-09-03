import type { Preview } from '@storybook/react';
import dayjs from 'dayjs';
import { mswLoader } from 'msw-storybook-addon/csf3';
import type { SetupWorker } from 'msw/browser';

import { withThemeDecorator } from '@navikt/fp-storybook-utils';

import 'dayjs/locale/nb.js';
import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-plattform-komponenter/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

dayjs.locale('nb');

import './index.css';

export const decorators = [withThemeDecorator];

export const globalTypes = {
  theme: {
    name: 'Tema',
    description: 'Aksel tema',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'Lys' },
        { value: 'dark', icon: 'circle', title: 'Mørk' },
      ],
      showName: true,
    },
  },
};

const preview: Preview = {
  loaders: [
    mswLoader(async () => {
      if (import.meta.env.MODE === 'test') {
        const { setupServer } = await import('msw/node');
        const server = setupServer();
        server.listen({ onUnhandledRequest: 'bypass' });
        return server as unknown as SetupWorker;
      }

      const { setupWorker } = await import('msw/browser');
      const worker = setupWorker();
      await worker.start({
        onUnhandledRequest: 'bypass',
        serviceWorker: {
          url: './mockServiceWorker.js',
        },
      });
      return worker;
    }),
  ],
  decorators,
  globalTypes,
};

export default preview;
