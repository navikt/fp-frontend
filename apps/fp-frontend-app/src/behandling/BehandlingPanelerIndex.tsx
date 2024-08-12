import React, { FunctionComponent, Suspense, useCallback, useEffect, useState } from 'react';

import {
  AksessRettigheter,
  AlleKodeverk,
  ArbeidsgiverOpplysningerWrapper,
  Behandling,
  BehandlingAppKontekst,
  Fagsak,
  Personoversikt,
} from '@navikt/fp-types';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { RestApiState, useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';
import { parseQueryString, replaceNorwegianCharacters } from '@navikt/ft-utils';
import { Location } from 'history';

import { BehandlingType, FagsakYtelseType } from '@navikt/ft-kodeverk';
import { NavigateFunction, useLocation, useNavigate } from 'react-router';
import BehandlingPaVent from './felles/modaler/paVent/BehandlingPaVent';
import StandardPropsProvider from './felles/utils/standardPropsStateContext';
import { BehandlingApiKeys, restBehandlingApiHooks } from '../data/behandlingContextApi';
import { getFaktaLocation, getLocationWithDefaultProsessStegAndFakta, getProsessStegLocation } from '../app/paths';
import lazyWithRetry from './lazyUtils';
import ErrorBoundary from '../app/ErrorBoundary';

const ForeldrepengerPaneler = lazyWithRetry(() => import('./foreldrepenger/ForeldrepengerPaneler'));
const EngangsstonadPaneler = lazyWithRetry(() => import('./engangsstonad/EngangsstonadPaneler'));
const SvangerskapspengerPaneler = lazyWithRetry(() => import('./svangerskapspenger/SvangerskapspengerPaneler'));
const KlagePaneler = lazyWithRetry(() => import('./klage/KlagePaneler'));
const InnsynPaneler = lazyWithRetry(() => import('./innsyn/InnsynPaneler'));
const AnkePaneler = lazyWithRetry(() => import('./anke/AnkePaneler'));
const TilbakekrevingPaneler = lazyWithRetry(() => import('./tilbakekreving/TilbakekrevingPaneler'));

const endepunkterSomSkalHentesEnGang = [
  { key: BehandlingApiKeys.ARBEIDSGIVERE_OVERSIKT },
  { key: BehandlingApiKeys.BEHANDLING_PERSONOVERSIKT },
];

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

const useSetBehandlingVedEndring = (
  setBehandling: (behandling: Behandling) => void,
  skalOppdatereEtterBekreftelseAvAp: boolean,
  behandling?: Behandling,
): void => {
  useEffect(() => {
    if (behandling && skalOppdatereEtterBekreftelseAvAp) {
      setBehandling(behandling);
    }
  }, [behandling]);
};

const erTilbakekreving = (behandlingTypeKode?: string): boolean =>
  behandlingTypeKode === BehandlingType.TILBAKEKREVING ||
  behandlingTypeKode === BehandlingType.TILBAKEKREVING_REVURDERING;

type OwnProps = {
  behandling: Behandling;
  hentOgSettBehandling: () => void;
  fagsak: Fagsak;
  rettigheter: AksessRettigheter;
  setBehandling: (behandling: Behandling) => void;
  kodeverk: AlleKodeverk;
  alleBehandlinger: BehandlingAppKontekst[];
};

const BehandlingPanelerIndex: FunctionComponent<OwnProps> = ({
  setBehandling,
  behandling,
  kodeverk,
  fagsak,
  rettigheter,
  hentOgSettBehandling,
  alleBehandlinger,
}) => {
  const { addErrorMessage } = useRestApiErrorDispatcher();

  const [skalOppdatereEtterBekreftelseAvAp, setSkalOppdatereEtterBekreftelseAvAp] = useState(true);

  const { startRequest: lagreAksjonspunkter, data: apBehandlingRes } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.SAVE_AKSJONSPUNKT,
  );
  const { startRequest: lagreOverstyrteAksjonspunkter, data: apOverstyrtBehandlingRes } =
    restBehandlingApiHooks.useRestApiRunner(BehandlingApiKeys.SAVE_OVERSTYRT_AKSJONSPUNKT);
  useSetBehandlingVedEndring(setBehandling, skalOppdatereEtterBekreftelseAvAp, apBehandlingRes);
  useSetBehandlingVedEndring(setBehandling, skalOppdatereEtterBekreftelseAvAp, apOverstyrtBehandlingRes);

  const navigate = useNavigate();
  const opneSokeside = useCallback(() => {
    navigate('/');
  }, []);

  const location = useLocation();
  const oppdaterProsessStegOgFaktaPanelIUrl = useCallback(getOppdaterProsessStegOgFaktaPanelIUrl(location, navigate), [
    location,
    navigate,
  ]);
  const query = parseQueryString(location.search);

  const erFørstegangssøknadEllerRevurdering =
    behandling?.type === BehandlingType.FORSTEGANGSSOKNAD || behandling?.type === BehandlingType.REVURDERING;

  const { data: opplysningsdata, state: opplysningsdataState } = restBehandlingApiHooks.useMultipleRestApi<
    {
      arbeidsgivereOversikt: ArbeidsgiverOpplysningerWrapper;
      behandlingPersonoversikt: Personoversikt;
    },
    void
  >(endepunkterSomSkalHentesEnGang, {
    updateTriggers: [behandling?.versjon],
    suspendRequest: !behandling || !erFørstegangssøknadEllerRevurdering,
  });

  if (
    !behandling ||
    (erFørstegangssøknadEllerRevurdering && (opplysningsdataState !== RestApiState.SUCCESS || !opplysningsdata))
  ) {
    return <LoadingPanel />;
  }

  const arbeidsgivere = opplysningsdata?.arbeidsgivereOversikt?.arbeidsgivere;
  const personoversikt = opplysningsdata?.behandlingPersonoversikt;

  const erTilbakekrevingsbehandling = erTilbakekreving(behandling?.type);

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
          {behandling?.type === BehandlingType.DOKUMENTINNSYN && (
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
          {behandling?.type === BehandlingType.ANKE && (
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
          {behandling?.type === BehandlingType.KLAGE && (
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

export default BehandlingPanelerIndex;
