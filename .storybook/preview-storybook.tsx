import type { Preview, ReactRenderer } from '@storybook/react';
import type { DecoratorFunction } from '@storybook/types';
import dayjs from 'dayjs';
import { initialize, mswLoader } from 'msw-storybook-addon';

import './globalStylesStorybook.module.css';

import 'dayjs/locale/nb.js';

dayjs.locale('nb');

const withMarginDecorator: DecoratorFunction<ReactRenderer> = Story => (
  <div style={{ margin: '40px' }}>
    <Story />
  </div>
);

export const decorators = [withMarginDecorator];

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
