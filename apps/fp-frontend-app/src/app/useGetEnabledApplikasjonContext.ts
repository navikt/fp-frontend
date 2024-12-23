import { FagsakApiKeys, restFagsakApiHooks } from '../data/fagsakContextApi';
import { ApplicationContextPath } from './ApplicationContextPath';

export const useGetEnabledApplikasjonContext = (): ApplicationContextPath[] => {
  const enabledApplicationContexts = [ApplicationContextPath.FPSAK];

  const initFpTilbake = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.INIT_FETCH_FPTILBAKE);

  if (initFpTilbake) {
    enabledApplicationContexts.push(ApplicationContextPath.FPTILBAKE);
  }

  return enabledApplicationContexts;
};
