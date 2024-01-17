import { FagsakApiKeys, useFagsakGlobalStateRestApiData } from '../data/fagsakContextApi';
import ApplicationContextPath from './ApplicationContextPath';

const useGetEnabledApplikasjonContext = (): ApplicationContextPath[] => {
  const enabledApplicationContexts = [ApplicationContextPath.FPSAK];

  const initFpTilbake = useFagsakGlobalStateRestApiData(FagsakApiKeys.INIT_FETCH_FPTILBAKE);

  if (initFpTilbake) {
    enabledApplicationContexts.push(ApplicationContextPath.FPTILBAKE);
  }

  return enabledApplicationContexts;
};

export default useGetEnabledApplikasjonContext;
