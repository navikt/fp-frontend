import { useMemo } from 'react';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { BehandlingAppKontekst } from '@fpsak-frontend/types';

import useGetEnabledApplikasjonContext from '../app/useGetEnabledApplikasjonContext';
import ApplicationContextPath from '../app/ApplicationContextPath';
import useBehandlingEndret from '../behandling/useBehandlingEndret';
import { FpsakApiKeys, restApiHooks } from '../data/fpsakApi';

const useHentAlleBehandlinger = (
  saksnummer: string,
  oppfriskIndikator: number,
  behandlingId?: number,
  behandlingVersjon?: number,
): [ alleBehandlinger: BehandlingAppKontekst[], harHentet: boolean ] => {
  const erBehandlingEndretFraUndefined = useBehandlingEndret(behandlingId, behandlingVersjon);
  const enabledApplicationContexts = useGetEnabledApplikasjonContext();
  const skalHenteFraFpTilbake = enabledApplicationContexts.includes(ApplicationContextPath.FPTILBAKE);

  const { data: behandlingerFpSak, state: behandlingerFpSakState } = restApiHooks.useRestApi(
    FpsakApiKeys.BEHANDLINGER_FPSAK, { saksnummer }, {
      updateTriggers: [saksnummer, behandlingId, behandlingVersjon, oppfriskIndikator],
      suspendRequest: !saksnummer || erBehandlingEndretFraUndefined,
      keepData: true,
    },
  );

  const { data: behandlingerFpTilbake, state: behandlingerFpTilbakeState } = restApiHooks.useRestApi(
    FpsakApiKeys.BEHANDLINGER_FPTILBAKE, { saksnummer }, {
      updateTriggers: [saksnummer, behandlingId, behandlingVersjon, oppfriskIndikator],
      suspendRequest: !saksnummer || !skalHenteFraFpTilbake || erBehandlingEndretFraUndefined,
      keepData: true,
    },
  );

  const harHentetFpSak = !!behandlingerFpSak
    || (behandlingerFpSakState !== RestApiState.NOT_STARTED && behandlingerFpSakState !== RestApiState.LOADING);
  const harHentetFpTilbake = !skalHenteFraFpTilbake || !!behandlingerFpTilbake
    || (behandlingerFpTilbakeState !== RestApiState.NOT_STARTED && behandlingerFpTilbakeState !== RestApiState.LOADING);

  const alleBehandlinger = useMemo(() => [...(behandlingerFpSak || []), ...(behandlingerFpTilbake || [])],
    [behandlingerFpSak, behandlingerFpTilbake]);

  return [alleBehandlinger, harHentetFpSak && harHentetFpTilbake];
};

export default useHentAlleBehandlinger;
