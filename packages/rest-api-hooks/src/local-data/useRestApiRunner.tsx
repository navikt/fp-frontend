import { useState, useCallback } from 'react';

import {
  REQUEST_POLLING_CANCELLED, ErrorType, RequestApi, RestKey,
} from '@fpsak-frontend/rest-api';

import RestApiState from '../RestApiState';

export type RestApiData<T> = {
  state: RestApiState;
  error?: ErrorType;
  data?: T;
}

export type RunnerOutput<T, P> = {
  startRequest: (params?: P, keepData?: boolean) => Promise<T | undefined>;
  resetRequestData: () => void;
} & RestApiData<T>;

const DEFAULT_STATE = {
  state: RestApiState.NOT_STARTED,
  error: undefined,
  data: undefined,
};

/**
 * Hook som gir deg ein funksjon til å starte restkall, i tillegg til kallets status/resultat/feil
 */
const getUseRestApiRunner = (requestApi: RequestApi) => function useRestApiRunner<T, P>(
  key: RestKey<T, P>,
): RunnerOutput<T, P> {
  const [data, setData] = useState<RestApiData<T>>(DEFAULT_STATE);

  const startRequest = useCallback((params?: P, keepData = false): Promise<T | undefined> => {
    if (requestApi.hasPath(key.name)) {
      setData((oldState) => ({
        state: RestApiState.LOADING,
        data: keepData ? oldState.data : undefined,
        error: undefined,
      }));

      return requestApi.startRequest<T, P>(key.name, params)
        .then((dataRes) => {
          setData({
            state: RestApiState.SUCCESS,
            data: dataRes.payload,
            error: undefined,
          });
          return Promise.resolve(dataRes.payload);
        })
        .catch((error) => {
          if (error?.message !== REQUEST_POLLING_CANCELLED) {
            setData({
              state: RestApiState.ERROR,
              data: undefined,
              error,
            });
            throw error;
          }
          return undefined;
        });
    }
    setData(DEFAULT_STATE);
    return Promise.resolve(undefined);
  }, []);

  const resetRequestData = useCallback(() => {
    setData(DEFAULT_STATE);
  }, []);

  return {
    startRequest,
    resetRequestData,
    ...data,
  };
};

export default getUseRestApiRunner;
