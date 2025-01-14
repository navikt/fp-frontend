import { Suspense, useCallback, useState } from 'react';
import { NavigateFunction, useLocation, useNavigate } from 'react-router';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { parseQueryString, replaceNorwegianCharacters } from '@navikt/ft-utils';
import { useQuery } from '@tanstack/react-query';
import { Location } from 'history';

import { BehandlingType, FagsakYtelseType } from '@navikt/fp-kodeverk';
import { useRestApiErrorDispatcher } from '@navikt/fp-rest-api';
import { ErrorPage } from '@navikt/fp-sak-infosider';
import { AksessRettigheter, Behandling, BehandlingAppKontekst, Fagsak } from '@navikt/fp-types';

import { ErrorBoundary } from '../app/ErrorBoundary';
import { getFaktaLocation, getLocationWithDefaultProsessStegAndFakta, getProsessStegLocation } from '../app/paths';
import { useBehandlingApi } from '../data/behandlingApi';
import { useFagsakApi } from '../data/fagsakApi';
import { useBehandlingPollingOperasjoner } from '../data/useBehandlingPollingOperasjoner';
import { BehandlingPaVent } from './felles/modaler/paVent/BehandlingPaVent';
import { StandardPropsProvider } from './felles/utils/standardPropsStateContext';
import { lazyWithRetry } from './lazyUtils';

const ForeldrepengerPaneler = lazyWithRetry(() => import('./foreldrepenger/ForeldrepengerPaneler'));
const EngangsstonadPaneler = lazyWithRetry(() => import('./engangsstonad/EngangsstonadPaneler'));
const SvangerskapspengerPaneler = lazyWithRetry(() => import('./svangerskapspenger/SvangerskapspengerPaneler'));
const KlagePaneler = lazyWithRetry(() => import('./klage/KlagePaneler'));
const InnsynPaneler = lazyWithRetry(() => import('./innsyn/InnsynPaneler'));
const AnkePaneler = lazyWithRetry(() => import('./anke/AnkePaneler'));
const TilbakekrevingPaneler = lazyWithRetry(() => import('./tilbakekreving/TilbakekrevingPaneler'));

type Props = {
  behandling: Behandling;
  hentOgSettBehandling: () => void;
  fagsak: Fagsak;
  rettigheter: AksessRettigheter;
  setBehandling: (behandling: Behandling) => void;
  alleBehandlinger: BehandlingAppKontekst[];
};

export const BehandlingPanelerIndex = ({
  setBehandling,
  behandling,
  fagsak,
  rettigheter,
  hentOgSettBehandling,
  alleBehandlinger,
}: Props) => {
  const { addErrorMessage } = useRestApiErrorDispatcher();

  const [skalOppdatereEtterBekreftelseAvAp, setSkalOppdatereEtterBekreftelseAvAp] = useState(true);

  const { lagreAksjonspunkter, lagreOverstyrteAksjonspunkter } = useBehandlingPollingOperasjoner(
    behandling,
    (oppdatertBehandling: Behandling) => {
      if (oppdatertBehandling && skalOppdatereEtterBekreftelseAvAp) {
        setBehandling(oppdatertBehandling);
      }
    },
  );

  const navigate = useNavigate();
  const opneSokeside = () => {
    navigate('/');
  };

  const location = useLocation();
  const oppdaterProsessStegOgFaktaPanelIUrl = useCallback(getOppdaterProsessStegOgFaktaPanelIUrl(location, navigate), [
    location,
    navigate,
  ]);
  const query = parseQueryString(location.search);

  const erFørstegangssøknadEllerRevurdering =
    behandling.type === BehandlingType.FORSTEGANGSSOKNAD || behandling.type === BehandlingType.REVURDERING;

  const fagsakApi = useFagsakApi();
  const { data: kodeverk } = useQuery(fagsakApi.kodeverkOptions());

  const behandlingApi = useBehandlingApi(behandling);

  const arbeidsgivereOversiktQuery = useQuery(
    behandlingApi.arbeidsgiverOversiktOptions(behandling.versjon, erFørstegangssøknadEllerRevurdering),
  );
  const behandlingPersonoversiktQuery = useQuery(
    behandlingApi.behandlingPersonoversiktOptions(behandling.versjon, erFørstegangssøknadEllerRevurdering),
  );

  if (
    kodeverk === undefined ||
    (erFørstegangssøknadEllerRevurdering &&
      (arbeidsgivereOversiktQuery.isPending || behandlingPersonoversiktQuery.isPending))
  ) {
    return <LoadingPanel />;
  }

  if (arbeidsgivereOversiktQuery.isError || behandlingPersonoversiktQuery.isError) {
    return <ErrorPage />;
  }

  const arbeidsgivere = arbeidsgivereOversiktQuery.data?.arbeidsgivere;
  const personoversikt = behandlingPersonoversiktQuery.data;

  const erTilbakekrevingsbehandling = erTilbakekreving(behandling.type);

  return (
    <>
      {!erTilbakekrevingsbehandling && (
        <BehandlingPaVent behandling={behandling} opneSokeside={opneSokeside} kodeverk={kodeverk} />
      )}
      <StandardPropsProvider
        behandling={behandling}
        fagsak={fagsak}
        rettigheter={rettigheter}
        hasFetchError={false}
        alleKodeverk={kodeverk}
        lagreAksjonspunkter={lagreAksjonspunkter}
        lagreOverstyrteAksjonspunkter={lagreOverstyrteAksjonspunkter}
        oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
      >
        <>
          {fagsak.fagsakYtelseType === FagsakYtelseType.FORELDREPENGER && erFørstegangssøknadEllerRevurdering && (
            <Suspense fallback={<LoadingPanel />}>
              <ErrorBoundary errorMessageCallback={addErrorMessage}>
                <ForeldrepengerPaneler
                  alleBehandlinger={alleBehandlinger}
                  behandling={behandling}
                  fagsak={fagsak}
                  valgtProsessSteg={query.punkt}
                  valgtFaktaSteg={query.fakta}
                  oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
                  opneSokeside={opneSokeside}
                  setSkalOppdatereEtterBekreftelseAvAp={setSkalOppdatereEtterBekreftelseAvAp}
                  arbeidsgivere={arbeidsgivere}
                  personoversikt={personoversikt}
                  rettigheter={rettigheter}
                  hentOgSettBehandling={hentOgSettBehandling}
                />
              </ErrorBoundary>
            </Suspense>
          )}
          {fagsak.fagsakYtelseType === FagsakYtelseType.SVANGERSKAPSPENGER && erFørstegangssøknadEllerRevurdering && (
            <Suspense fallback={<LoadingPanel />}>
              <ErrorBoundary errorMessageCallback={addErrorMessage}>
                <SvangerskapspengerPaneler
                  alleBehandlinger={alleBehandlinger}
                  behandling={behandling}
                  fagsak={fagsak}
                  valgtProsessSteg={query.punkt}
                  valgtFaktaSteg={query.fakta}
                  oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
                  opneSokeside={opneSokeside}
                  toggleOppdateringAvFagsakOgBehandling={setSkalOppdatereEtterBekreftelseAvAp}
                  arbeidsgivere={arbeidsgivere}
                  personoversikt={personoversikt}
                  rettigheter={rettigheter}
                  hentOgSettBehandling={hentOgSettBehandling}
                />
              </ErrorBoundary>
            </Suspense>
          )}
          {fagsak.fagsakYtelseType === FagsakYtelseType.ENGANGSSTONAD && erFørstegangssøknadEllerRevurdering && (
            <Suspense fallback={<LoadingPanel />}>
              <ErrorBoundary errorMessageCallback={addErrorMessage}>
                <EngangsstonadPaneler
                  behandling={behandling}
                  fagsak={fagsak}
                  valgtProsessSteg={query.punkt}
                  valgtFaktaSteg={query.fakta}
                  oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
                  opneSokeside={opneSokeside}
                  setSkalOppdatereEtterBekreftelseAvAp={setSkalOppdatereEtterBekreftelseAvAp}
                  arbeidsgivere={arbeidsgivere}
                  personoversikt={personoversikt}
                  rettigheter={rettigheter}
                />
              </ErrorBoundary>
            </Suspense>
          )}
          {behandling.type === BehandlingType.DOKUMENTINNSYN && (
            <Suspense fallback={<LoadingPanel />}>
              <ErrorBoundary errorMessageCallback={addErrorMessage}>
                <InnsynPaneler
                  behandling={behandling}
                  fagsak={fagsak}
                  valgtProsessSteg={query.punkt}
                  oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
                  opneSokeside={opneSokeside}
                  setSkalOppdatereEtterBekreftelseAvAp={setSkalOppdatereEtterBekreftelseAvAp}
                />
              </ErrorBoundary>
            </Suspense>
          )}
          {behandling.type === BehandlingType.ANKE && (
            <Suspense fallback={<LoadingPanel />}>
              <ErrorBoundary errorMessageCallback={addErrorMessage}>
                <AnkePaneler
                  behandling={behandling}
                  valgtProsessSteg={query.punkt}
                  valgtFaktaSteg={query.fakta}
                  oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
                  alleBehandlinger={alleBehandlinger}
                />
              </ErrorBoundary>
            </Suspense>
          )}
          {behandling.type === BehandlingType.KLAGE && (
            <Suspense fallback={<LoadingPanel />}>
              <ErrorBoundary errorMessageCallback={addErrorMessage}>
                <KlagePaneler
                  behandling={behandling}
                  fagsak={fagsak}
                  valgtProsessSteg={query.punkt}
                  valgtFaktaSteg={query.fakta}
                  oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
                  setSkalOppdatereEtterBekreftelseAvAp={setSkalOppdatereEtterBekreftelseAvAp}
                  opneSokeside={opneSokeside}
                  alleBehandlinger={alleBehandlinger}
                  hentOgSettBehandling={hentOgSettBehandling}
                />
              </ErrorBoundary>
            </Suspense>
          )}
          {erTilbakekrevingsbehandling && (
            <Suspense fallback={<LoadingPanel />}>
              <ErrorBoundary errorMessageCallback={addErrorMessage}>
                <TilbakekrevingPaneler
                  behandling={behandling}
                  fagsak={fagsak}
                  valgtProsessSteg={query.punkt}
                  valgtFaktaSteg={query.fakta}
                  oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
                  opneSokeside={opneSokeside}
                  alleBehandlinger={alleBehandlinger}
                />
              </ErrorBoundary>
            </Suspense>
          )}
        </>
      </StandardPropsProvider>
    </>
  );
};

const formatName = (bpName = ''): string => replaceNorwegianCharacters(bpName.toLowerCase());

const getOppdaterProsessStegOgFaktaPanelIUrl =
  (location: Location, navigate: NavigateFunction) =>
  (prosessStegId?: string, faktaPanelId?: string): void => {
    let newLocation;
    if (prosessStegId === 'default') {
      newLocation = getLocationWithDefaultProsessStegAndFakta(location);
    } else if (prosessStegId) {
      newLocation = getProsessStegLocation(location)(formatName(prosessStegId));
    } else {
      newLocation = getProsessStegLocation(location)();
    }

    if (faktaPanelId === 'default') {
      newLocation = getFaktaLocation(newLocation)('default');
    } else if (faktaPanelId) {
      newLocation = getFaktaLocation(newLocation)(formatName(faktaPanelId));
    } else {
      newLocation = getFaktaLocation(newLocation)();
    }

    navigate(newLocation);
  };

const erTilbakekreving = (behandlingTypeKode?: string): boolean =>
  behandlingTypeKode === BehandlingType.TILBAKEKREVING ||
  behandlingTypeKode === BehandlingType.TILBAKEKREVING_REVURDERING;
