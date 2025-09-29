import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { DataFetchPendingModal, LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Location } from 'history';

import { BehandlingTypeEnum, RelasjonsRolleType } from '@navikt/fp-kodeverk';
import { VisittkortSakIndex } from '@navikt/fp-sak-visittkort';
import type { AnnenPartBehandling, Behandling } from '@navikt/fp-types';
import { ErrorBoundary } from '@navikt/fp-ui-komponenter';
import { useRestApiErrorDispatcher, useTrackRouteParam } from '@navikt/fp-utils';

import {
  behandlingerRoutePath,
  erBehandlingValgt,
  erUrlUnderBehandling,
  pathToAnnenPart,
  pathToMissingPage,
} from '../app/paths';
import { BehandlingerIndex } from '../behandling/BehandlingerIndex';
import { BehandlingSupportIndex } from '../behandlingsupport/BehandlingSupportIndex';
import { useRequestPendingContext } from '../data/polling/RequestPendingContext';
import { useHentBehandling } from '../data/polling/useHentBehandling';
import { FagsakProfileIndex } from '../fagsakprofile/FagsakProfileIndex';
import { FagsakGrid } from './components/FagsakGrid';
import { useHentFagsak } from './useHentFagsak';

const finnLenkeTilAnnenPart = (annenPartBehandling: AnnenPartBehandling): string =>
  pathToAnnenPart(annenPartBehandling.saksnummer, annenPartBehandling.behandlingUuid);

const finnSkalIkkeHenteData = (location: Location, selectedSaksnummer?: string, behandlingUuid?: string) =>
  !selectedSaksnummer || erUrlUnderBehandling(location) || (erBehandlingValgt(location) && !behandlingUuid);

/**
 * FagsakIndex
 *
 * Er rot for for fagsakdelen av hovedvinduet, og har ansvar å legge valgt saksnummer fra URL-en i staten.
 */
export const FagsakIndex = () => {
  const intl = useIntl();

  const { isRequestPending } = useRequestPendingContext();

  const { addErrorMessage } = useRestApiErrorDispatcher();

  const { selected: selectedSaksnummer } = useTrackRouteParam<string>({
    paramName: 'saksnummer',
  });

  const [behandlingUuidFraUrl, setBehandlingUuidFraUrl] = useState<string | undefined>();
  const [behandling, setBehandling] = useState<Behandling>();

  const [harHentetFagsak, fagsakData] = useHentFagsak(selectedSaksnummer, behandlingUuidFraUrl, behandling?.versjon);
  const fagsakBehandling = fagsakData?.getBehandling(behandlingUuidFraUrl);
  const erTilbakekreving =
    fagsakBehandling?.type === BehandlingTypeEnum.TILBAKEKREVING ||
    fagsakBehandling?.type === BehandlingTypeEnum.TILBAKEKREVING_REVURDERING;

  const { hentOgSettBehandling } = useHentBehandling(erTilbakekreving, setBehandling, behandlingUuidFraUrl);
  const [visSideMeny, setVisSideMeny] = useState(true);
  const [visUtvidetBehandlingDetaljer, setVisUtvidetBehandlingDetaljer] = useState(false);

  const toggleVisUtvidetBehandlingDetaljer = () => {
    setVisUtvidetBehandlingDetaljer(!visUtvidetBehandlingDetaljer);
  };

  const toggleSideMeny = () => {
    setVisSideMeny(!visSideMeny);
  };

  useEffect(() => {
    if (behandlingUuidFraUrl && fagsakBehandling) {
      hentOgSettBehandling();
    }
  }, [behandlingUuidFraUrl, fagsakBehandling?.uuid]);

  const location = useLocation();
  const skalIkkeHenteData = finnSkalIkkeHenteData(location, selectedSaksnummer, behandlingUuidFraUrl);

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
                  setBehandlingUuidFraUrl={setBehandlingUuidFraUrl}
                />
              }
            />
          </Routes>
        }
        visSideMeny={visSideMeny}
        toggleSideMeny={toggleSideMeny}
        profileAndNavigationContent={
          <FagsakProfileIndex
            fagsakData={fagsakData}
            behandlingUuid={behandlingUuidFraUrl}
            setBehandling={setBehandling}
            hentOgSettBehandling={hentOgSettBehandling}
            behandling={behandling}
            visSideMeny={visSideMeny}
            toggleSideMeny={toggleSideMeny}
            visUtvidetBehandlingDetaljer={visUtvidetBehandlingDetaljer}
          />
        }
        supportContent={
          <BehandlingSupportIndex
            fagsakData={fagsakData}
            behandlingUuid={behandlingUuidFraUrl}
            behandlingVersjon={behandling?.versjon}
            hentOgSettBehandling={hentOgSettBehandling}
            toggleVisUtvidetBehandlingDetaljer={toggleVisUtvidetBehandlingDetaljer}
            visUtvidetBehandlingDetaljer={visUtvidetBehandlingDetaljer}
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
                erMor={fagsak.relasjonsRolleType === RelasjonsRolleType.MOR}
                bruker={fagsak.bruker}
                annenPart={fagsak.annenPart}
                familiehendelse={fagsak.familiehendelse}
                harVergeIÅpenBehandling={fagsak.harVergeIÅpenBehandling}
                erTilbakekreving={erTilbakekreving}
                lenkeTilAnnenPart={
                  fagsak.annenpartBehandling ? finnLenkeTilAnnenPart(fagsak.annenpartBehandling) : undefined
                }
              />
            </ErrorBoundary>
          );
        }}
      />
      {isRequestPending && <DataFetchPendingModal pendingMessage="" />}
    </>
  );
};
