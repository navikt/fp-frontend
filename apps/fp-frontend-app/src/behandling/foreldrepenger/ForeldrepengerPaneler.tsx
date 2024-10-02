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
import OmsorgvilkaretFaktaInitPanel from '../fellesPaneler/fakta/OmsorgvilkaretFaktaInitPanel';
import FordelingFaktaInitPanel from '../fellesPaneler/fakta/FordelingFaktaInitPanel';
import FodselvilkaretFaktaInitPanel from '../fellesPaneler/fakta/FodselvilkaretFaktaInitPanel';
import BesteberegningFaktaInitPanel from './faktaPaneler/BesteberegningFaktaInitPanel';
import AdopsjonsvilkaretFaktaInitPanel from '../fellesPaneler/fakta/AdopsjonsvilkaretFaktaInitPanel';
import OpptjeningsvilkaretFaktaInitPanel from '../fellesPaneler/fakta/OpptjeningsvilkaretFaktaInitPanel';
import BeregningFaktaInitPanel from '../fellesPaneler/fakta/BeregningFaktaInitPanel';
import OmsorgFaktaInitPanel from './faktaPaneler/OmsorgFaktaInitPanel';
import UttakFaktaInitPanel from './faktaPaneler/UttakFaktaInitPanel';
import PermisjonFaktaInitPanel from '../fellesPaneler/fakta/PermisjonFaktaInitPanel';
import VarselProsessStegInitPanel from '../fellesPaneler/prosess/VarselProsessStegInitPanel';
import OpplysningspliktProsessStegInitPanel from '../fellesPaneler/prosess/OpplysningspliktProsessStegInitPanel';
import InngangsvilkarFpProsessStegInitPanel from './prosessPaneler/InngangsvilkarFpProsessStegInitPanel';
import FortsattMedlemskapProsessStegInitPanel from '../fellesPaneler/prosess/FortsattMedlemskapProsessStegInitPanel';
import BeregningsgrunnlagProsessStegInitPanel from '../fellesPaneler/prosess/BeregningsgrunnlagProsessStegInitPanel';
import UttakProsessStegInitPanel from './prosessPaneler/UttakProsessStegInitPanel';
import TilkjentYtelseFpProsessStegInitPanel from './prosessPaneler/TilkjentYtelseFpProsessStegInitPanel';
import SimuleringProsessStegInitPanel from '../fellesPaneler/prosess/SimuleringProsessStegInitPanel';
import VedtakFpProsessStegInitPanel from './prosessPaneler/VedtakFpProsessStegInitPanel';
import SoknadsfristProsessStegInitPanel from '../fellesPaneler/prosess/SoknadsfristProsessStegInitPanel';
import OmsorgOgRettFaktaInitPanel from './faktaPaneler/OmsorgOgRettFaktaInitPanel';
import UttakDokumentasjonFaktaInitPanel from './faktaPaneler/UttakDokumentasjonFaktaInitPanel';
import FaktaPanelInitProps from '../felles/typer/faktaPanelInitProps';
import ProsessPanelInitProps, { ProsessPanelExtraInitProps } from '../felles/typer/prosessPanelInitProps';
import InntektsmeldingerFaktaInitPanel from '../fellesPaneler/fakta/InntektsmeldingerFaktaInitPanel';
import MedlemskapsvilkaretFaktaInitPanel from '../fellesPaneler/fakta/MedlemskapsvilkaretFaktaInitPanel';

interface OwnProps {
  alleBehandlinger: BehandlingAppKontekst[];
  behandling: Behandling;
  fagsak: Fagsak;
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  opneSokeside: () => void;
  setSkalOppdatereEtterBekreftelseAvAp: (skalHenteFagsak: boolean) => void;
  arbeidsgivere: ArbeidsgiverOpplysningerPerId;
  personoversikt: Personoversikt;
  rettigheter: AksessRettigheter;
  hentOgSettBehandling: () => void;
}

const ForeldrepengerPaneler: FunctionComponent<OwnProps> = ({
  alleBehandlinger,
  behandling,
  fagsak,
  valgtProsessSteg,
  valgtFaktaSteg,
  oppdaterProsessStegOgFaktaPanelIUrl,
  opneSokeside,
  setSkalOppdatereEtterBekreftelseAvAp,
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
        <OmsorgvilkaretFaktaInitPanel {...props} personoversikt={personoversikt} />
        <AdopsjonsvilkaretFaktaInitPanel {...props} fagsak={fagsak} />
        <FodselvilkaretFaktaInitPanel {...props} />
        <MedlemskapsvilkaretFaktaInitPanel {...props} fagsak={fagsak} />
        <OpptjeningsvilkaretFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <PermisjonFaktaInitPanel
          {...props}
          saksnummer={fagsak.saksnummer}
          arbeidsgiverOpplysningerPerId={arbeidsgivere}
        />
        <BeregningFaktaInitPanel {...props} rettigheter={rettigheter} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <BesteberegningFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <FordelingFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <OmsorgOgRettFaktaInitPanel {...props} personoversikt={personoversikt} />
        <OmsorgFaktaInitPanel {...props} personoversikt={personoversikt} />
        <UttakFaktaInitPanel
          {...props}
          rettigheter={rettigheter}
          arbeidsgiverOpplysningerPerId={arbeidsgivere}
          fagsak={fagsak}
        />
        <UttakDokumentasjonFaktaInitPanel {...props} />
      </>
    ),
    [personoversikt, fagsak, behandling, rettigheter, arbeidsgivere, hentOgSettBehandling],
  );

  const prosessPaneler = useCallback(
    (props: ProsessPanelInitProps, ekstraProps: ProsessPanelExtraInitProps) => (
      <>
        <VarselProsessStegInitPanel
          {...props}
          fagsak={fagsak}
          opneSokeside={opneSokeside}
          setSkalOppdatereEtterBekreftelseAvAp={setSkalOppdatereEtterBekreftelseAvAp}
        />
        <OpplysningspliktProsessStegInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <InngangsvilkarFpProsessStegInitPanel
          {...props}
          rettigheter={rettigheter}
          oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
          apentFaktaPanelInfo={ekstraProps.apentFaktaPanelInfo}
        />
        <BeregningsgrunnlagProsessStegInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <SoknadsfristProsessStegInitPanel {...props} />
        <FortsattMedlemskapProsessStegInitPanel {...props} />
        <UttakProsessStegInitPanel
          {...props}
          arbeidsgiverOpplysningerPerId={arbeidsgivere}
          personoversikt={personoversikt}
          rettigheter={rettigheter}
        />
        <TilkjentYtelseFpProsessStegInitPanel
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
        <VedtakFpProsessStegInitPanel
          {...props}
          fagsak={fagsak}
          opneSokeside={opneSokeside}
          setSkalOppdatereEtterBekreftelseAvAp={setSkalOppdatereEtterBekreftelseAvAp}
        />
      </>
    ),
    [
      fagsak,
      opneSokeside,
      setSkalOppdatereEtterBekreftelseAvAp,
      arbeidsgivere,
      rettigheter,
      personoversikt,
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

export default ForeldrepengerPaneler;
