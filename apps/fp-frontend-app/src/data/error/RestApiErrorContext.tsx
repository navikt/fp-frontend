import {
  createContext,
  type FunctionComponent,
  type JSX,
  type ReactNode,
  useCallback,
  useContext,
  useReducer,
} from 'react';

import type { FpError } from './errorType';

const defaultInitialState = {
  errors: [],
};

type Action = { type: 'add'; data: FpError } | { type: 'remove' };
type Dispatch = (action: Action) => void;
type State = { errors: FpError[] };

const RestApiErrorStateContext = createContext<State>(defaultInitialState);
const RestApiErrorDispatchContext = createContext<Dispatch | undefined>(undefined);

interface OwnProps {
  children: ReactNode;
  initialState?: State;
}

/**
 * Tilbyr kontekst for lagring av feilmeldinger.
 */
export const RestApiErrorProvider: FunctionComponent<OwnProps> = ({ children, initialState }): JSX.Element => {
  const [state, dispatch] = useReducer((oldState: State, action: Action) => {
    switch (action.type) {
      case 'add':
        return {
          errors: oldState.errors.concat(action.data),
        };
      case 'remove':
        return defaultInitialState;
      default:
        throw new Error();
    }
  }, initialState || defaultInitialState);

  return (
    <RestApiErrorStateContext.Provider value={state}>
      <RestApiErrorDispatchContext.Provider value={dispatch}>{children}</RestApiErrorDispatchContext.Provider>
    </RestApiErrorStateContext.Provider>
  );
};

/**
 * Hook som tilbyr funksjoner for å legge til eller fjerne feil i kontekst.
 */
export const useRestApiErrorDispatcher = () => {
  const dispatch = useContext(RestApiErrorDispatchContext);

  const addErrorMessage = useCallback((data: FpError) => {
    if (dispatch) {
      dispatch({ type: 'add', data });
    }
  }, []);
  const removeErrorMessages = useCallback(() => {
    if (dispatch) {
      dispatch({ type: 'remove' });
    }
  }, []);

  return {
    addErrorMessage,
    removeErrorMessages,
  };
};

/**
 * Hook som henter alle feilmeldinger registrert i kontekst.
 */
export const useRestApiError = () => {
  const state = useContext(RestApiErrorStateContext);
  return state.errors;
};
