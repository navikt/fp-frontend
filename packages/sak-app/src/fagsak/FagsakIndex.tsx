import React, {
  FunctionComponent, useState, useCallback,
} from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { Location } from 'history';

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
  annenPartBehandling.saksnummer, annenPartBehandling.behandlingUuid,
);

const erTilbakekreving = (behandlingType?: Kodeverk): boolean => !!behandlingType
  && (BehandlingType.TILBAKEKREVING === behandlingType.kode || BehandlingType.TILBAKEKREVING_REVURDERING === behandlingType.kode);

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

  const [harFerdighentetfagsakRettigheter, fagsakRettigheter] = useHentFagsakRettigheter(
    selectedSaksnummer, behandlingUuid, behandlingVersjon,
  );

  const [alleBehandlinger, harFerdighentetAlleBehandlinger] = useHentAlleBehandlinger(
    selectedSaksnummer, behandlingerTeller, behandlingUuid, behandlingVersjon,
  );

  const location = useLocation();
  const skalIkkeHenteData = finnSkalIkkeHenteData(location, selectedSaksnummer, behandlingUuid);

  const behandling = alleBehandlinger.find((b) => b.uuid === behandlingUuid);

  const { data: behandlingRettigheter } = restApiHooks.useRestApi(FpsakApiKeys.BEHANDLING_RETTIGHETER, { uuid: behandling?.uuid }, {
    updateTriggers: [skalIkkeHenteData, behandlingUuid, behandlingVersjon],
    suspendRequest: skalIkkeHenteData,
    keepData: true,
  });

  if (!fagsak) {
    if (henterData(fagsakState)) {
      return <LoadingPanel />;
    }
    return <Redirect to={pathToMissingPage()} />;
  }
  if (henterData(fagsakPersonerState) || !harFerdighentetfagsakRettigheter || !fagsakRettigheter) {
    return <LoadingPanel />;
  }

  if (fagsak.saksnummer !== selectedSaksnummer) {
    return <Redirect to={pathToMissingPage()} />;
  }

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
                setBehandlingUuidOgVersjon={setBehandlingUuidOgVersjon}
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
                behandlingUuid={behandlingUuid}
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
            behandlingUuid={behandlingUuid}
            behandlingVersjon={behandlingVersjon}
            behandlingRettigheter={behandlingRettigheter}
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
