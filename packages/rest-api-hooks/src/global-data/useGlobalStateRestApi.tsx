import {
  useState, useEffect, useContext, DependencyList,
} from 'react';

import { RequestApi, RestKey } from '@fpsak-frontend/rest-api';

import { RestApiDispatchContext } from './RestApiContext';
import RestApiState from '../RestApiState';

interface RestApiData<T> {
  state: RestApiState;
  error?: Error;
  data?: T;
}

interface Options {
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
const getUseGlobalStateRestApi = (requestApi: RequestApi) => function useGlobalStateRestApi<T, P>(
  key: RestKey<T, P>, params?: P, options: Options = defaultOptions,
):RestApiData<T> {
  const allOptions = { ...defaultOptions, ...options };

  const [data, setData] = useState<RestApiData<T>>({
    state: RestApiState.NOT_STARTED,
    error: undefined,
    data: undefined,
  });

  const dispatch = useContext(RestApiDispatchContext);

  useEffect(() => {
    if (dispatch && requestApi.hasPath(key.name) && !allOptions.suspendRequest) {
      dispatch({ type: 'remove', key: key.name });

      setData({
        state: RestApiState.LOADING,
        error: undefined,
        data: undefined,
      });

      requestApi.startRequest<T, P>(key.name, params)
        .then((dataRes: { payload: T }) => {
          dispatch({ type: 'success', key: key.name, data: dataRes.payload });
          setData({
            state: RestApiState.SUCCESS,
            data: dataRes.payload,
            error: undefined,
          });
        })
        .catch((error) => {
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
