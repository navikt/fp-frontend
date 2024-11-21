import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const withRouter = (Story: any) => (
  <BrowserRouter basename="/">
    <Story />
  </BrowserRouter>
);
