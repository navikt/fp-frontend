import React, {
  FunctionComponent, useState, useCallback, useEffect,
} from 'react';
import {
  Route, Navigate, useLocation, Routes,
} from 'react-router-dom';
import { Location } from 'history';
import VisittkortSakIndex from '@navikt/ft-sak-visittkort';
import { LoadingPanel, DataFetchPendingModal } from '@navikt/ft-ui-komponenter';
import { BehandlingType } from '@navikt/ft-kodeverk';

import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import BehandlingerIndex from '../behandling/BehandlingerIndex';
import useBehandlingEndret from '../behandling/useBehandlingEndret';
import useTrackRouteParam from '../app/useTrackRouteParam';
import BehandlingSupportIndex from '../behandlingsupport/BehandlingSupportIndex';
import FagsakProfileIndex from '../fagsakprofile/FagsakProfileIndex';
import {
  pathToMissingPage, erUrlUnderBehandling, erBehandlingValgt, behandlingerRoutePath, pathToAnnenPart,
} from '../app/paths';
import FagsakGrid from './components/FagsakGrid';
import {
  AnnenPartBehandling, FpsakApiKeys, restApiHooks, requestApi,
} from '../data/fpsakApi';
import useHentFagsakRettigheter from './useHentFagsakRettigheter';
import useHentAlleBehandlinger from './useHentAlleBehandlinger';

import '@navikt/ft-sak-visittkort/dist/style.css';

const finnLenkeTilAnnenPart = (annenPartBehandling: AnnenPartBehandling): string => pathToAnnenPart(
  annenPartBehandling.saksnummer, annenPartBehandling.behandlingUuid,
);

const erTilbakekreving = (behandlingType?: string): boolean => !!behandlingType
  && (BehandlingType.TILBAKEKREVING === behandlingType || BehandlingType.TILBAKEKREVING_REVURDERING === behandlingType);

const henterData = (state: RestApiState): boolean => state === RestApiState.NOT_STARTED || state === RestApiState.LOADING;

const finnSkalIkkeHenteData = (
  location: Location,
  selectedSaksnummer?: string,
  behandlingUuid?: string,
) => !selectedSaksnummer || erUrlUnderBehandling(location) || (erBehandlingValgt(location) && !behandlingUuid);

/**
 * FagsakIndex
 *
 * Container komponent. Er rot for for fagsakdelen av hovedvinduet, og har ansvar å legge valgt saksnummer fra URL-en i staten.
 */
const FagsakIndex: FunctionComponent = () => {
  const [behandlingerTeller, setBehandlingTeller] = useState(0);
  const [requestPendingMessage, setRequestPendingMessage] = useState<string>();

  const [behandlingUuidOgVersjon, setUuidOgVersjon] = useState({ behandlingUuid: undefined, behandlingVersjon: undefined });
  const setBehandlingUuidOgVersjon = useCallback((nyBehandlingUuid, nyBehandlingVersjon) => setUuidOgVersjon({
    behandlingUuid: nyBehandlingUuid,
    behandlingVersjon: nyBehandlingVersjon,
  }), []);
  const { behandlingUuid, behandlingVersjon } = behandlingUuidOgVersjon;

  const oppfriskBehandlinger = useCallback(() => setBehandlingTeller(behandlingerTeller + 1), [behandlingerTeller]);

  const { selected: selectedSaksnummer } = useTrackRouteParam<string>({
    paramName: 'saksnummer',
  });

  const erBehandlingEndretFraUndefined = useBehandlingEndret(behandlingUuid, behandlingVersjon);

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
    updateTriggers: [selectedSaksnummer, behandlingUuid, behandlingVersjon],
    suspendRequest: !selectedSaksnummer || erBehandlingEndretFraUndefined,
    keepData: true,
  });

  const { data: harIkkeAdresse } = restApiHooks.useRestApi(FpsakApiKeys.HAR_IKKE_ADRESSE, { saksnummer: selectedSaksnummer }, {
    updateTriggers: [selectedSaksnummer],
    suspendRequest: !selectedSaksnummer,
    keepData: true,
  });

  const [harFerdighentetfagsakRettigheter, fagsakRettigheter] = useHentFagsakRettigheter(
    selectedSaksnummer, behandlingUuid, behandlingVersjon,
  );

  const [alleBehandlinger, harFerdighentetAlleBehandlinger] = useHentAlleBehandlinger(
    selectedSaksnummer, behandlingerTeller, behandlingUuid, behandlingVersjon,
  );

  useEffect(() => () => {
    requestApi.resetCache();
    requestApi.resetLinks();
  }, []);

  const location = useLocation();
  const skalIkkeHenteData = finnSkalIkkeHenteData(location, selectedSaksnummer, behandlingUuid);

  const behandling = alleBehandlinger.find((b) => b.uuid === behandlingUuid);

  const { data: behandlingRettigheter } = restApiHooks.useRestApi(FpsakApiKeys.BEHANDLING_RETTIGHETER, undefined, {
    updateTriggers: [skalIkkeHenteData, behandlingUuid, behandlingVersjon],
    suspendRequest: skalIkkeHenteData,
    keepData: true,
  });

  if (!fagsak) {
    if (henterData(fagsakState)) {
      return <LoadingPanel />;
    }
    return <Navigate to={pathToMissingPage()} />;
  }
  if (henterData(fagsakPersonerState) || !harFerdighentetfagsakRettigheter || !fagsakRettigheter) {
    return <LoadingPanel />;
  }

  if (fagsak.saksnummer !== selectedSaksnummer) {
    return <Navigate to={pathToMissingPage()} />;
  }

  return (
    <>
      <FagsakGrid
        behandlingContent={(
          <Routes>
            <Route
              path={behandlingerRoutePath}
              element={(
                <BehandlingerIndex
                  fagsak={fagsak}
                  alleBehandlinger={alleBehandlinger}
                  setBehandlingUuidOgVersjon={setBehandlingUuidOgVersjon}
                  setRequestPendingMessage={setRequestPendingMessage}
                />
              )}
            />
          </Routes>
        )}
        profileAndNavigationContent={(
          <>
            {!fagsak && <LoadingPanel />}
            {fagsak && (
              <FagsakProfileIndex
                fagsak={fagsak}
                behandlingUuid={behandlingUuid}
                behandlingVersjon={behandlingVersjon}
                alleBehandlinger={alleBehandlinger}
                harHentetBehandlinger={harFerdighentetAlleBehandlinger}
                oppfriskBehandlinger={oppfriskBehandlinger}
                fagsakRettigheter={fagsakRettigheter}
                behandlingRettigheter={behandlingRettigheter}
                brukerManglerAdresse={harIkkeAdresse}
              />
            )}
          </>
        )}
        supportContent={(
          <BehandlingSupportIndex
            fagsak={fagsak}
            alleBehandlinger={alleBehandlinger}
            behandlingUuid={behandlingUuid}
            behandlingVersjon={behandlingVersjon}
            behandlingRettigheter={behandlingRettigheter}
            brukerManglerAdresse={harIkkeAdresse}
          />
        )}
        visittkortContent={() => {
          if (skalIkkeHenteData || !fagsakPersoner) {
            return null;
          }

          return (
            <VisittkortSakIndex
              lenkeTilAnnenPart={annenPartBehandling ? finnLenkeTilAnnenPart(annenPartBehandling) : undefined}
              fagsak={fagsak}
              fagsakPersoner={fagsakPersoner}
              harVerge={behandling?.harVerge}
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
