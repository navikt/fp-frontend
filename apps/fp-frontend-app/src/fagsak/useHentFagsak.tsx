import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { ApplicationContextPath } from '../app/ApplicationContextPath';
import { useGetEnabledApplikasjonContext } from '../app/useGetEnabledApplikasjonContext';
import { useBehandlingEndret } from '../behandling/useBehandlingEndret';
import { useFagsakApi } from '../data/fagsakApi';
import { FagsakData } from './FagsakData';

export const useHentFagsak = (
  saksnummer: string,
  behandlingUuid?: string,
  behandlingVersjon?: number,
): [harHentet: boolean, fagsakData: FagsakData | undefined] => {
  const api = useFagsakApi();
  const erBehandlingEndretFraUndefined = useBehandlingEndret(behandlingUuid, behandlingVersjon);
  const enabledApplicationContexts = useGetEnabledApplikasjonContext();
  const skalHenteFraFpTilbake = enabledApplicationContexts.includes(ApplicationContextPath.FPTILBAKE);

  const { data: fagsak, refetch: refetchFagsak } = useQuery(api.hentFagsakOptions(saksnummer));

  const {
    data: fagsakDataTilbake,
    status: fagsakDataTilbakeStatus,
    refetch: refetchFpTilbakeFagsak,
  } = useQuery(api.fptilbake.hentFagsakOptions(skalHenteFraFpTilbake, saksnummer));

  useEffect(() => {
    if (!erBehandlingEndretFraUndefined) {
      refetchFagsak();
      refetchFpTilbakeFagsak();
    }
  }, [behandlingUuid, behandlingVersjon]);

  const harHentetFpSak = !!fagsak;
  const harHentetFpTilbake = !skalHenteFraFpTilbake || !!fagsakDataTilbake || fagsakDataTilbakeStatus === 'error';

  const harHentetData = harHentetFpSak && harHentetFpTilbake;
  const fagsakData = harHentetData ? new FagsakData(fagsak, fagsakDataTilbake) : undefined;

  return [harHentetData, fagsakData];
};
