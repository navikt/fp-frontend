import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({
  basename: '/fpsak/',
});

const withReduxAndRouterProvider = (Story) => (
  <Router history={history}>
    <Story />
  </Router>
);

export default withReduxAndRouterProvider;
