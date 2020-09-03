import {
  useState, useEffect, DependencyList,
} from 'react';

import { NotificationMapper, AbstractRequestApi } from '@fpsak-frontend/rest-api-new';

import useRestApiErrorDispatcher from '../error/useRestApiErrorDispatcher';
import RestApiState from '../RestApiState';

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

/**
  * Hook som utfører et restkall ved mount. En kan i tillegg legge ved en dependencies-liste som kan trigge ny henting når data
  * blir oppdatert. Hook returnerer rest-kallets status/resultat/feil
  */
const getUseMultipleRestApi = (requestApi: AbstractRequestApi) => function useMultipleRestApi<T>(
  endpoints: { key: string, params?: any }[], options: Options = defaultOptions,
):RestApiData<T> {
  const [data, setData] = useState({
    state: RestApiState.NOT_STARTED,
    error: undefined,
    data: undefined,
  });

  const { addErrorMessage } = useRestApiErrorDispatcher();
  const notif = new NotificationMapper();
  notif.addRequestErrorEventHandlers((errorData, type) => {
    addErrorMessage({ ...errorData, type });
  });

  useEffect(() => {
    if (endpoints.every((e) => requestApi.hasPath(e.key)) && !options.suspendRequest) {
      setData((oldState) => ({
        state: RestApiState.LOADING,
        error: undefined,
        data: options.keepData ? oldState.data : undefined,
      }));

      Promise.all(endpoints.map((e) => requestApi.startRequest(e.key, e.params, notif)))
        .then((dataRes) => {
          setData({
            state: RestApiState.SUCCESS,
            data: dataRes.reduce((acc, result, index) => ({
              ...acc,
              [format(endpoints[index].key)]: result.payload,
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
    } else if (endpoints.some((e) => !requestApi.hasPath(e.key))) {
      setData({
        state: RestApiState.NOT_STARTED,
        error: undefined,
        data: undefined,
      });
    }
  }, [...options.updateTriggers]);

  return data;
};

export default getUseMultipleRestApi;
