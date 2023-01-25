import { useMemo } from 'react';
import { RestApiState } from '@navikt/fp-rest-api-hooks';

import useGetEnabledApplikasjonContext from '../app/useGetEnabledApplikasjonContext';
import ApplicationContextPath from '../app/ApplicationContextPath';
import useBehandlingEndret from '../behandling/useBehandlingEndret';
import { FpsakApiKeys, restApiHooks } from '../data/fpsakApi';
import FagsakData from './FagsakData';

const useHentFagsak = (saksnummer: string, behandlingUuid?: string, behandlingVersjon?: number, behandlingerTeller?: number):
[ harHentet: boolean, fagsakData: FagsakData | undefined ] => {
  const erBehandlingEndretFraUndefined = useBehandlingEndret(behandlingUuid, behandlingVersjon);
  const enabledApplicationContexts = useGetEnabledApplikasjonContext();
  const skalHenteFraFpTilbake = enabledApplicationContexts.includes(ApplicationContextPath.FPTILBAKE);

  const { data: fagsak } = restApiHooks.useRestApi(FpsakApiKeys.FETCH_FAGSAK, { saksnummer }, {
    updateTriggers: [behandlingUuid, behandlingVersjon, behandlingerTeller],
    suspendRequest: !saksnummer || erBehandlingEndretFraUndefined,
    keepData: true,
  });

  const { data: fagsakDataTilbake, state: fagsakDataTilbakeState } = restApiHooks.useRestApi(FpsakApiKeys.FETCH_FAGSAKDATA_FPTILBAKE, { saksnummer }, {
    updateTriggers: [behandlingUuid, behandlingVersjon, behandlingerTeller],
    suspendRequest: !skalHenteFraFpTilbake || !saksnummer || erBehandlingEndretFraUndefined,
    keepData: true,
  });

  const harHentetFpSak = !!fagsak;
  const harHentetFpTilbake = !skalHenteFraFpTilbake
    || !!fagsakDataTilbake
    || fagsakDataTilbakeState === RestApiState.ERROR;

  const harHentetData = harHentetFpSak && harHentetFpTilbake;
  const fagsakData = useMemo(() => (harHentetData ? new FagsakData(fagsak, fagsakDataTilbake) : undefined),
    [harHentetData, fagsak, fagsakDataTilbake]);

  return [harHentetData, fagsakData];
};

export default useHentFagsak;
