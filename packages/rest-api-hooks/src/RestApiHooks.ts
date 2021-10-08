import { RequestApi } from '@fpsak-frontend/rest-api';

import getUseRestApi from './local-data/useRestApi';
import getUseMultipleRestApi from './local-data/useMultipleRestApi';
import getUseRestApiRunner from './local-data/useRestApiRunner';
import getUseGlobalStateRestApi from './global-data/useGlobalStateRestApi';
import useGlobalStateRestApiData from './global-data/useGlobalStateRestApiData';

const initHooks = (requestApi: RequestApi) => ({
  useRestApi: getUseRestApi(requestApi),
  useMultipleRestApi: getUseMultipleRestApi(requestApi),
  useRestApiRunner: getUseRestApiRunner(requestApi),
  useGlobalStateRestApi: getUseGlobalStateRestApi(requestApi),
  useGlobalStateRestApiData,
});

export default { initHooks };
