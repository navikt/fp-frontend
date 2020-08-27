import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import configureStore from '@fpsak-frontend/sak-app/src/configureStore';

const history = createBrowserHistory({
  basename: '/fpsak/',
});

const withReduxProvider = (Story) => {
  const store = configureStore(history);
  return (
    <Provider store={store}>
      <Story />
    </Provider>
  );
};

export default withReduxProvider;
