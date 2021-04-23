import React, {
  FunctionComponent, useState, useCallback,
} from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import VisittkortSakIndex from '@fpsak-frontend/sak-visittkort';
import { Kodeverk } from '@fpsak-frontend/types';

import { LoadingPanel, DataFetchPendingModal } from '@fpsak-frontend/shared-components';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';

import BehandlingerIndex from '../behandling/BehandlingerIndex';
import useBehandlingEndret from '../behandling/useBehandlingEndret';
import useTrackRouteParam from '../app/useTrackRouteParam';
import BehandlingSupportIndex from '../behandlingsupport/BehandlingSupportIndex';
import FagsakProfileIndex from '../fagsakprofile/FagsakProfileIndex';
import {
  pathToMissingPage, erUrlUnderBehandling, erBehandlingValgt, behandlingerPath, pathToAnnenPart,
} from '../app/paths';
import FagsakGrid from './components/FagsakGrid';
import { AnnenPartBehandling, FpsakApiKeys, restApiHooks } from '../data/fpsakApi';
import useHentFagsakRettigheter from './useHentFagsakRettigheter';
import useHentAlleBehandlinger from './useHentAlleBehandlinger';

const finnLenkeTilAnnenPart = (annenPartBehandling: AnnenPartBehandling): string => pathToAnnenPart(
  annenPartBehandling.saksnr.verdi, annenPartBehandling.behandlingId,
);

const erTilbakekreving = (behandlingType?: Kodeverk): boolean => behandlingType && (BehandlingType.TILBAKEKREVING === behandlingType.kode
  || BehandlingType.TILBAKEKREVING_REVURDERING === behandlingType.kode);

/**
 * FagsakIndex
 *
 * Container komponent. Er rot for for fagsakdelen av hovedvinduet, og har ansvar å legge valgt saksnummer fra URL-en i staten.
 */
const FagsakIndex: FunctionComponent = () => {
  const [behandlingerTeller, setBehandlingTeller] = useState(0);
  const [requestPendingMessage, setRequestPendingMessage] = useState<string>();

  const [behandlingIdOgVersjon, setIdOgVersjon] = useState({ behandlingId: undefined, behandlingVersjon: undefined });
  const setBehandlingIdOgVersjon = useCallback((nyBehandlingId, nyBehandlingVersjon) => setIdOgVersjon({
    behandlingId: nyBehandlingId,
    behandlingVersjon: nyBehandlingVersjon,
  }), []);
  const { behandlingId, behandlingVersjon } = behandlingIdOgVersjon;

  const oppfriskBehandlinger = useCallback(() => setBehandlingTeller(behandlingerTeller + 1), [behandlingerTeller]);

  const { selected: selectedSaksnummer } = useTrackRouteParam<string>({
    paramName: 'saksnummer',
  });

  const erBehandlingEndretFraUndefined = useBehandlingEndret(behandlingId, behandlingVersjon);

  const { data: fagsakPersoner, state: fagsakPersonerState } = restApiHooks.useGlobalStateRestApi(FpsakApiKeys.SAK_PERSONER,
    { saksnummer: selectedSaksnummer }, {
      updateTriggers: [selectedSaksnummer],
      suspendRequest: !selectedSaksnummer,
    });

  const { data: annenPartBehandling } = restApiHooks.useRestApi(FpsakApiKeys.ANNEN_PART_BEHANDLING, { saksnummer: selectedSaksnummer }, {
    updateTriggers: [selectedSaksnummer],
    suspendRequest: !selectedSaksnummer,
  });

  const { data: fagsak, state: fagsakState } = restApiHooks.useRestApi(FpsakApiKeys.FETCH_FAGSAK, { saksnummer: selectedSaksnummer }, {
    updateTriggers: [selectedSaksnummer, behandlingId, behandlingVersjon],
    suspendRequest: !selectedSaksnummer || erBehandlingEndretFraUndefined,
    keepData: true,
  });

  const [fagsakRettigheter, harFerdighentetfagsakRettigheter] = useHentFagsakRettigheter(
    selectedSaksnummer, behandlingId, behandlingVersjon,
  );

  const [alleBehandlinger, harFerdighentetAlleBehandlinger] = useHentAlleBehandlinger(
    selectedSaksnummer, behandlingId, behandlingVersjon, behandlingerTeller,
  );

  const location = useLocation();
  const skalIkkeHenteData = !selectedSaksnummer || erUrlUnderBehandling(location) || (erBehandlingValgt(location) && !behandlingId);

  const behandling = alleBehandlinger.find((b) => b.id === behandlingId);

  const { data: behandlingRettigheter } = restApiHooks.useRestApi(FpsakApiKeys.BEHANDLING_RETTIGHETER, { uuid: behandling?.uuid }, {
    updateTriggers: [skalIkkeHenteData, behandlingId, behandlingVersjon],
    suspendRequest: skalIkkeHenteData,
    keepData: true,
  });

  if (!fagsak) {
    if (fagsakState === RestApiState.NOT_STARTED || fagsakState === RestApiState.LOADING) {
      return <LoadingPanel />;
    }
    return <Redirect to={pathToMissingPage()} />;
  }
  if (fagsakPersonerState === RestApiState.NOT_STARTED || fagsakPersonerState === RestApiState.LOADING || !harFerdighentetfagsakRettigheter) {
    return <LoadingPanel />;
  }

  if (fagsak.saksnummer !== selectedSaksnummer) {
    return <Redirect to={pathToMissingPage()} />;
  }

  const harVerge = behandling ? behandling.harVerge : false;

  return (
    <>
      <FagsakGrid
        behandlingContent={(
          <Route
            strict
            path={behandlingerPath}
            render={(props) => (
              <BehandlingerIndex
                {...props}
                fagsak={fagsak}
                alleBehandlinger={alleBehandlinger}
                setBehandlingIdOgVersjon={setBehandlingIdOgVersjon}
                setRequestPendingMessage={setRequestPendingMessage}
              />
            )}
          />
        )}
        profileAndNavigationContent={(
          <>
            {!fagsak && <LoadingPanel />}
            {fagsak && (
              <FagsakProfileIndex
                fagsak={fagsak}
                behandlingId={behandlingId}
                behandlingVersjon={behandlingVersjon}
                alleBehandlinger={alleBehandlinger}
                harHentetBehandlinger={harFerdighentetAlleBehandlinger}
                oppfriskBehandlinger={oppfriskBehandlinger}
                fagsakRettigheter={fagsakRettigheter}
                behandlingRettigheter={behandlingRettigheter}
              />
            )}
          </>
        )}
        supportContent={(
          <BehandlingSupportIndex
            fagsak={fagsak}
            alleBehandlinger={alleBehandlinger}
            behandlingId={behandlingId}
            behandlingVersjon={behandlingVersjon}
            behandlingRettigheter={behandlingRettigheter}
          />
        )}
        visittkortContent={() => {
          if (skalIkkeHenteData) {
            return null;
          }

          return (
            <VisittkortSakIndex
              lenkeTilAnnenPart={annenPartBehandling ? finnLenkeTilAnnenPart(annenPartBehandling) : undefined}
              fagsak={fagsak}
              fagsakPersoner={fagsakPersoner}
              harVerge={harVerge}
              erTilbakekreving={erTilbakekreving(behandling?.type)}
            />
          );
        }}
      />
      {requestPendingMessage && <DataFetchPendingModal pendingMessage={requestPendingMessage} />}
    </>
  );
};

export default FagsakIndex;
