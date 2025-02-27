import type { ArbeidsgiverOpplysningerPerId, Personoversikt } from '@navikt/fp-types';

import { FaktaMeny } from '../felles/fakta/FaktaMeny';
import { ProsessMeny } from '../felles/prosess/ProsessMeny';
import { ArbeidOgInntektFaktaInitPanel } from '../fellesPaneler/fakta/ArbeidOgInntektFaktaInitPanel';
import { ArbeidsforholdFaktaInitPanel } from '../fellesPaneler/fakta/ArbeidsforholdFaktaInitPanel';
import { BeregningFaktaInitPanel } from '../fellesPaneler/fakta/BeregningFaktaInitPanel';
import { FordelingFaktaInitPanel } from '../fellesPaneler/fakta/FordelingFaktaInitPanel';
import { InntektsmeldingerFaktaInitPanel } from '../fellesPaneler/fakta/InntektsmeldingerFaktaInitPanel';
import { MedlemskapsvilkaretFaktaInitPanel } from '../fellesPaneler/fakta/MedlemskapsvilkaretFaktaInitPanel';
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
import { FodselOgTilretteleggingFaktaInitPanel } from './faktaPaneler/FodselOgTilretteleggingFaktaInitPanel';
import { InngangsvilkarSvpProsessStegInitPanel } from './prosessPaneler/InngangsvilkarSvpProsessStegInitPanel';
import { TilkjentYtelseProsessStegInitPanel } from './prosessPaneler/TilkjentYtelseProsessStegInitPanel';
import { VedtakSvpProsessStegInitPanel } from './prosessPaneler/VedtakSvpProsessStegInitPanel';

interface Props {
  valgtProsessSteg: string | undefined;
  valgtFaktaSteg: string | undefined;
  arbeidsgivere: ArbeidsgiverOpplysningerPerId;
  personoversikt: Personoversikt;
}

const SvangerskapspengerPaneler = ({ valgtProsessSteg, valgtFaktaSteg, arbeidsgivere, personoversikt }: Props) => (
  <>
    <ProsessMeny valgtProsessSteg={valgtProsessSteg} valgtFaktaSteg={valgtFaktaSteg}>
      <OpplysningspliktProsessStegInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <InngangsvilkarSvpProsessStegInitPanel />
      <BeregningsgrunnlagProsessStegInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <SoknadsfristProsessStegInitPanel />
      <FortsattMedlemskapProsessStegInitPanel />
      <TilkjentYtelseProsessStegInitPanel
        arbeidsgiverOpplysningerPerId={arbeidsgivere}
        personoversikt={personoversikt}
      />
      <SimuleringProsessStegInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <VedtakSvpProsessStegInitPanel />
    </ProsessMeny>
    <FaktaMeny valgtFaktaSteg={valgtFaktaSteg} valgtProsessSteg={valgtProsessSteg}>
      <SakenFaktaInitPanel />
      <ArbeidOgInntektFaktaInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <InntektsmeldingerFaktaInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <ArbeidsforholdFaktaInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <YtelserFaktaInitPanel />
      <VergeFaktaInitPanel />
      <FodselOgTilretteleggingFaktaInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <MedlemskapsvilkaretFaktaInitPanel />
      <OpptjeningsvilkaretFaktaInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <PermisjonFaktaInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <BeregningFaktaInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <FordelingFaktaInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
    </FaktaMeny>
  </>
);

// Default export grunna React.lazy
// eslint-disable-next-line import/no-default-export
export default SvangerskapspengerPaneler;
