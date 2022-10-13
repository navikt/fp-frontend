import { useMemo } from 'react';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import useGetEnabledApplikasjonContext from '../app/useGetEnabledApplikasjonContext';
import ApplicationContextPath from '../app/ApplicationContextPath';
import useBehandlingEndret from '../behandling/useBehandlingEndret';
import { FpsakApiKeys, restApiHooks } from '../data/fpsakApi';
import FagsakData from './FagsakData';

const useHentFagsak = (saksnummer: string, behandlingUuid?: string, behandlingVersjon?: number):
[ harHentet: boolean, fagsakData: FagsakData | undefined ] => {
  const erBehandlingEndretFraUndefined = useBehandlingEndret(behandlingUuid, behandlingVersjon);
  const enabledApplicationContexts = useGetEnabledApplikasjonContext();
  const skalHenteFraFpTilbake = enabledApplicationContexts.includes(ApplicationContextPath.FPTILBAKE);

  const { data: fagsak, state: fagsakState } = restApiHooks.useRestApi(FpsakApiKeys.FETCH_FAGSAK, { saksnummer }, {
    updateTriggers: [saksnummer, behandlingUuid, behandlingVersjon],
    suspendRequest: !saksnummer || erBehandlingEndretFraUndefined,
    keepData: true,
  });

  const { data: fagsakDataTilbake, state: fagsakDataTilbakeState } = restApiHooks.useRestApi(FpsakApiKeys.FETCH_FAGSAKDATA_FPTILBAKE, { saksnummer }, {
    updateTriggers: [saksnummer, behandlingUuid, behandlingVersjon],
    suspendRequest: !skalHenteFraFpTilbake || !saksnummer || erBehandlingEndretFraUndefined,
    keepData: true,
  });

  const harHentetFpSak = !!fagsak
    || (fagsakState !== RestApiState.NOT_STARTED && fagsakState !== RestApiState.LOADING);
  const harHentetFpTilbake = !skalHenteFraFpTilbake || !!fagsakDataTilbake
    || (fagsakDataTilbakeState !== RestApiState.NOT_STARTED && fagsakDataTilbakeState !== RestApiState.LOADING);

  const harHentetData = harHentetFpSak && harHentetFpTilbake;
  const fagsakData = useMemo(() => (harHentetData ? new FagsakData(fagsak, fagsakDataTilbake) : undefined),
    [harHentetData, fagsak, fagsakDataTilbake]);

  return [harHentetData, fagsakData];
};

export default useHentFagsak;
