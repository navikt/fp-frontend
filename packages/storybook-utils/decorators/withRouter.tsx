import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const withRouter = (Story: any) => (
  <BrowserRouter basename="/">
    <Story />
  </BrowserRouter>
);

export default withRouter;
