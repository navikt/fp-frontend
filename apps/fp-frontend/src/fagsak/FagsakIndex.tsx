import { useCallback, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { type Location, Navigate, Route, Routes, useLocation, useMatch, useParams } from 'react-router';

import { DataFetchPendingModal, LoadingPanel } from '@navikt/ft-ui-komponenter';

import { ErrorBoundary, useRestApiErrorDispatcher } from '@navikt/fp-app-felles';
import { VisittkortSakIndex } from '@navikt/fp-sak-visittkort';
import type { AnnenPartBehandling, Behandling, Fagsak } from '@navikt/fp-types';

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
import { BEHANDLING_SNARVEG_IDER, krevSideMeny } from '../snarveger/snarvegDefinisjoner';
import { useRegistrerFørDispatch, useRegistrerSnarveg } from '../snarveger/SnarvegerContext';
import { FagsakGrid } from './components/FagsakGrid';
import { useHentFagsak } from './useHentFagsak';

const finnLenkeTilAnnenPart = (annenPartBehandling: AnnenPartBehandling): string =>
  pathToAnnenPart(annenPartBehandling.saksnummer, annenPartBehandling.behandlingUuid);

const finnSkalIkkeHenteData = (location: Location, selectedSaksnummer?: string, behandlingUuid?: string) =>
  !selectedSaksnummer || erUrlUnderBehandling(location) || (erBehandlingValgt(location) && !behandlingUuid);

const Visittkort = ({ fagsak, erTilbakekreving }: { fagsak: Fagsak; erTilbakekreving: boolean }) => {
  const intl = useIntl();
  const { addErrorMessage } = useRestApiErrorDispatcher();

  return (
    <ErrorBoundary
      errorMessageCallback={addErrorMessage}
      errorMessage={intl.formatMessage({ id: 'ErrorBoundary.Error' }, { name: 'Visittkort' })}
    >
      <VisittkortSakIndex
        erMor={fagsak.relasjonsRolleType === 'MORA'}
        bruker={fagsak.bruker}
        annenPart={fagsak.annenPart}
        familiehendelse={fagsak.familiehendelse}
        harVergeIÅpenBehandling={fagsak.harVergeIÅpenBehandling}
        erTilbakekreving={erTilbakekreving}
        lenkeTilAnnenPart={fagsak.annenpartBehandling ? finnLenkeTilAnnenPart(fagsak.annenpartBehandling) : undefined}
      />
    </ErrorBoundary>
  );
};

/**
 * FagsakIndex
 *
 * Er rot for for fagsakdelen av hovedvinduet, og har ansvar å legge valgt saksnummer fra URL-en i staten.
 */
export const FagsakIndex = () => {
  const params = useParams<{ saksnummer: string }>();
  const selectedSaksnummer = params['saksnummer']!;
  const behandlingMatch = useMatch('/fagsak/:saksnummer/behandling/:behandlingUuid/*');
  const behandlingUuid = behandlingMatch?.params.behandlingUuid;
  const [visSideMeny, setVisSideMeny] = useState(true);
  const [visUtvidetBehandlingDetaljer, setVisUtvidetBehandlingDetaljer] = useState(false);

  const toggleVisUtvidetBehandlingDetaljer = () => {
    setVisUtvidetBehandlingDetaljer(!visUtvidetBehandlingDetaljer);
  };

  const toggleSideMeny = () => {
    setVisSideMeny(!visSideMeny);
  };

  useRegistrerSnarveg(BEHANDLING_SNARVEG_IDER.TOGGLE_SIDEMENY, toggleSideMeny);

  // Snarvegane E, M, B og 1–6 peikar på innhald i sidemenyen. Er han lukka, opnar vi han att
  // før handlinga køyrer, slik at endringa ikkje skjer i ein skjult kolonne.
  useRegistrerFørDispatch(id => {
    if (!visSideMeny && krevSideMeny(id)) {
      setVisSideMeny(true);
    }
  });

  return (
    <FagsakInnhold
      key={`${selectedSaksnummer}/${behandlingUuid ?? ''}`}
      selectedSaksnummer={selectedSaksnummer}
      behandlingUuid={behandlingUuid}
      visSideMeny={visSideMeny}
      toggleSideMeny={toggleSideMeny}
      visUtvidetBehandlingDetaljer={visUtvidetBehandlingDetaljer}
      toggleVisUtvidetBehandlingDetaljer={toggleVisUtvidetBehandlingDetaljer}
    />
  );
};

interface FagsakInnholdProps {
  selectedSaksnummer: string;
  behandlingUuid?: string;
  visSideMeny: boolean;
  toggleSideMeny: () => void;
  visUtvidetBehandlingDetaljer: boolean;
  toggleVisUtvidetBehandlingDetaljer: () => void;
}

const FagsakInnhold = ({
  selectedSaksnummer,
  behandlingUuid,
  visSideMeny,
  toggleSideMeny,
  visUtvidetBehandlingDetaljer,
  toggleVisUtvidetBehandlingDetaljer,
}: FagsakInnholdProps) => {
  const { isRequestPending } = useRequestPendingContext();
  const [behandling, setBehandling] = useState<Behandling>();
  const oppdaterBehandling = useCallback(
    (oppdatertBehandling: Behandling | undefined) => {
      if (oppdatertBehandling && oppdatertBehandling.uuid !== behandlingUuid) {
        return;
      }
      setBehandling(gjeldende =>
        gjeldende && oppdatertBehandling && gjeldende.versjon > oppdatertBehandling.versjon
          ? gjeldende
          : oppdatertBehandling,
      );
    },
    [behandlingUuid],
  );

  const [harHentetFagsak, fagsakData] = useHentFagsak(selectedSaksnummer, behandlingUuid, behandling?.versjon);
  const fagsakBehandling = fagsakData?.getBehandling(behandlingUuid);
  const erTilbakekreving = fagsakBehandling?.type === 'BT-007' || fagsakBehandling?.type === 'BT-009';
  const { hentOgSettBehandling } = useHentBehandling(erTilbakekreving, oppdaterBehandling, behandlingUuid);

  useEffect(() => {
    if (behandlingUuid && fagsakBehandling) {
      hentOgSettBehandling();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- hent behandling berre ved endra URL-uuid; hentOgSettBehandling gjev gjentekne henteforsøk
  }, [behandlingUuid, fagsakBehandling?.uuid]);

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
                  setBehandling={oppdaterBehandling}
                  hentOgSettBehandling={hentOgSettBehandling}
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
            behandlingUuid={behandlingUuid}
            setBehandling={oppdaterBehandling}
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
            behandlingUuid={behandlingUuid}
            behandlingVersjon={behandling?.versjon}
            hentOgSettBehandling={hentOgSettBehandling}
            toggleVisUtvidetBehandlingDetaljer={toggleVisUtvidetBehandlingDetaljer}
            visUtvidetBehandlingDetaljer={visUtvidetBehandlingDetaljer}
          />
        }
        visittkortContent={
          skalIkkeHenteData ? undefined : <Visittkort fagsak={fagsak} erTilbakekreving={erTilbakekreving} />
        }
      />
      {isRequestPending && <DataFetchPendingModal pendingMessage="" />}
    </>
  );
};
