import { useState } from 'react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { ArbeidsgiverOpplysningerPerId, Personoversikt } from '@navikt/fp-types';

import { FaktaMeny } from '../felles/fakta/FaktaMeny';
import type { FaktaPanelMedÅpentApInfo } from '../felles/fakta/useFaktaPanelMenyData';
import { ProsessMeny } from '../felles/prosess/ProsessMeny';
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
import { VedtakProsessStegInitPanel } from '../fellesPaneler/prosess/VedtakProsessStegInitPanel.tsx';
import { BesteberegningFaktaInitPanel } from './faktaPaneler/BesteberegningFaktaInitPanel';
import { OmsorgFaktaInitPanel } from './faktaPaneler/OmsorgFaktaInitPanel';
import { OmsorgOgRettFaktaInitPanel } from './faktaPaneler/OmsorgOgRettFaktaInitPanel';
import { UttakDokumentasjonFaktaInitPanel } from './faktaPaneler/UttakDokumentasjonFaktaInitPanel';
import { UttakFaktaInitPanel } from './faktaPaneler/UttakFaktaInitPanel';
import { InngangsvilkarFpProsessStegInitPanel } from './prosessPaneler/InngangsvilkarFpProsessStegInitPanel';
import { TilkjentYtelseFpProsessStegInitPanel } from './prosessPaneler/TilkjentYtelseFpProsessStegInitPanel';
import { UttakProsessStegInitPanel } from './prosessPaneler/UttakProsessStegInitPanel';

interface Props {
  valgtProsessSteg: string | undefined;
  valgtFaktaSteg: string | undefined;
  arbeidsgivere: ArbeidsgiverOpplysningerPerId;
  personoversikt: Personoversikt;
}

const ForeldrepengerPaneler = ({ valgtProsessSteg, valgtFaktaSteg, arbeidsgivere, personoversikt }: Props) => {
  const [faktaPanelMedÅpentApInfo, setFaktaPanelMedÅpentApInfo] = useState<FaktaPanelMedÅpentApInfo>();

  return (
    <>
      <ProsessMeny valgtProsessSteg={valgtProsessSteg} valgtFaktaSteg={valgtFaktaSteg}>
        <VarselProsessStegInitPanel />
        <OpplysningspliktProsessStegInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <InngangsvilkarFpProsessStegInitPanel faktaPanelMedÅpentApInfo={faktaPanelMedÅpentApInfo} />
        <BeregningsgrunnlagProsessStegInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <SoknadsfristProsessStegInitPanel />
        <FortsattMedlemskapProsessStegInitPanel />
        <UttakProsessStegInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} personoversikt={personoversikt} />
        <TilkjentYtelseFpProsessStegInitPanel
          arbeidsgiverOpplysningerPerId={arbeidsgivere}
          personoversikt={personoversikt}
        />
        <SimuleringProsessStegInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <VedtakProsessStegInitPanel aksjonspunktKoder={[AksjonspunktKode.VURDERE_INNTEKTSMELDING_KLAGE]} />
      </ProsessMeny>
      <FaktaMeny
        valgtFaktaSteg={valgtFaktaSteg}
        valgtProsessSteg={valgtProsessSteg}
        setFaktaPanelMedÅpentApInfo={setFaktaPanelMedÅpentApInfo}
      >
        <SakenFaktaInitPanel />
        <ArbeidOgInntektFaktaInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <InntektsmeldingerFaktaInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <ArbeidsforholdFaktaInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <YtelserFaktaInitPanel />
        <VergeFaktaInitPanel />
        <OmsorgOgForeldreansvarFaktaInitPanel personoversikt={personoversikt} />
        <AdopsjonsvilkaretFaktaInitPanel />
        <FodselvilkaretFaktaInitPanel />
        <MedlemskapsvilkaretFaktaInitPanel />
        <OpptjeningsvilkaretFaktaInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <PermisjonFaktaInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <BeregningFaktaInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <BesteberegningFaktaInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <FordelingFaktaInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <OmsorgOgRettFaktaInitPanel personoversikt={personoversikt} />
        <OmsorgFaktaInitPanel personoversikt={personoversikt} />
        <UttakFaktaInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <UttakDokumentasjonFaktaInitPanel />
      </FaktaMeny>
    </>
  );
};

// Default export grunna React.lazy
// eslint-disable-next-line import/no-default-export
export default ForeldrepengerPaneler;
