import React, {
  FunctionComponent, useCallback,
} from 'react';
import { useLocation } from 'react-router-dom';
import { usePrevious } from '@navikt/ft-ui-komponenter';

import HistorikkSakIndex from '@fpsak-frontend/sak-historikk';
import { Historikkinnslag } from '@fpsak-frontend/types';

import useBehandlingEndret from '../../behandling/useBehandlingEndret';
import { FpsakApiKeys, restApiHooks } from '../../data/fpsakApi';
import { pathToBehandling, createLocationForSkjermlenke } from '../../app/paths';

const EMPTY_ARRAY = [] as Historikkinnslag[];

interface OwnProps {
  saksnummer: string;
  behandlingUuid?: string;
  behandlingVersjon?: number;
  historikkinnslagFpTilbake?: Historikkinnslag[];
}

/**
 * HistorikkIndex
 *
 * Container komponent. Har ansvar for å hente historiken for en fagsak fra state og vise den
 */
const HistorikkIndex: FunctionComponent<OwnProps> = ({
  saksnummer,
  behandlingUuid,
  behandlingVersjon,
  historikkinnslagFpTilbake,
}) => {
  const alleKodeverkFpSak = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.KODEVERK);
  const alleKodeverkFpTilbake = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.KODEVERK_FPTILBAKE);

  const location = useLocation();
  const getBehandlingLocation = useCallback((bUuid: string) => ({
    ...location,
    pathname: pathToBehandling(saksnummer, bUuid),
  }), [location]);

  const erBehandlingEndretFraUndefined = useBehandlingEndret(behandlingUuid, behandlingVersjon);
  const forrigeSaksnummer = usePrevious(saksnummer);
  const erBehandlingEndret = !!forrigeSaksnummer && erBehandlingEndretFraUndefined;

  const { data: historikkFpSak = EMPTY_ARRAY } = restApiHooks.useRestApi(FpsakApiKeys.HISTORY_FPSAK, { saksnummer }, {
    updateTriggers: [behandlingUuid, behandlingVersjon],
    suspendRequest: erBehandlingEndret,
    keepData: true,
  });

  return (
    <HistorikkSakIndex
      historikkFpSak={historikkFpSak}
      historikkFpTilbake={historikkinnslagFpTilbake}
      alleKodeverkFpTilbake={alleKodeverkFpTilbake}
      alleKodeverkFpSak={alleKodeverkFpSak}
      saksnummer={saksnummer}
      getBehandlingLocation={getBehandlingLocation}
      createLocationForSkjermlenke={createLocationForSkjermlenke}
      valgtBehandlingUuid={behandlingUuid}
    />
  );
};

export default HistorikkIndex;
