import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { StoryFn } from '@storybook/react';

export const withRouter = (Story: StoryFn) => (
  <BrowserRouter basename="/">
    <Story />
  </BrowserRouter>
);
