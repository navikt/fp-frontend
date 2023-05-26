import React, { FunctionComponent, useCallback, useEffect } from 'react';

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
import { RestApiState } from '@navikt/fp-rest-api-hooks';
import { parseQueryString, replaceNorwegianCharacters } from '@navikt/ft-utils';
import { Location } from 'history';

import { BehandlingType, FagsakYtelseType } from '@navikt/ft-kodeverk';
import { NavigateFunction, useLocation, useNavigate } from 'react-router';
import BehandlingPaVent from './felles/modaler/paVent/BehandlingPaVent';
import StandardPropsProvider from './felles/utils/standardPropsStateContext';
import BehandlingContainerWrapperForeldrepenger from './forstegangsoknadOgRevurdering/foreldrepenger/BehandlingContainerWrapperForeldrepenger';
import { BehandlingApiKeys, restBehandlingApiHooks } from '../data/behandlingContextApi';
import BehandlingContainerWrapperEngangsstonad from './forstegangsoknadOgRevurdering/engangsstonad/BehandlingContainerWrapperEngangsstonad';
import BehandlingContainerWrapperSvangerskapspenger from './forstegangsoknadOgRevurdering/svangerskapspenger/BehandlingContainerWrapperSvangerskapspenger';
import BehandlingContainerWrapperKlage from './klage/BehandlingContainerWrapperKlage';
import BehandlingContainerWrapperInnsyn from './innsyn/BehandlingContainerWrapperInnsyn';
import BehandlingContainerWrapperAnke from './anke/BehandlingContainerWrapperAnke';
import { getFaktaLocation, getLocationWithDefaultProsessStegAndFakta, getProsessStegLocation } from '../app/paths';
import BehandlingContainerWrapperTilbakekreving from './tilbakekreving/BehandlingContainerWrapperTilbakekreving';

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

const useSetBehandlingVedEndring = (setBehandling: (behandling: Behandling) => void, behandling?: Behandling): void => {
  useEffect(() => {
    if (behandling) {
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

const ValgtBehandlingIndex: FunctionComponent<OwnProps> = ({
  setBehandling,
  behandling,
  kodeverk,
  fagsak,
  rettigheter,
  hentOgSettBehandling,
  alleBehandlinger,
}) => {
  const { startRequest: lagreAksjonspunkter, data: apBehandlingRes } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.SAVE_AKSJONSPUNKT,
  );
  const { startRequest: lagreOverstyrteAksjonspunkter, data: apOverstyrtBehandlingRes } =
    restBehandlingApiHooks.useRestApiRunner(BehandlingApiKeys.SAVE_OVERSTYRT_AKSJONSPUNKT);
  useSetBehandlingVedEndring(setBehandling, apBehandlingRes);
  useSetBehandlingVedEndring(setBehandling, apOverstyrtBehandlingRes);

  const navigate = useNavigate();
  const opneSokeside = useCallback(() => {
    navigate('/');
  }, []);

  const location = useLocation();
  const oppdaterProsessStegOgFaktaPanelIUrl = useCallback(getOppdaterProsessStegOgFaktaPanelIUrl(location, navigate), [
    location,
    navigate,
  ]);

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

  const query = parseQueryString(location.search);

  const toggleOppdateringAvFagsakOgBehandling = () => false;

  return (
    <>
      <BehandlingPaVent behandling={behandling} setBehandling={setBehandling} kodeverk={kodeverk} />
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
            <BehandlingContainerWrapperForeldrepenger
              behandling={behandling}
              fagsak={fagsak}
              valgtProsessSteg={query.punkt}
              valgtFaktaSteg={query.fakta}
              oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
              opneSokeside={opneSokeside}
              toggleOppdateringAvFagsakOgBehandling={toggleOppdateringAvFagsakOgBehandling}
              arbeidsgivere={arbeidsgivere}
              personoversikt={personoversikt}
              rettigheter={rettigheter}
              hentOgSettBehandling={hentOgSettBehandling}
            />
          )}
          {fagsak.fagsakYtelseType === FagsakYtelseType.SVANGERSKAPSPENGER && erFørstegangssøknadEllerRevurdering && (
            <BehandlingContainerWrapperSvangerskapspenger
              behandling={behandling}
              fagsak={fagsak}
              valgtProsessSteg={query.punkt}
              valgtFaktaSteg={query.fakta}
              oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
              opneSokeside={opneSokeside}
              toggleOppdateringAvFagsakOgBehandling={toggleOppdateringAvFagsakOgBehandling}
              arbeidsgivere={arbeidsgivere}
              personoversikt={personoversikt}
              rettigheter={rettigheter}
              hentOgSettBehandling={hentOgSettBehandling}
            />
          )}
          {fagsak.fagsakYtelseType === FagsakYtelseType.ENGANGSSTONAD && erFørstegangssøknadEllerRevurdering && (
            <BehandlingContainerWrapperEngangsstonad
              behandling={behandling}
              fagsak={fagsak}
              valgtProsessSteg={query.punkt}
              valgtFaktaSteg={query.fakta}
              oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
              opneSokeside={opneSokeside}
              toggleOppdateringAvFagsakOgBehandling={toggleOppdateringAvFagsakOgBehandling}
              arbeidsgivere={arbeidsgivere}
              personoversikt={personoversikt}
              rettigheter={rettigheter}
            />
          )}
          {behandling?.type === BehandlingType.DOKUMENTINNSYN && (
            <BehandlingContainerWrapperInnsyn
              behandling={behandling}
              fagsak={fagsak}
              valgtProsessSteg={query.punkt}
              oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
              opneSokeside={opneSokeside}
              toggleOppdateringAvFagsakOgBehandling={toggleOppdateringAvFagsakOgBehandling}
            />
          )}
          {behandling?.type === BehandlingType.ANKE && (
            <BehandlingContainerWrapperAnke
              behandling={behandling}
              valgtProsessSteg={query.punkt}
              valgtFaktaSteg={query.fakta}
              oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
              alleBehandlinger={alleBehandlinger}
            />
          )}
          {behandling?.type === BehandlingType.KLAGE && (
            <BehandlingContainerWrapperKlage
              behandling={behandling}
              fagsak={fagsak}
              valgtProsessSteg={query.punkt}
              valgtFaktaSteg={query.fakta}
              oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
              toggleOppdateringAvFagsakOgBehandling={toggleOppdateringAvFagsakOgBehandling}
              opneSokeside={opneSokeside}
              alleBehandlinger={alleBehandlinger}
            />
          )}
          {erTilbakekreving(behandling?.type) && (
            <BehandlingContainerWrapperTilbakekreving
              behandling={behandling}
              fagsak={fagsak}
              valgtProsessSteg={query.punkt}
              valgtFaktaSteg={query.fakta}
              oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
              toggleOppdateringAvFagsakOgBehandling={toggleOppdateringAvFagsakOgBehandling}
              opneSokeside={opneSokeside}
              alleBehandlinger={alleBehandlinger}
            />
          )}
        </>
      </StandardPropsProvider>
    </>
  );
};

export default ValgtBehandlingIndex;
