import React, { FunctionComponent, useState, useCallback, useEffect } from 'react';
import { Route, Navigate, useLocation, Routes } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { Location } from 'history';
import { VisittkortSakIndex } from '@navikt/ft-sak-visittkort';
import { LoadingPanel, DataFetchPendingModal } from '@navikt/ft-ui-komponenter';
import { BehandlingType } from '@navikt/ft-kodeverk';

import { useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';
import { AnnenPartBehandling, Behandling } from '@navikt/fp-types';
import { FormValues as EndreUtlandFormValues } from '@navikt/fp-sak-meny-endre-utland';

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
import { FagsakApiKeys, requestFagsakApi, restFagsakApiHooks } from '../data/fagsakContextApi';
import useHentFagsak from './useHentFagsak';
import ErrorBoundary from '../app/ErrorBoundary';

import '@navikt/ft-sak-visittkort/dist/style.css';
import { BehandlingApiKeys, restBehandlingApiHooks } from '../data/behandlingContextApi';

const finnLenkeTilAnnenPart = (annenPartBehandling: AnnenPartBehandling): string =>
  pathToAnnenPart(annenPartBehandling.saksnummer, annenPartBehandling.behandlingUuid);

const finnSkalIkkeHenteData = (location: Location, selectedSaksnummer?: string, behandlingUuid?: string) =>
  !selectedSaksnummer || erUrlUnderBehandling(location) || (erBehandlingValgt(location) && !behandlingUuid);

/**
 * FagsakIndex
 *
 * Container komponent. Er rot for for fagsakdelen av hovedvinduet, og har ansvar å legge valgt saksnummer fra URL-en i staten.
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

  // 1. Hent opp fagsak gitt saksnr i URL
  // 2. Hent opp behandling gitt uuid i URL
  // - Ny behandling => sett behandling og hent opp fagsak på nytt gitt uuid. Endre uuid i url manuelt, sjekk da om uuid er lik behandling, det er den her
  // - Lagre aksjonspunkt => hent opp behandling og så ny fagsak gitt versjon

  const [hentFagsakPåNyttTrigger, oppdaterTrigger] = useState(0);
  const [harHentetFagsak, fagsakData] = useHentFagsak(
    selectedSaksnummer,
    hentFagsakPåNyttTrigger,
    behandlingUuid,
    behandling?.versjon,
  );

  const fagsakBehandling = fagsakData?.getBehandling(behandlingUuid);
  const erTilbakekreving =
    fagsakBehandling?.type === BehandlingType.TILBAKEKREVING ||
    fagsakBehandling?.type === BehandlingType.TILBAKEKREVING_REVURDERING;

  const { startRequest: hentBehandling } = restBehandlingApiHooks.useRestApiRunner(
    erTilbakekreving ? BehandlingApiKeys.BEHANDLING_TILBAKE : BehandlingApiKeys.BEHANDLING,
  );

  const hentOgSettBehandling = useCallback(
    (keepData = false) => {
      if (behandlingUuid) {
        hentBehandling({ behandlingUuid }, keepData).then(setBehandling);
      }
    },
    [behandlingUuid],
  );

  useEffect(() => {
    if (behandlingUuid) {
      hentOgSettBehandling();
    }
  }, [behandlingUuid]);

  useEffect(
    () => () => {
      requestFagsakApi.resetCache();
      requestFagsakApi.resetLinks();
    },
    [],
  );

  const { startRequest: endreSaksmerking } = restFagsakApiHooks.useRestApiRunner(FagsakApiKeys.ENDRE_SAK_MARKERING);
  const endreFagsakMarkering = useCallback(
    (params: EndreUtlandFormValues) => endreSaksmerking(params).then(() => oppdaterTrigger(oldValue => oldValue + 1)),
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
                  setBehandling={setBehandling}
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
            setBehandling={setBehandling}
            hentOgSettBehandling={hentOgSettBehandling}
            behandlingVersjon={behandling?.versjon}
            endreFagsakMarkering={endreFagsakMarkering}
          />
        }
        supportContent={
          <BehandlingSupportIndex
            fagsakData={fagsakData}
            behandlingUuid={behandlingUuid}
            behandlingVersjon={behandling?.versjon}
            hentOgSettBehandling={hentOgSettBehandling}
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
