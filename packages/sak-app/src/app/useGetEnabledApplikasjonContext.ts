import { FpsakApiKeys, restApiHooks } from '../data/fpsakApi';
import ApplicationContextPath from './ApplicationContextPath';

const useGetEnabledApplikasjonContext = (): ApplicationContextPath[] => {
  const enabledApplicationContexts = [ApplicationContextPath.FPSAK];

  const initFpTilbake = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.INIT_FETCH_FPTILBAKE);

  if (initFpTilbake) {
    enabledApplicationContexts.push(ApplicationContextPath.FPTILBAKE);
  }

  return enabledApplicationContexts;
};

export default useGetEnabledApplikasjonContext;
