import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import {
  FpsakApiKeys, restApiHooks, requestApi, LinkCategory,
} from '../data/fpsakApi';

const useHentInitLenker = (): boolean[] => {
  const { data: initFetchLinksFpSak, state: initFetchStateFpSak } = restApiHooks.useGlobalStateRestApi(FpsakApiKeys.INIT_FETCH);
  const { data: initFetchLinksFpTilbake, state: initFetchStateFpTilbake } = restApiHooks.useGlobalStateRestApi(FpsakApiKeys.INIT_FETCH_FPTILBAKE);

  const harFpsakInitKallFeilet = initFetchStateFpSak === RestApiState.ERROR;
  const harHentetFerdigInitLenker = initFetchStateFpSak === RestApiState.SUCCESS
    && (initFetchStateFpTilbake === RestApiState.SUCCESS || initFetchStateFpTilbake === RestApiState.ERROR);

  if (harHentetFerdigInitLenker && initFetchLinksFpSak) {
    if (initFetchLinksFpTilbake) {
      requestApi.setLinks(initFetchLinksFpSak.links.concat(initFetchLinksFpTilbake.links), LinkCategory.INIT_DATA);
      requestApi.setLinks(initFetchLinksFpSak.sakLinks.concat(initFetchLinksFpTilbake.sakLinks), LinkCategory.FAGSAK);
    } else {
      requestApi.setLinks(initFetchLinksFpSak.links, LinkCategory.INIT_DATA);
      requestApi.setLinks(initFetchLinksFpSak.sakLinks, LinkCategory.FAGSAK);
    }
  }

  return [harHentetFerdigInitLenker, harFpsakInitKallFeilet];
};

export default useHentInitLenker;
