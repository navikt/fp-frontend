import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { ReduxWrapper } from '@fpsak-frontend/form';

const history = createBrowserHistory({
  basename: '/fpsak/',
});

const withReduxAndRouterProvider = (Story) => (
  <ReduxWrapper formData={{}} setFormData={() => undefined}>
    <Router history={history}>
      <Story />
    </Router>
  </ReduxWrapper>
);

export default withReduxAndRouterProvider;
