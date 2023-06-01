import { useCallback, useMemo, useState } from 'react';
import { RestApiState } from '@navikt/fp-rest-api-hooks';

import useGetEnabledApplikasjonContext from '../app/useGetEnabledApplikasjonContext';
import ApplicationContextPath from '../app/ApplicationContextPath';
import useBehandlingEndret from '../behandling/useBehandlingEndret';
import { FagsakApiKeys, LinkCategory, requestFagsakApi, restFagsakApiHooks } from '../data/fagsakContextApi';
import FagsakData from './FagsakData';

const useHentFagsak = (
  saksnummer: string,
  behandlingUuid?: string,
  behandlingVersjon?: number,
): [harHentet: boolean, fagsakData: FagsakData | undefined, oppdaterFagsak: () => void] => {
  const erBehandlingEndretFraUndefined = useBehandlingEndret(behandlingUuid, behandlingVersjon);
  const enabledApplicationContexts = useGetEnabledApplikasjonContext();
  const skalHenteFraFpTilbake = enabledApplicationContexts.includes(ApplicationContextPath.FPTILBAKE);

  const [trigger, setTrigger] = useState(0);
  const oppdaterFagsak = useCallback(() => setTrigger(old => old + 1), []);

  const { data: fagsak } = restFagsakApiHooks.useRestApi(
    FagsakApiKeys.FETCH_FAGSAK,
    { saksnummer },
    {
      updateTriggers: [behandlingUuid, behandlingVersjon, trigger],
      suspendRequest: !saksnummer || erBehandlingEndretFraUndefined,
      keepData: true,
    },
  );

  const { data: fagsakDataTilbake, state: fagsakDataTilbakeState } = restFagsakApiHooks.useRestApi(
    FagsakApiKeys.FETCH_FAGSAKDATA_FPTILBAKE,
    { saksnummer },
    {
      updateTriggers: [behandlingUuid, behandlingVersjon, trigger],
      suspendRequest: !skalHenteFraFpTilbake || !saksnummer || erBehandlingEndretFraUndefined,
      keepData: true,
    },
  );

  const harHentetFpSak = !!fagsak;
  const harHentetFpTilbake =
    !skalHenteFraFpTilbake || !!fagsakDataTilbake || fagsakDataTilbakeState === RestApiState.ERROR;

  const harHentetData = harHentetFpSak && harHentetFpTilbake;
  const fagsakData = useMemo(
    () => (harHentetData ? new FagsakData(fagsak, fagsakDataTilbake) : undefined),
    [harHentetData, fagsak, fagsakDataTilbake],
  );

  const behandling = fagsakData?.getBehandling(behandlingUuid);
  if (behandling) {
    requestFagsakApi.setLinks(behandling.links, LinkCategory.BEHANDLING);
  }

  return [harHentetData, fagsakData, oppdaterFagsak];
};

export default useHentFagsak;
