import { useContext } from 'react';

import { AbstractRequestApi } from '@fpsak-frontend/rest-api';

import { RestApiStateContext } from './RestApiContext';

/**
 * For mocking i unit-test
 */
export const useGlobalStateRestApiDataMock = (requestApi: AbstractRequestApi) => function useGlobalStateRestApiDataa<T>(
  key: string,
): T {
  // @ts-ignore
  return requestApi.startRequest<T>(key, {});
};

/**
 * Hook som bruker respons som allerede er hentet fra backend. For å kunne bruke denne
 * må @see useGlobalStateRestApi først brukes for å hente data fra backend
 */
function useGlobalStateRestApiData<T>(key: string): T {
  const state = useContext(RestApiStateContext);
  return state[key];
}

export default useGlobalStateRestApiData;
