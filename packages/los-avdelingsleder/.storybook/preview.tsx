import { Preview, ReactRenderer } from '@storybook/react';
import dayjs from 'dayjs';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { DecoratorFunction } from 'storybook/internal/types';

import '../../../.storybook/globalStylesStorybook.module.css';

import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';
import 'dayjs/locale/nb.js';

dayjs.locale('nb');

const marginDecorator: DecoratorFunction<ReactRenderer> = Story => (
  <div style={{ margin: '40px' }}>
    <Story />
  </div>
);

export const decorators = [marginDecorator];

const preview: Preview = {
  decorators,
  // beforeAll is available in Storybook 8.2. Else the call would happen outside of the preview object
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
