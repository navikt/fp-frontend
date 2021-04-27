import React, {
  FunctionComponent, useCallback,
} from 'react';
import { useLocation } from 'react-router-dom';

import HistorikkSakIndex from '@fpsak-frontend/sak-historikk';
import { Historikkinnslag } from '@fpsak-frontend/types';
import { usePrevious } from '@fpsak-frontend/shared-components';

import useBehandlingEndret from '../../behandling/useBehandlingEndret';
import { FpsakApiKeys, restApiHooks } from '../../data/fpsakApi';
import { pathToBehandling, createLocationForSkjermlenke } from '../../app/paths';
import ApplicationContextPath from '../../app/ApplicationContextPath';
import useGetEnabledApplikasjonContext from '../../app/useGetEnabledApplikasjonContext';

const EMPTY_ARRAY = [] as Historikkinnslag[];

interface OwnProps {
  saksnummer: string;
  behandlingId?: number;
  behandlingVersjon?: number;
}

/**
 * HistorikkIndex
 *
 * Container komponent. Har ansvar for å hente historiken for en fagsak fra state og vise den
 */
const HistorikkIndex: FunctionComponent<OwnProps> = ({
  saksnummer,
  behandlingId,
  behandlingVersjon,
}) => {
  const enabledApplicationContexts = useGetEnabledApplikasjonContext();

  const alleKodeverkFpSak = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.KODEVERK);
  const alleKodeverkFpTilbake = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.KODEVERK_FPTILBAKE);

  const location = useLocation();
  const getBehandlingLocation = useCallback((bId: number) => ({
    ...location,
    pathname: pathToBehandling(saksnummer, bId),
  }), [location]);

  const skalBrukeFpTilbakeHistorikk = enabledApplicationContexts.includes(ApplicationContextPath.FPTILBAKE);
  const erBehandlingEndretFraUndefined = useBehandlingEndret(behandlingId, behandlingVersjon);
  const forrigeSaksnummer = usePrevious(saksnummer);
  const erBehandlingEndret = !!forrigeSaksnummer && erBehandlingEndretFraUndefined;

  const { data: historikkFpSak = EMPTY_ARRAY } = restApiHooks.useRestApi(FpsakApiKeys.HISTORY_FPSAK, { saksnummer }, {
    updateTriggers: [behandlingId, behandlingVersjon],
    suspendRequest: erBehandlingEndret,
    keepData: true,
  });
  const { data: historikkFpTilbake = EMPTY_ARRAY } = restApiHooks.useRestApi(FpsakApiKeys.HISTORY_FPTILBAKE, { saksnummer }, {
    updateTriggers: [behandlingId, behandlingVersjon],
    suspendRequest: !skalBrukeFpTilbakeHistorikk || erBehandlingEndret,
    keepData: true,
  });

  return (
    <HistorikkSakIndex
      historikkFpSak={historikkFpSak}
      historikkFpTilbake={historikkFpTilbake}
      alleKodeverkFpTilbake={alleKodeverkFpTilbake}
      alleKodeverkFpSak={alleKodeverkFpSak}
      saksnummer={saksnummer}
      getBehandlingLocation={getBehandlingLocation}
      createLocationForSkjermlenke={createLocationForSkjermlenke}
      valgtBehandlingId={behandlingId}
    />
  );
};

export default HistorikkIndex;
