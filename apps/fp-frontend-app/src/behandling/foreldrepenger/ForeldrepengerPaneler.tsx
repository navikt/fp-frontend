import type { ArbeidsgiverOpplysningerPerId, Personoversikt } from '@navikt/fp-types';

import { BehandlingContainer } from '../felles/BehandlingContainer';
import type { FaktaPanelInitProps } from '../felles/typer/faktaPanelInitProps';
import type { ProsessPanelExtraInitProps, ProsessPanelInitProps } from '../felles/typer/prosessPanelInitProps';
import { AdopsjonsvilkaretFaktaInitPanel } from '../fellesPaneler/fakta/AdopsjonsvilkaretFaktaInitPanel';
import { ArbeidOgInntektFaktaInitPanel } from '../fellesPaneler/fakta/ArbeidOgInntektFaktaInitPanel';
import { ArbeidsforholdFaktaInitPanel } from '../fellesPaneler/fakta/ArbeidsforholdFaktaInitPanel';
import { BeregningFaktaInitPanel } from '../fellesPaneler/fakta/BeregningFaktaInitPanel';
import { FodselvilkaretFaktaInitPanel } from '../fellesPaneler/fakta/FodselvilkaretFaktaInitPanel';
import { FordelingFaktaInitPanel } from '../fellesPaneler/fakta/FordelingFaktaInitPanel';
import { InntektsmeldingerFaktaInitPanel } from '../fellesPaneler/fakta/InntektsmeldingerFaktaInitPanel';
import { MedlemskapsvilkaretFaktaInitPanel } from '../fellesPaneler/fakta/MedlemskapsvilkaretFaktaInitPanel';
import { OmsorgOgForeldreansvarFaktaInitPanel } from '../fellesPaneler/fakta/OmsorgOgForeldreansvarFaktaInitPanel';
import { OpptjeningsvilkaretFaktaInitPanel } from '../fellesPaneler/fakta/OpptjeningsvilkaretFaktaInitPanel';
import { PermisjonFaktaInitPanel } from '../fellesPaneler/fakta/PermisjonFaktaInitPanel';
import { SakenFaktaInitPanel } from '../fellesPaneler/fakta/SakenFaktaInitPanel';
import { VergeFaktaInitPanel } from '../fellesPaneler/fakta/VergeFaktaInitPanel';
import { YtelserFaktaInitPanel } from '../fellesPaneler/fakta/YtelserFaktaInitPanel';
import { BeregningsgrunnlagProsessStegInitPanel } from '../fellesPaneler/prosess/BeregningsgrunnlagProsessStegInitPanel';
import { FortsattMedlemskapProsessStegInitPanel } from '../fellesPaneler/prosess/FortsattMedlemskapProsessStegInitPanel';
import { OpplysningspliktProsessStegInitPanel } from '../fellesPaneler/prosess/OpplysningspliktProsessStegInitPanel';
import { SimuleringProsessStegInitPanel } from '../fellesPaneler/prosess/SimuleringProsessStegInitPanel';
import { SoknadsfristProsessStegInitPanel } from '../fellesPaneler/prosess/SoknadsfristProsessStegInitPanel';
import { VarselProsessStegInitPanel } from '../fellesPaneler/prosess/VarselProsessStegInitPanel';
import { BesteberegningFaktaInitPanel } from './faktaPaneler/BesteberegningFaktaInitPanel';
import { OmsorgFaktaInitPanel } from './faktaPaneler/OmsorgFaktaInitPanel';
import { OmsorgOgRettFaktaInitPanel } from './faktaPaneler/OmsorgOgRettFaktaInitPanel';
import { UttakDokumentasjonFaktaInitPanel } from './faktaPaneler/UttakDokumentasjonFaktaInitPanel';
import { UttakFaktaInitPanel } from './faktaPaneler/UttakFaktaInitPanel';
import { InngangsvilkarFpProsessStegInitPanel } from './prosessPaneler/InngangsvilkarFpProsessStegInitPanel';
import { TilkjentYtelseFpProsessStegInitPanel } from './prosessPaneler/TilkjentYtelseFpProsessStegInitPanel';
import { UttakProsessStegInitPanel } from './prosessPaneler/UttakProsessStegInitPanel';
import { VedtakFpProsessStegInitPanel } from './prosessPaneler/VedtakFpProsessStegInitPanel';

interface Props {
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  arbeidsgivere: ArbeidsgiverOpplysningerPerId;
  personoversikt: Personoversikt;
}

const ForeldrepengerPaneler = ({ valgtProsessSteg, valgtFaktaSteg, arbeidsgivere, personoversikt }: Props) => {
  const hentProsessPaneler = (props: ProsessPanelInitProps, ekstraProps: ProsessPanelExtraInitProps) => (
    <>
      <VarselProsessStegInitPanel {...props} />
      <OpplysningspliktProsessStegInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <InngangsvilkarFpProsessStegInitPanel {...props} apentFaktaPanelInfo={ekstraProps.apentFaktaPanelInfo} />
      <BeregningsgrunnlagProsessStegInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <SoknadsfristProsessStegInitPanel {...props} />
      <FortsattMedlemskapProsessStegInitPanel {...props} />
      <UttakProsessStegInitPanel
        {...props}
        arbeidsgiverOpplysningerPerId={arbeidsgivere}
        personoversikt={personoversikt}
      />
      <TilkjentYtelseFpProsessStegInitPanel
        {...props}
        arbeidsgiverOpplysningerPerId={arbeidsgivere}
        personoversikt={personoversikt}
      />
      <SimuleringProsessStegInitPanel
        {...props}
        menyData={ekstraProps.allMenyData}
        arbeidsgiverOpplysningerPerId={arbeidsgivere}
      />
      <VedtakFpProsessStegInitPanel {...props} />
    </>
  );

  const hentFaktaPaneler = (props: FaktaPanelInitProps) => (
    <>
      <SakenFaktaInitPanel {...props} />
      <ArbeidOgInntektFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <InntektsmeldingerFaktaInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} {...props} />
      <ArbeidsforholdFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <YtelserFaktaInitPanel {...props} />
      <VergeFaktaInitPanel {...props} />
      <OmsorgOgForeldreansvarFaktaInitPanel {...props} personoversikt={personoversikt} />
      <AdopsjonsvilkaretFaktaInitPanel {...props} />
      <FodselvilkaretFaktaInitPanel {...props} />
      <MedlemskapsvilkaretFaktaInitPanel {...props} />
      <OpptjeningsvilkaretFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <PermisjonFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <BeregningFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <BesteberegningFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <FordelingFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <OmsorgOgRettFaktaInitPanel {...props} personoversikt={personoversikt} />
      <OmsorgFaktaInitPanel {...props} personoversikt={personoversikt} />
      <UttakFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <UttakDokumentasjonFaktaInitPanel {...props} />
    </>
  );

  return (
    <BehandlingContainer
      valgtProsessSteg={valgtProsessSteg}
      valgtFaktaSteg={valgtFaktaSteg}
      hentFaktaPaneler={hentFaktaPaneler}
      hentProsessPaneler={hentProsessPaneler}
    />
  );
};

// Default export grunna React.lazy
// eslint-disable-next-line import/no-default-export
export default ForeldrepengerPaneler;
