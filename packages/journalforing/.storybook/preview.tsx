import React from 'react';

import { Preview, StoryFn } from '@storybook/react';
import dayjs from 'dayjs';
import { initialize, mswLoader } from 'msw-storybook-addon';

import '../../../.storybook/globalStylesStorybook.module.css';

import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';
import 'dayjs/locale/nb.js';

dayjs.locale('nb');
export const decorators = [
  (Story: StoryFn) => (
    <div style={{ margin: '40px' }}>
      <Story />
    </div>
  ),
];

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
