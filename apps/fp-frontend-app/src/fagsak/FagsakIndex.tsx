import React, {
  FunctionComponent, useState, useCallback, useEffect,
} from 'react';
import {
  Route, Navigate, useLocation, Routes,
} from 'react-router-dom';
import { useIntl } from 'react-intl';
import { Location } from 'history';
import VisittkortSakIndex from '@navikt/ft-sak-visittkort';
import { LoadingPanel, DataFetchPendingModal } from '@navikt/ft-ui-komponenter';
import { BehandlingType } from '@navikt/ft-kodeverk';

import { useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';
import { AnnenPartBehandling } from '@navikt/fp-types';

import BehandlingerIndex from '../behandling/BehandlingerIndex';
import useTrackRouteParam from '../app/useTrackRouteParam';
import BehandlingSupportIndex from '../behandlingsupport/BehandlingSupportIndex';
import FagsakProfileIndex from '../fagsakprofile/FagsakProfileIndex';
import {
  pathToMissingPage, erUrlUnderBehandling, erBehandlingValgt, behandlingerRoutePath, pathToAnnenPart,
} from '../app/paths';
import FagsakGrid from './components/FagsakGrid';
import { requestApi } from '../data/fpsakApi';
import useHentFagsak from './useHentFagsak';
import ErrorBoundary from '../app/ErrorBoundary';

import '@navikt/ft-sak-visittkort/dist/style.css';

const finnLenkeTilAnnenPart = (annenPartBehandling: AnnenPartBehandling): string => pathToAnnenPart(
  annenPartBehandling.saksnummer, annenPartBehandling.behandlingUuid,
);

const erTilbakekreving = (behandlingType?: string): boolean => !!behandlingType
  && (BehandlingType.TILBAKEKREVING === behandlingType || BehandlingType.TILBAKEKREVING_REVURDERING === behandlingType);

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
  const intl = useIntl();

  const [behandlingerTeller, setBehandlingTeller] = useState(0);
  const [requestPendingMessage, setRequestPendingMessage] = useState<string>();

  const [behandlingUuidOgVersjon, setUuidOgVersjon] = useState({ behandlingUuid: undefined, behandlingVersjon: undefined });
  const setBehandlingUuidOgVersjon = useCallback((nyBehandlingUuid, nyBehandlingVersjon) => setUuidOgVersjon({
    behandlingUuid: nyBehandlingUuid,
    behandlingVersjon: nyBehandlingVersjon,
  }), []);
  const { behandlingUuid, behandlingVersjon } = behandlingUuidOgVersjon;

  const { addErrorMessage } = useRestApiErrorDispatcher();

  const hentFagsakdataPåNytt = useCallback(() => setBehandlingTeller(behandlingerTeller + 1), [behandlingerTeller]);

  const { selected: selectedSaksnummer } = useTrackRouteParam<string>({
    paramName: 'saksnummer',
  });

  const [harHentetFagsak, fagsakData] = useHentFagsak(selectedSaksnummer, behandlingUuid, behandlingVersjon, behandlingerTeller);

  useEffect(() => () => {
    requestApi.resetCache();
    requestApi.resetLinks();
  }, []);

  const location = useLocation();
  const skalIkkeHenteData = finnSkalIkkeHenteData(location, selectedSaksnummer, behandlingUuid);

  if (!fagsakData) {
    if (!harHentetFagsak) {
      return <LoadingPanel />;
    }
    return <Navigate to={pathToMissingPage()} />;
  }

  if (fagsakData.getFagsak().saksnummer !== selectedSaksnummer) {
    return <Navigate to={pathToMissingPage()} />;
  }

  const fagsak = fagsakData.getFagsak();
  const behandling = fagsakData.getBehandling(behandlingUuid);

  return (
    <>
      <FagsakGrid
        behandlingContent={(
          <Routes>
            <Route
              path={behandlingerRoutePath}
              element={(
                <BehandlingerIndex
                  fagsakData={fagsakData}
                  setBehandlingUuidOgVersjon={setBehandlingUuidOgVersjon}
                  setRequestPendingMessage={setRequestPendingMessage}
                />
              )}
            />
          </Routes>
        )}
        profileAndNavigationContent={(
          <FagsakProfileIndex
            fagsakData={fagsakData}
            behandlingUuid={behandlingUuid}
            behandlingVersjon={behandlingVersjon}
            hentFagsakdataPåNytt={hentFagsakdataPåNytt}
          />
        )}
        supportContent={(
          <BehandlingSupportIndex
            fagsakData={fagsakData}
            behandlingUuid={behandlingUuid}
            behandlingVersjon={behandlingVersjon}
          />
        )}
        visittkortContent={() => {
          if (skalIkkeHenteData) {
            return null;
          }

          return (
            <ErrorBoundary
              errorMessageCallback={addErrorMessage}
              errorMessage={intl.formatMessage({ id: 'ErrorBoundary.Error' }, { name: 'Visittkort' })}
            >
              <VisittkortSakIndex
                lenkeTilAnnenPart={fagsak.annenpartBehandling ? finnLenkeTilAnnenPart(fagsak.annenpartBehandling) : undefined}
                fagsak={fagsak}
                fagsakPersoner={{
                  bruker: fagsak.bruker,
                  annenPart: fagsak.annenPart,
                  familiehendelse: fagsak.familiehendelse,
                }}
                harVerge={behandling?.harVerge}
                erTilbakekreving={erTilbakekreving(behandling?.type)}
              />
            </ErrorBoundary>
          );
        }}
      />
      {requestPendingMessage && <DataFetchPendingModal pendingMessage={requestPendingMessage} />}
    </>
  );
};

export default FagsakIndex;
