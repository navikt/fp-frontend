import {
  useState, useEffect, DependencyList, useRef,
} from 'react';

import { RequestApi, RestKey } from '@fpsak-frontend/rest-api';

import RestApiState from '../RestApiState';

const notEqual = (array1: DependencyList, array2: DependencyList) => !(array1.length === array2.length
  && array1.every((value, index) => value === array2[index]));
const format = (name: string): string => name.toLowerCase().replace(/_([a-z])/g, (m) => m.toUpperCase()).replace(/_/g, '');

export interface RestApiData<T> {
  state: RestApiState;
  error?: Error;
  data?: T;
}

export interface EndpointData {
  key: RestKey<any, any>,
  params?: any
}

export interface Options {
  updateTriggers?: DependencyList;
  keepData?: boolean;
  suspendRequest?: boolean;
  isCachingOn?: boolean;
}

const defaultOptions = {
  updateTriggers: [],
  keepData: false,
  suspendRequest: false,
  isCachingOn: false,
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
const getUseMultipleRestApi = (requestApi: RequestApi) => function useMultipleRestApi<T, P>(
  endpoints: EndpointData[], options: Options = defaultOptions,
):RestApiData<T> {
  const [data, setData] = useState<RestApiData<T>>(DEFAULT_STATE);

  const allOptions = { ...defaultOptions, ...options };

  const ref = useRef<DependencyList>();
  useEffect(() => {
    ref.current = allOptions.updateTriggers;
  }, [options.updateTriggers]);
  const previousTriggers = ref.current;

  useEffect(() => {
    if (!allOptions.suspendRequest) {
      setData((oldState) => ({
        state: RestApiState.LOADING,
        error: undefined,
        data: allOptions.keepData ? oldState.data : undefined,
      }));

      const filteredEndpoints = endpoints.filter((e) => requestApi.hasPath(e.key.name));

      Promise.all(filteredEndpoints.map((e) => requestApi.startRequest<T, P>(e.key.name, e.params, options.isCachingOn)))
        .then((dataRes) => {
          setData({
            state: RestApiState.SUCCESS,
            data: dataRes.reduce((acc, result, index) => ({
              ...acc,
              [format(filteredEndpoints[index].key.name)]: result.payload,
            }), {} as T),
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
  }, [...allOptions.updateTriggers]);

  return previousTriggers && notEqual(previousTriggers, allOptions.updateTriggers)
    ? { ...DEFAULT_STATE, data: options.keepData ? data.data : undefined } : data;
};

export default getUseMultipleRestApi;
