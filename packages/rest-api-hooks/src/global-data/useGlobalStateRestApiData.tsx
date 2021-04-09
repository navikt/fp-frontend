import { useContext } from 'react';

import { AbstractRequestApi, RestKey } from '@fpsak-frontend/rest-api';

import { RestApiStateContext } from './RestApiContext';

/**
 * For mocking i unit-test
 */
export const useGlobalStateRestApiDataMock = (requestApi: AbstractRequestApi) => function useGlobalStateRestApiDataa<T, P>(
  key: RestKey<T, P>,
): T {
  // @ts-ignore
  return requestApi.startRequest<T, P>(key.name, {});
};

/**
 * Hook som bruker respons som allerede er hentet fra backend. For å kunne bruke denne
 * må @see useGlobalStateRestApi først brukes for å hente data fra backend
 */
function useGlobalStateRestApiData<T, P>(key: RestKey<T, P>): T {
  const state = useContext(RestApiStateContext);
  return state[key.name];
}

export default useGlobalStateRestApiData;
