import {
  useState, useEffect, DependencyList,
} from 'react';

import { usePrevious } from '@fpsak-frontend/shared-components';
import { AbstractRequestApi } from '@fpsak-frontend/rest-api-new';

import RestApiState from '../RestApiState';

const notEqual = (array1, array2) => !(array1.length === array2.length && array1.every((value, index) => value === array2[index]));
const format = (name) => name.toLowerCase().replace(/_([a-z])/g, (m) => m.toUpperCase()).replace(/_/g, '');

interface RestApiData<T> {
  state: RestApiState;
  error?: Error;
  data?: T;
}

interface Options {
  updateTriggers?: DependencyList;
  keepData?: boolean;
  suspendRequest?: boolean;
}

const defaultOptions = {
  updateTriggers: [],
  keepData: false,
  suspendRequest: false,
};

/**
 * For mocking i unit-test
 */
export const getUseMultipleRestApiMock = (requestApi: AbstractRequestApi) => function useMultipleRestApi<T>(
  endpoints: { key: string, params?: any }[], options: Options = defaultOptions,
):RestApiData<T> {
  return {
    state: options.suspendRequest ? RestApiState.NOT_STARTED : RestApiState.SUCCESS,
    error: undefined,
    data: options.suspendRequest ? undefined : requestApi.startRequest(key, params),
  };
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
const getUseMultipleRestApi = (requestApi: AbstractRequestApi) => function useMultipleRestApi<T>(
  endpoints: { key: string, params?: any }[], options: Options = defaultOptions,
):RestApiData<T> {
  const [data, setData] = useState(DEFAULT_STATE);

  const previousTriggers = usePrevious(options.updateTriggers);

  useEffect(() => {
    if (!options.suspendRequest) {
      setData((oldState) => ({
        state: RestApiState.LOADING,
        error: undefined,
        data: options.keepData ? oldState.data : undefined,
      }));

      const filteredEndpoints = endpoints.filter((e) => requestApi.hasPath(e.key));

      Promise.all(filteredEndpoints.map((e) => requestApi.startRequest(e.key, e.params)))
        .then((dataRes) => {
          setData({
            state: RestApiState.SUCCESS,
            data: dataRes.reduce((acc, result, index) => ({
              ...acc,
              [format(filteredEndpoints[index].key)]: result.payload,
            }), {}),
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
    } else {
      setData(DEFAULT_STATE);
    }
  }, [...options.updateTriggers]);

  return previousTriggers && notEqual(previousTriggers, options.updateTriggers) ? DEFAULT_STATE : data;
};

export default getUseMultipleRestApi;
