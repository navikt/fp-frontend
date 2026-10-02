import type {
  BeregningFaktaAP,
  BeregningOverstyringAP,
  OverstyrBeregningsaktiviteterAP,
} from '@navikt/ft-fakta-beregning';
import type {
  FordelBeregningsgrunnlagAP,
  VurderRefusjonBeregningsgrunnlagAP,
} from '@navikt/ft-fakta-fordel-beregningsgrunnlag';
import type { AvklartFaktaFeilutbetalingAp } from '@navikt/ft-fakta-tilbakekreving-feilutbetaling';

import type { AvklarAktivitetsPerioderAp } from './fakta/AvklarAktivitetsPerioderAp';
import type { AvklarAnnenforelderHarRettAp } from './fakta/AvklarAnnenforelderHarRettAp';
import type { AvklarDekningsgradAp } from './fakta/AvklarDekningsgradAp';
import type { AvklarVergeAp } from './fakta/AvklarVergeAp';
import type { BekreftAleneomsorgVurderingAp } from './fakta/BekreftAleneomsorgVurderingAp';
import type { BekreftAnnenpartsUttakEøsAp } from './fakta/BekreftAnnenpartsUttakEøsAp';
import type { BekreftOmsorgVurderingAp } from './fakta/BekreftOmsorgVurderingAp';
import type { BekreftSvangerskapspengerAp } from './fakta/BekreftSvangerskapspengerAp';
import type { BekreftUttaksperioderAp } from './fakta/BekreftUttaksperioderAp';
import type { BeregningAp } from './fakta/BeregningAp';
import type { OverstyringFaktaFødselAp } from './fakta/fødsel/OverstyringFaktaFødselAp';
import type { SjekkManglendeFødselAp } from './fakta/fødsel/SjekkManglendeFødselAp';
import type { SjekkTerminbekreftelseAp } from './fakta/fødsel/SjekkTerminbekreftelseAp';
import type { ManuellKontrollAapKombinertAtflAP } from './fakta/ManuellKontrollAapKombinertAtflAP';
import type { ManuellKontrollBesteberegningAP } from './fakta/ManuellKontrollBesteberegningAP';
import type { MerkOpptjeningUtlandAp } from './fakta/MerkOpptjeningUtlandAp';
import type { OverstyringAvklarStartdatoForPeriodenAp } from './fakta/OverstyringAvklarStartdatoForPeriodenAp';
import type { OverstyringDekningsgradAp } from './fakta/OverstyringDekningsgradAp';
import type { OverstyringRettigheterAp } from './fakta/OverstyringRettigheterAp';
import type { VurderArbeidsforholdInntektsmeldingAp } from './fakta/VurderArbeidsforholdInntektsmeldingAp';
import type { VurderArbeidsforholdPermisjonAp } from './fakta/VurderArbeidsforholdPermisjonAp';
import type { VurderDokumentasjonAp } from './fakta/VurderDokumentasjonAp';
import type { VurderForutgaendeMedlemskapAp } from './fakta/VurderForutgaendeMedlemskapAp';
import type { VurderMedlemskapAp } from './fakta/VurderMedlemskapAp';
import type { VurderOmsorgsovertakelseVilkåretAp } from './fakta/VurderOmsorgsovertakelseVilkåretAp';

export type FaktaAksjonspunkt =
  | AvklarVergeAp
  | MerkOpptjeningUtlandAp
  | BeregningAp
  | AvklarAktivitetsPerioderAp
  | BekreftAleneomsorgVurderingAp
  | ManuellKontrollBesteberegningAP
  | VurderOmsorgsovertakelseVilkåretAp
  | VurderMedlemskapAp
  | BekreftSvangerskapspengerAp
  | VurderForutgaendeMedlemskapAp
  | BekreftOmsorgVurderingAp
  | SjekkTerminbekreftelseAp
  | SjekkManglendeFødselAp
  | OverstyringFaktaFødselAp
  | AvklarAnnenforelderHarRettAp
  | BekreftUttaksperioderAp
  | OverstyringAvklarStartdatoForPeriodenAp
  | OverstyrBeregningsaktiviteterAP
  | BeregningFaktaAP
  | BeregningOverstyringAP
  | FordelBeregningsgrunnlagAP
  | VurderRefusjonBeregningsgrunnlagAP
  | VurderArbeidsforholdInntektsmeldingAp
  | VurderDokumentasjonAp
  | VurderArbeidsforholdPermisjonAp
  | OverstyringDekningsgradAp
  | OverstyringRettigheterAp
  | BekreftAnnenpartsUttakEøsAp
  | AvklarDekningsgradAp
  | AvklartFaktaFeilutbetalingAp
  | ManuellKontrollAapKombinertAtflAP;
