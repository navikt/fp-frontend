import { BrowserRouter } from 'react-router-dom';

import { type ReactRenderer } from '@storybook/react';
import type { DecoratorFunction } from '@storybook/types';

export const withRouter: DecoratorFunction<ReactRenderer> = Story => (
  <BrowserRouter basename="/">
    <Story />
  </BrowserRouter>
);
