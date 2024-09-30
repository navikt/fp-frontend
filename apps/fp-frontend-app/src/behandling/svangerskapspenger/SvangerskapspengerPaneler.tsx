import React, { FunctionComponent, useCallback } from 'react';

import {
  AksessRettigheter,
  ArbeidsgiverOpplysningerPerId,
  Behandling,
  BehandlingAppKontekst,
  Fagsak,
  Personoversikt,
} from '@navikt/fp-types';

import BehandlingContainer from '../felles/BehandlingContainer';
import SakenFaktaInitPanel from '../fellesPaneler/fakta/SakenFaktaInitPanel';
import ArbeidsforholdFaktaInitPanel from '../fellesPaneler/fakta/ArbeidsforholdFaktaInitPanel';
import ArbeidOgInntektFaktaInitPanel from '../fellesPaneler/fakta/ArbeidOgInntektFaktaInitPanel';
import YtelserFaktaInitPanel from '../fellesPaneler/fakta/YtelserFaktaInitPanel';
import VergeFaktaInitPanel from '../fellesPaneler/fakta/VergeFaktaInitPanel';
import FodseltilretteleggingFaktaInitPanel from './faktaPaneler/FodseltilretteleggingFaktaInitPanel';
import OpptjeningsvilkaretFaktaInitPanel from '../fellesPaneler/fakta/OpptjeningsvilkaretFaktaInitPanel';
import BeregningFaktaInitPanel from '../fellesPaneler/fakta/BeregningFaktaInitPanel';
import FordelingFaktaInitPanel from '../fellesPaneler/fakta/FordelingFaktaInitPanel';
import OpplysningspliktProsessStegInitPanel from '../fellesPaneler/prosess/OpplysningspliktProsessStegInitPanel';
import InngangsvilkarSvpProsessStegInitPanel from './prosessPaneler/InngangsvilkarSvpProsessStegInitPanel';
import BeregningsgrunnlagProsessStegInitPanel from '../fellesPaneler/prosess/BeregningsgrunnlagProsessStegInitPanel';
import SoknadsfristProsessStegInitPanel from '../fellesPaneler/prosess/SoknadsfristProsessStegInitPanel';
import FortsattMedlemskapProsessStegInitPanel from '../fellesPaneler/prosess/FortsattMedlemskapProsessStegInitPanel';
import TilkjentYtelseProsessStegInitPanel from './prosessPaneler/TilkjentYtelseProsessStegInitPanel';
import SimuleringProsessStegInitPanel from '../fellesPaneler/prosess/SimuleringProsessStegInitPanel';
import VedtakSvpProsessStegInitPanel from './prosessPaneler/VedtakSvpProsessStegInitPanel';
import PermisjonFaktaInitPanel from '../fellesPaneler/fakta/PermisjonFaktaInitPanel';
import ProsessPanelInitProps, { ProsessPanelExtraInitProps } from '../felles/typer/prosessPanelInitProps';
import FaktaPanelInitProps from '../felles/typer/faktaPanelInitProps';
import InntektsmeldingerFaktaInitPanel from '../fellesPaneler/fakta/InntektsmeldingerFaktaInitPanel';
import MedlemskapsvilkaretFaktaInitPanelV3 from '../fellesPaneler/fakta/MedlemskapsvilkaretFaktaInitPanelV3';

interface OwnProps {
  alleBehandlinger: BehandlingAppKontekst[];
  behandling: Behandling;
  fagsak: Fagsak;
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  opneSokeside: () => void;
  toggleOppdateringAvFagsakOgBehandling: (skalHenteFagsak: boolean) => void;
  arbeidsgivere: ArbeidsgiverOpplysningerPerId;
  personoversikt: Personoversikt;
  rettigheter: AksessRettigheter;
  hentOgSettBehandling: (keepData?: boolean) => void;
}

const SvangerskapspengerPaneler: FunctionComponent<OwnProps> = ({
  alleBehandlinger,
  behandling,
  fagsak,
  valgtProsessSteg,
  valgtFaktaSteg,
  oppdaterProsessStegOgFaktaPanelIUrl,
  opneSokeside,
  toggleOppdateringAvFagsakOgBehandling,
  arbeidsgivere,
  personoversikt,
  rettigheter,
  hentOgSettBehandling,
}) => {
  const faktaPaneler = useCallback(
    (props: FaktaPanelInitProps) => (
      <>
        <SakenFaktaInitPanel {...props} fagsak={fagsak} rettigheter={rettigheter} />
        <ArbeidOgInntektFaktaInitPanel
          {...props}
          saksnummer={fagsak.saksnummer}
          behandlingUuid={behandling.uuid}
          rettigheter={rettigheter}
          arbeidsgiverOpplysningerPerId={arbeidsgivere}
          hentOgSettBehandling={hentOgSettBehandling}
        />
        <InntektsmeldingerFaktaInitPanel
          fagsak={fagsak}
          alleBehandlinger={alleBehandlinger}
          arbeidsgiverOpplysningerPerId={arbeidsgivere}
          {...props}
        />
        <ArbeidsforholdFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <YtelserFaktaInitPanel {...props} />
        <VergeFaktaInitPanel {...props} />
        <FodseltilretteleggingFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <MedlemskapsvilkaretFaktaInitPanelV3 {...props} fagsak={fagsak} />
        <OpptjeningsvilkaretFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <PermisjonFaktaInitPanel
          {...props}
          saksnummer={fagsak.saksnummer}
          arbeidsgiverOpplysningerPerId={arbeidsgivere}
        />
        <BeregningFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} rettigheter={rettigheter} />
        <FordelingFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      </>
    ),
    [personoversikt, behandling, rettigheter, fagsak, arbeidsgivere, hentOgSettBehandling],
  );

  const prosessPaneler = useCallback(
    (props: ProsessPanelInitProps, ekstraProps: ProsessPanelExtraInitProps) => (
      <>
        <OpplysningspliktProsessStegInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <InngangsvilkarSvpProsessStegInitPanel
          {...props}
          rettigheter={rettigheter}
          oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
        />
        <BeregningsgrunnlagProsessStegInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <SoknadsfristProsessStegInitPanel {...props} />
        <FortsattMedlemskapProsessStegInitPanel {...props} rettigheter={rettigheter} />
        <TilkjentYtelseProsessStegInitPanel
          {...props}
          arbeidsgiverOpplysningerPerId={arbeidsgivere}
          personoversikt={personoversikt}
        />
        <SimuleringProsessStegInitPanel
          {...props}
          fagsak={fagsak}
          menyData={ekstraProps.allMenyData}
          arbeidsgiverOpplysningerPerId={arbeidsgivere}
        />
        <VedtakSvpProsessStegInitPanel
          {...props}
          fagsak={fagsak}
          opneSokeside={opneSokeside}
          toggleOppdatereFagsakContext={toggleOppdateringAvFagsakOgBehandling}
        />
      </>
    ),
    [
      personoversikt,
      fagsak,
      opneSokeside,
      toggleOppdateringAvFagsakOgBehandling,
      arbeidsgivere,
      rettigheter,
      oppdaterProsessStegOgFaktaPanelIUrl,
    ],
  );

  return (
    <BehandlingContainer
      behandling={behandling}
      valgtProsessSteg={valgtProsessSteg}
      valgtFaktaSteg={valgtFaktaSteg}
      oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
      hentFaktaPaneler={faktaPaneler}
      hentProsessPaneler={prosessPaneler}
    />
  );
};

export default SvangerskapspengerPaneler;
