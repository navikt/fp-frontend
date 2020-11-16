import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { Link } from '@fpsak-frontend/rest-api';

import {
  FpsakApiKeys, restApiHooks, requestApi, LinkCategory,
} from '../data/fpsakApi';

type InitLinks = {
  links: Link[];
  toggleLinks: Link[];
  sakLinks: Link[];
};

const useHentInitLenker = (): boolean[] => {
  const { data: initFetchLinksFpSak, state: initFetchStateFpSak } = restApiHooks.useGlobalStateRestApi<InitLinks>(FpsakApiKeys.INIT_FETCH);
  const { data: initFetchLinksFpTilbake, state: initFetchStateFpTilbake } = restApiHooks.useGlobalStateRestApi<InitLinks>(FpsakApiKeys.INIT_FETCH_FPTILBAKE);

  const harFpsakInitKallFeilet = initFetchStateFpSak === RestApiState.ERROR;
  const harHentetFerdigInitLenker = initFetchStateFpSak === RestApiState.SUCCESS
    && (initFetchStateFpTilbake === RestApiState.SUCCESS || initFetchStateFpTilbake === RestApiState.ERROR);

  if (harHentetFerdigInitLenker) {
    if (initFetchLinksFpTilbake) {
      requestApi.setLinks(initFetchLinksFpSak.links.concat(initFetchLinksFpTilbake.links), LinkCategory.INIT_DATA);
      requestApi.setLinks(initFetchLinksFpSak.sakLinks.concat(initFetchLinksFpTilbake.sakLinks), LinkCategory.FAGSAK);
      requestApi.setLinks(initFetchLinksFpSak.toggleLinks, LinkCategory.FEATURE_TOGGLE);
    } else {
      requestApi.setLinks(initFetchLinksFpSak.links, LinkCategory.INIT_DATA);
      requestApi.setLinks(initFetchLinksFpSak.sakLinks, LinkCategory.FAGSAK);
      requestApi.setLinks(initFetchLinksFpSak.toggleLinks, LinkCategory.FEATURE_TOGGLE);
    }
  }

  return [harHentetFerdigInitLenker, harFpsakInitKallFeilet];
};

export default useHentInitLenker;
