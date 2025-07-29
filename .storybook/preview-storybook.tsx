import type { Preview } from '@storybook/react';
import dayjs from 'dayjs';
import { initialize, mswLoader } from 'msw-storybook-addon';

import { withThemeDecorator } from '@navikt/fp-storybook-utils';

import 'dayjs/locale/nb.js';
import '@navikt/ds-css';
import '@navikt/ds-css/darkside';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-plattform-komponenter/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

dayjs.locale('nb');

export const decorators = [withThemeDecorator];

export const globalTypes = {
  theme: {
    name: 'Tema',
    description: 'Aksel tema',
    defaultValue: 'none',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'none', icon: 'close', title: 'Gammel' },
        { value: 'light', icon: 'circlehollow', title: 'Lys' },
        { value: 'dark', icon: 'circle', title: 'Mørk' },
      ],
      showName: true,
    },
  },
};

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
  decorators,
  globalTypes,
};

export default preview;
