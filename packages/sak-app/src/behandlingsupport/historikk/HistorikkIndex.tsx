import React, {
  FunctionComponent, useCallback, useMemo,
} from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';

import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import HistorikkSakIndex from '@fpsak-frontend/sak-historikk';
import { KodeverkMedNavn, Historikkinnslag } from '@fpsak-frontend/types';
import { LoadingPanel, usePrevious } from '@fpsak-frontend/shared-components';

import useBehandlingEndret from '../../behandling/useBehandlingEndret';
import { FpsakApiKeys, restApiHooks } from '../../data/fpsakApi';
import { pathToBehandling, createLocationForSkjermlenke } from '../../app/paths';
import ApplicationContextPath from '../../app/ApplicationContextPath';
import useGetEnabledApplikasjonContext from '../../app/useGetEnabledApplikasjonContext';

type HistorikkMedTilbakekrevingIndikator = Historikkinnslag & {
  erTilbakekreving?: boolean;
}

const sortAndTagTilbakekreving = (
  historikkFpsak: Historikkinnslag[] = [],
  historikkFptilbake: Historikkinnslag[] = [],
): HistorikkMedTilbakekrevingIndikator[] => {
  const historikkFraTilbakekrevingMedMarkor = historikkFptilbake.map((ht) => ({
    ...ht,
    erTilbakekreving: true,
  }));
  return historikkFpsak.concat(historikkFraTilbakekrevingMedMarkor).sort((a, b) => moment(b.opprettetTidspunkt).diff(moment(a.opprettetTidspunkt)));
};

interface OwnProps {
  saksnummer: number;
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

  const alleKodeverkFpSak = restApiHooks.useGlobalStateRestApiData<{[key: string]: KodeverkMedNavn[]}>(FpsakApiKeys.KODEVERK);
  const alleKodeverkFpTilbake = restApiHooks.useGlobalStateRestApiData<{[key: string]: KodeverkMedNavn[]}>(FpsakApiKeys.KODEVERK_FPTILBAKE);

  const location = useLocation();
  const getBehandlingLocation = useCallback((bId: number) => ({
    ...location,
    pathname: pathToBehandling(saksnummer, bId),
  }), [location]);

  const skalBrukeFpTilbakeHistorikk = enabledApplicationContexts.includes(ApplicationContextPath.FPTILBAKE);
  const erBehandlingEndretFraUndefined = useBehandlingEndret(behandlingId, behandlingVersjon);
  const forrigeSaksnummer = usePrevious(saksnummer);
  const erBehandlingEndret = forrigeSaksnummer && erBehandlingEndretFraUndefined;

  const { data: historikkFpSak, state: historikkFpSakState } = restApiHooks.useRestApi<Historikkinnslag[]>(FpsakApiKeys.HISTORY_FPSAK, { saksnummer }, {
    updateTriggers: [behandlingId, behandlingVersjon],
    suspendRequest: erBehandlingEndret,
  });
  const { data: historikkFpTilbake, state: historikkFpTilbakeState } = restApiHooks
    .useRestApi<Historikkinnslag[]>(FpsakApiKeys.HISTORY_FPTILBAKE, { saksnummer }, {
      updateTriggers: [behandlingId, behandlingVersjon],
      suspendRequest: !skalBrukeFpTilbakeHistorikk || erBehandlingEndret,
    });

  const historikkInnslag = useMemo(() => sortAndTagTilbakekreving(historikkFpSak, historikkFpTilbake), [historikkFpSak, historikkFpTilbake]);

  if (historikkFpSakState === RestApiState.LOADING || (skalBrukeFpTilbakeHistorikk && historikkFpTilbakeState === RestApiState.LOADING)) {
    return <LoadingPanel />;
  }

  return (
    <>
      {historikkInnslag.map((innslag) => (
        <HistorikkSakIndex
          key={innslag.opprettetTidspunkt + innslag.type.kode}
          historikkinnslag={innslag}
          saksnummer={saksnummer}
          alleKodeverk={innslag.erTilbakekreving ? alleKodeverkFpTilbake : alleKodeverkFpSak}
          erTilbakekreving={!!innslag.erTilbakekreving}
          getBehandlingLocation={getBehandlingLocation}
          createLocationForSkjermlenke={createLocationForSkjermlenke}
        />
      ))}
    </>
  );
};

export default HistorikkIndex;
