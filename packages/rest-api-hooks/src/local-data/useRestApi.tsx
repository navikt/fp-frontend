import {
  useState, useEffect, DependencyList,
} from 'react';

import { REQUEST_POLLING_CANCELLED, RequestApi, RestKey } from '@fpsak-frontend/rest-api';

import RestApiState from '../RestApiState';

export interface RestApiData<T> {
  state: RestApiState;
  error?: Error;
  data?: T;
}

export interface Options {
  updateTriggers?: DependencyList;
  keepData?: boolean;
  suspendRequest?: boolean;
}

const defaultOptions = {
  updateTriggers: [],
  keepData: false,
  suspendRequest: false,
};

const DEFAULT_STATE = {
  state: RestApiState.NOT_STARTED,
  error: undefined,
  data: undefined,
};

/**
  * Hook som utfører et restkall ved mount. En kan i tillegg legge ved en dependencies-liste som kan trigge ny henting når data
  * blir oppdatert. Hook returnerer rest-kallets status/resultat/feil
  */
const getUseRestApi = (requestApi: RequestApi) => function useRestApi<T, P>(
  key: RestKey<T, P>, params?: P, options?: Options,
): RestApiData<T> {
  const allOptions = { ...defaultOptions, ...options };

  const [data, setData] = useState<RestApiData<T>>(DEFAULT_STATE);

  useEffect(() => {
    if (requestApi.hasPath(key.name) && !allOptions.suspendRequest) {
      setData((oldState) => ({
        state: RestApiState.LOADING,
        error: undefined,
        data: allOptions.keepData ? oldState.data : undefined,
      }));

      requestApi.startRequest<T, P>(key.name, params)
        .then((dataRes) => {
          setData({
            state: RestApiState.SUCCESS,
            data: dataRes.payload,
            error: undefined,
          });
        })
        .catch((error) => {
          if (error?.message !== REQUEST_POLLING_CANCELLED) {
            setData({
              state: RestApiState.ERROR,
              data: undefined,
              error,
            });
          }
        });
    } else if (!requestApi.hasPath(key.name)) {
      setData(DEFAULT_STATE);
    }
  }, [...allOptions.updateTriggers]);

  if (!requestApi.hasPath(key.name) && allOptions.suspendRequest) {
    return DEFAULT_STATE;
  }
  return data;
};

export default getUseRestApi;
