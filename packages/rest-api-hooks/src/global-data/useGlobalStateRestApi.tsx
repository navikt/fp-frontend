import { useState, useEffect, useContext, DependencyList } from 'react';

import { RequestApi } from '@navikt/fp-rest-api';

import { RestApiDispatchContext } from './RestApiContext';
import RestApiState from '../RestApiState';

export interface RestApiData<T> {
  state: RestApiState;
  error?: Error;
  data?: T;
}

export interface Options {
  updateTriggers?: DependencyList;
  suspendRequest?: boolean;
}

const defaultOptions = {
  updateTriggers: [],
  suspendRequest: false,
};

/**
 * Hook som henter data fra backend og deretter lagrer i @see RestApiContext
 */
const getUseGlobalStateRestApi = (requestApi: RequestApi) =>
  function useGlobalStateRestApi<T, P>(key: string, params?: P, options: Options = defaultOptions): RestApiData<T> {
    const allOptions = { ...defaultOptions, ...options };

    const [data, setData] = useState<RestApiData<T>>({
      state: RestApiState.NOT_STARTED,
      error: undefined,
      data: undefined,
    });

    const dispatch = useContext(RestApiDispatchContext);

    useEffect(() => {
      if (dispatch && requestApi.hasPath(key) && !allOptions.suspendRequest) {
        dispatch({ type: 'remove', key });

        setData({
          state: RestApiState.LOADING,
          error: undefined,
          data: undefined,
        });

        requestApi
          .startRequest<T, P>(key, params)
          .then((dataRes: { payload: T }) => {
            dispatch({ type: 'success', key, data: dataRes.payload });
            setData({
              state: RestApiState.SUCCESS,
              data: dataRes.payload,
              error: undefined,
            });
          })
          .catch(error => {
            setData({
              state: RestApiState.ERROR,
              data: undefined,
              error,
            });
          });
      }
    }, allOptions.updateTriggers);

    return data;
  };

export default getUseGlobalStateRestApi;
