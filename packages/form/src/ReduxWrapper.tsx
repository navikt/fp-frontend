import React, { FunctionComponent, useEffect, useMemo } from 'react';
import { Provider } from 'react-redux';
import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const isDevelopment = process.env.NODE_ENV === 'development';
const logger = isDevelopment ? require('redux-logger') : null;

const configureStore = (formData: any) => {
  const middleware = [thunkMiddleware];
  let enhancer;
  if (isDevelopment) {
    middleware.push(logger.createLogger());

    /* eslint-disable-next-line no-underscore-dangle */
    const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    enhancer = composeEnhancers(applyMiddleware(...middleware));
  } else {
    enhancer = compose(applyMiddleware(...middleware));
  }

  const allReducers = combineReducers({
    form: formReducer,
  });

  const initialState = {
    form: formData,
  };

  return createStore(allReducers, initialState, enhancer);
};

interface OwnProps {
  children: any;
  formData: any;
  setFormData: (data: any) => void;
}

const ReduxWrapper: FunctionComponent<OwnProps> = ({
  children,
  formData,
  setFormData,
}) => {
  const store = useMemo(() => configureStore(formData), []);

  useEffect(() => () => {
    setFormData(store.getState().form);
  }, []);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default ReduxWrapper;
