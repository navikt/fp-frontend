import { RequestApi } from '@navikt/fp-rest-api';

import getUseGlobalStateRestApi from './global-data/useGlobalStateRestApi';
import useGlobalStateRestApiData from './global-data/useGlobalStateRestApiData';
import getUseMultipleRestApi from './local-data/useMultipleRestApi';
import getUseRestApi from './local-data/useRestApi';
import getUseRestApiRunner from './local-data/useRestApiRunner';

const initHooks = (requestApi: RequestApi) => ({
  useRestApi: getUseRestApi(requestApi),
  useMultipleRestApi: getUseMultipleRestApi(requestApi),
  useRestApiRunner: getUseRestApiRunner(requestApi),
  useGlobalStateRestApi: getUseGlobalStateRestApi(requestApi),
  useGlobalStateRestApiData,
});

export default { initHooks };
