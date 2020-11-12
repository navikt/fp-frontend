import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '@fpsak-frontend/sak-app/src/configureStore';

const withReduxProvider = (Story) => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Story />
    </Provider>
  );
};

export default withReduxProvider;
