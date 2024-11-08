import React, { FunctionComponent, useState, useCallback, useEffect } from 'react';
import { Route, Navigate, useLocation, Routes } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { Location } from 'history';
import { VisittkortSakIndex } from '@navikt/ft-sak-visittkort';
import { LoadingPanel, DataFetchPendingModal } from '@navikt/ft-ui-komponenter';
import { BehandlingType } from '@navikt/ft-kodeverk';
import { useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';
import { AnnenPartBehandling, Behandling } from '@navikt/fp-types';

import BehandlingerIndex from '../behandling/BehandlingerIndex';
import useTrackRouteParam from '../app/useTrackRouteParam';
import BehandlingSupportIndex from '../behandlingsupport/BehandlingSupportIndex';
import FagsakProfileIndex from '../fagsakprofile/FagsakProfileIndex';
import {
  pathToMissingPage,
  erUrlUnderBehandling,
  erBehandlingValgt,
  behandlingerRoutePath,
  pathToAnnenPart,
} from '../app/paths';
import FagsakGrid from './components/FagsakGrid';
import { requestFagsakApi } from '../data/fagsakContextApi';
import useHentFagsak from './useHentFagsak';
import ErrorBoundary from '../app/ErrorBoundary';
import { BehandlingApiKeys, requestBehandlingApi, restBehandlingApiHooks } from '../data/behandlingContextApi';

import '@navikt/ft-sak-visittkort/dist/style.css';

const finnLenkeTilAnnenPart = (annenPartBehandling: AnnenPartBehandling): string =>
  pathToAnnenPart(annenPartBehandling.saksnummer, annenPartBehandling.behandlingUuid);

const finnSkalIkkeHenteData = (location: Location, selectedSaksnummer?: string, behandlingUuid?: string) =>
  !selectedSaksnummer || erUrlUnderBehandling(location) || (erBehandlingValgt(location) && !behandlingUuid);

/**
 * FagsakIndex
 *
 * Er rot for for fagsakdelen av hovedvinduet, og har ansvar å legge valgt saksnummer fra URL-en i staten.
 */
const FagsakIndex: FunctionComponent = () => {
  const intl = useIntl();

  const [requestPendingMessage, setRequestPendingMessage] = useState<string>();

  const { addErrorMessage } = useRestApiErrorDispatcher();

  const { selected: selectedSaksnummer } = useTrackRouteParam<string>({
    paramName: 'saksnummer',
  });

  const [behandlingUuid, setBehandlingUuid] = useState<string | undefined>();
  const [behandling, setBehandling] = useState<Behandling>();
  const resetApiOgSettBehandling = useCallback(
    (hentetBehandling: Behandling | undefined) => {
      if (hentetBehandling) {
        requestBehandlingApi.resetCache();
        requestBehandlingApi.resetLinks();
        requestBehandlingApi.setLinks(hentetBehandling.links);

        setBehandling(hentetBehandling);
      }
    },
    [requestFagsakApi, requestBehandlingApi],
  );

  const [harHentetFagsak, fagsakData, oppdaterFagsak] = useHentFagsak(
    selectedSaksnummer,
    behandlingUuid,
    behandling?.versjon,
  );

  const fagsakBehandling = fagsakData?.getBehandling(behandlingUuid);
  const erTilbakekreving =
    fagsakBehandling?.type === BehandlingType.TILBAKEKREVING ||
    fagsakBehandling?.type === BehandlingType.TILBAKEKREVING_REVURDERING;

  const { startRequest: hentBehandling } = restBehandlingApiHooks.useRestApiRunner(BehandlingApiKeys.BEHANDLING);
  const { startRequest: hentTilbakekrevingBehandling } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.BEHANDLING_TILBAKE,
  );

  const hentOgSettBehandling = useCallback(
    (keepData = false) => {
      if (behandlingUuid && fagsakBehandling) {
        if (erTilbakekreving) {
          hentTilbakekrevingBehandling({ behandlingUuid }, keepData).then(resetApiOgSettBehandling);
        } else {
          hentBehandling({ behandlingUuid }, keepData).then(resetApiOgSettBehandling);
        }
      }
    },
    [behandlingUuid, fagsakBehandling],
  );

  useEffect(() => {
    if (behandlingUuid) {
      hentOgSettBehandling();
    }
  }, [behandlingUuid, hentOgSettBehandling]);

  useEffect(
    () => () => {
      requestFagsakApi.resetCache();
      requestFagsakApi.resetLinks();
      requestBehandlingApi.resetCache();
      requestBehandlingApi.resetLinks();
    },
    [],
  );

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

  return (
    <>
      <FagsakGrid
        behandlingContent={
          <Routes>
            <Route
              path={behandlingerRoutePath}
              element={
                <BehandlingerIndex
                  fagsakData={fagsakData}
                  behandling={behandling}
                  setBehandling={resetApiOgSettBehandling}
                  hentOgSettBehandling={hentOgSettBehandling}
                  setRequestPendingMessage={setRequestPendingMessage}
                  setBehandlingUuid={setBehandlingUuid}
                />
              }
            />
          </Routes>
        }
        profileAndNavigationContent={
          <FagsakProfileIndex
            fagsakData={fagsakData}
            behandlingUuid={behandlingUuid}
            setBehandling={resetApiOgSettBehandling}
            hentOgSettBehandling={hentOgSettBehandling}
            behandlingVersjon={behandling?.versjon}
            oppdaterFagsak={oppdaterFagsak}
          />
        }
        supportContent={
          <BehandlingSupportIndex
            fagsakData={fagsakData}
            behandlingUuid={behandlingUuid}
            behandlingVersjon={behandling?.versjon}
            hentOgSettBehandling={hentOgSettBehandling}
            oppdaterFagsak={oppdaterFagsak}
          />
        }
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
                lenkeTilAnnenPart={
                  fagsak.annenpartBehandling ? finnLenkeTilAnnenPart(fagsak.annenpartBehandling) : undefined
                }
                fagsak={fagsak}
                fagsakPersoner={{
                  bruker: fagsak.bruker,
                  annenPart: fagsak.annenPart,
                  familiehendelse: fagsak.familiehendelse,
                }}
                harVerge={behandling?.harVerge}
                erTilbakekreving={erTilbakekreving}
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
