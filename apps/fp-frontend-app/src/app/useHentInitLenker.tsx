import { RestApiState } from '@navikt/fp-rest-api-hooks';

import { FagsakApiKeys, restFagsakApiHooks, requestFagsakApi, LinkCategory } from '../data/fagsakContextApi';

const useHentInitLenker = (): boolean[] => {
  const { data: initFetchLinksFpSak, state: initFetchStateFpSak } = restFagsakApiHooks.useGlobalStateRestApi(
    FagsakApiKeys.INIT_FETCH,
  );
  const { data: initFetchLinksFpTilbake, state: initFetchStateFpTilbake } = restFagsakApiHooks.useGlobalStateRestApi(
    FagsakApiKeys.INIT_FETCH_FPTILBAKE,
  );

  const harFpsakInitKallFeilet = initFetchStateFpSak === RestApiState.ERROR;
  const harHentetFerdigInitLenker =
    initFetchStateFpSak === RestApiState.SUCCESS &&
    (initFetchStateFpTilbake === RestApiState.SUCCESS || initFetchStateFpTilbake === RestApiState.ERROR);

  if (harHentetFerdigInitLenker && initFetchLinksFpSak) {
    if (initFetchLinksFpTilbake) {
      requestFagsakApi.setLinks(
        initFetchLinksFpSak.links.concat(initFetchLinksFpTilbake.links),
        LinkCategory.INIT_DATA,
      );
      requestFagsakApi.setLinks(
        initFetchLinksFpSak.sakLinks.concat(initFetchLinksFpTilbake.sakLinks),
        LinkCategory.FAGSAK,
      );
    } else {
      requestFagsakApi.setLinks(initFetchLinksFpSak.links, LinkCategory.INIT_DATA);
      requestFagsakApi.setLinks(initFetchLinksFpSak.sakLinks, LinkCategory.FAGSAK);
    }
  }

  return [harHentetFerdigInitLenker, harFpsakInitKallFeilet];
};

export default useHentInitLenker;
