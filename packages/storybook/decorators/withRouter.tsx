import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const withRouterProvider = (Story: any) => (
  <BrowserRouter basename="/fpsak/">
    <Story />
  </BrowserRouter>
);

export default withRouterProvider;
