import React, { FunctionComponent } from 'react';

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

import { BehandlingType, FagsakYtelseType } from '@navikt/ft-kodeverk';
import BehandlingPaVent from './felles/modaler/paVent/BehandlingPaVent';
import StandardPropsProvider from './felles/utils/standardPropsStateContext';
import { useLagreAksjonspunkt } from './felles/utils/indexHooks';
import BehandlingContainerWrapperForeldrepenger from './forstegangsoknadOgRevurdering/foreldrepenger/BehandlingContainerWrapperForeldrepenger';
import { BehandlingApiKeys, restBehandlingApiHooks } from '../data/behandlingContextApi';
import BehandlingContainerWrapperEngangsstonad from './forstegangsoknadOgRevurdering/engangsstonad/BehandlingContainerWrapperEngangsstonad';
import BehandlingContainerWrapperSvangerskapspenger from './forstegangsoknadOgRevurdering/svangerskapspenger/BehandlingContainerWrapperSvangerskapspenger';
import BehandlingContainerWrapperKlage from './klage/BehandlingContainerWrapperKlage';
import BehandlingContainerWrapperInnsyn from './innsyn/BehandlingContainerWrapperInnsyn';
import BehandlingContainerWrapperAnke from './anke/BehandlingContainerWrapperAnke';

const endepunkterSomSkalHentesEnGang = [
  { key: BehandlingApiKeys.ARBEIDSGIVERE_OVERSIKT },
  { key: BehandlingApiKeys.BEHANDLING_PERSONOVERSIKT },
];

const erTilbakekreving = (behandlingTypeKode?: string): boolean =>
  behandlingTypeKode === BehandlingType.TILBAKEKREVING ||
  behandlingTypeKode === BehandlingType.TILBAKEKREVING_REVURDERING;

type OwnProps = {
  behandling: Behandling;
  hentOgSettBehandling: () => void;
  fagsak: Fagsak;
  rettigheter: AksessRettigheter;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  setBehandling: (behandling: Behandling) => void;
  opneSokeside: () => void;
  kodeverk: AlleKodeverk;
  alleBehandlinger: BehandlingAppKontekst[];
};

const ValgtBehandlingIndex: FunctionComponent<OwnProps> = ({
  setBehandling,
  behandling,
  kodeverk,
  fagsak,
  rettigheter,
  oppdaterProsessStegOgFaktaPanelIUrl,
  valgtProsessSteg,
  valgtFaktaSteg,
  opneSokeside,
  hentOgSettBehandling,
  alleBehandlinger,
}) => {
  const { lagreAksjonspunkter, lagreOverstyrteAksjonspunkter } = useLagreAksjonspunkt(setBehandling);

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
              valgtProsessSteg={valgtProsessSteg}
              valgtFaktaSteg={valgtFaktaSteg}
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
              valgtProsessSteg={valgtProsessSteg}
              valgtFaktaSteg={valgtFaktaSteg}
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
              valgtProsessSteg={valgtProsessSteg}
              valgtFaktaSteg={valgtFaktaSteg}
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
              valgtProsessSteg={valgtProsessSteg}
              oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
              opneSokeside={opneSokeside}
              toggleOppdateringAvFagsakOgBehandling={toggleOppdateringAvFagsakOgBehandling}
            />
          )}
          {behandling?.type === BehandlingType.ANKE && (
            <BehandlingContainerWrapperAnke
              behandling={behandling}
              valgtProsessSteg={valgtProsessSteg}
              valgtFaktaSteg={valgtFaktaSteg}
              oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
              alleBehandlinger={alleBehandlinger}
            />
          )}
          {behandling?.type === BehandlingType.KLAGE && (
            <BehandlingContainerWrapperKlage
              behandling={behandling}
              fagsak={fagsak}
              valgtProsessSteg={valgtProsessSteg}
              valgtFaktaSteg={valgtFaktaSteg}
              oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
              toggleOppdateringAvFagsakOgBehandling={toggleOppdateringAvFagsakOgBehandling}
              opneSokeside={opneSokeside}
              alleBehandlinger={alleBehandlinger}
            />
          )}
          {erTilbakekreving(behandling?.type) && <div>test</div>}
        </>
      </StandardPropsProvider>
    </>
  );
};

export default ValgtBehandlingIndex;
