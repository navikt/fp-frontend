import React, { FunctionComponent, useEffect, useMemo } from 'react';
import { Provider } from 'react-redux';
import {
  applyMiddleware, combineReducers, compose, createStore, PreloadedState,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const isDevelopment = process.env.NODE_ENV === 'development';
const logger = isDevelopment ? require('redux-logger') : null;

const getTitleFormatter = (formName: string) => (
  formattedAction: any,
  formattedTime: string,
) => `action: ${formName} - ${formattedAction.type} - ${formattedTime}`;

const configureStore = (formName: string, formData?: PreloadedState<any>) => {
  const middleware = [thunkMiddleware];
  let enhancer;
  if (isDevelopment) {
    middleware.push(logger.createLogger({
      titleFormatter: getTitleFormatter(formName),
    }));

    /* eslint-disable-next-line no-underscore-dangle */
    const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    enhancer = composeEnhancers(applyMiddleware(...middleware));
  } else {
    enhancer = compose(applyMiddleware(...middleware));
  }

  const allReducers = combineReducers({
    form: formReducer,
  });

  const initialState = formData ? {
    form: formData,
  } : {};

  return createStore(allReducers, initialState, enhancer);
};

interface OwnProps {
  children: any;
  formName: string;
  formData?: PreloadedState<any>;
  setFormData?: (data: PreloadedState<any>) => void;
}

const ReduxWrapper: FunctionComponent<OwnProps> = ({
  children,
  formName,
  formData,
  setFormData,
}) => {
  const store = useMemo(() => configureStore(formName, formData), []);

  useEffect(() => () => {
    if (setFormData) {
      const currentFormData = store.getState().form;
      // @ts-ignore
      const allSuccedded = Object.keys(currentFormData).every((key) => currentFormData[key].submitSucceeded);
      setFormData(allSuccedded ? {} : store.getState().form);
    }
  }, []);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default ReduxWrapper;
