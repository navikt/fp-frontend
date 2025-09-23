import type {
  AvklarBeregningsaktiviteterAP,
  BeregningFaktaAP,
  BeregningOverstyringAP,
  OverstyrBeregningsaktiviteterAP,
} from '@navikt/ft-fakta-beregning';
import type {
  FordelBeregningsgrunnlagAP,
  VurderRefusjonBeregningsgrunnlagAP,
} from '@navikt/ft-fakta-fordel-beregningsgrunnlag';

import type { AvklarAktivitetsPerioderAp } from './fakta/AvklarAktivitetsPerioderAp';
import type { AvklarAnnenforelderHarRettAp } from './fakta/AvklarAnnenforelderHarRettAp';
import type { AvklarDekningsgradAp } from './fakta/AvklarDekningsgradAp';
import type { AvklarFaktaForForeldreansvarAksjonspunktAp } from './fakta/AvklarFaktaForForeldreansvarAksjonspunktAp';
import type { AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp } from './fakta/AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp';
import type { AvklarFortsattMedlemskapAp } from './fakta/AvklarFortsattMedlemskapAp';
import type { AvklarVergeAp } from './fakta/AvklarVergeAp';
import type { BekreftAleneomsorgVurderingAp } from './fakta/BekreftAleneomsorgVurderingAp';
import type { BekreftBosattVurderingAp } from './fakta/BekreftBosattVurderingAp';
import type { BekreftDokumentertDatoAksjonspunktAp } from './fakta/BekreftDokumentertDatoAksjonspunktAp';
import type { BekreftEktefelleAksjonspunktAp } from './fakta/BekreftEktefelleAksjonspunktAp';
import type { BekreftErMedlemVurderingAp } from './fakta/BekreftErMedlemVurderingAp';
import type { BekreftLovligOppholdVurderingAp } from './fakta/BekreftLovligOppholdVurderingAp';
import type { BekreftMannAdoptererAksjonspunktAp } from './fakta/BekreftMannAdoptererAksjonspunktAp';
import type { BekreftOmsorgVurderingAp } from './fakta/BekreftOmsorgVurderingAp';
import type { BekreftOppholdsrettVurderingAp } from './fakta/BekreftOppholdsrettVurderingAp';
import type { BekreftSvangerskapspengerAp } from './fakta/BekreftSvangerskapspengerAp';
import type { BekreftUttaksperioderAp } from './fakta/BekreftUttaksperioderAp';
import type { OverstyringFaktaFødselAp } from './fakta/fødsel/OverstyringFaktaFødselAp';
import type { SjekkManglendeFødselAp } from './fakta/fødsel/SjekkManglendeFødselAp';
import type { SjekkTerminbekreftelseAp } from './fakta/fødsel/SjekkTerminbekreftelseAp';
import type { KontrollerBesteberegningAP } from './fakta/KontrollerBesteberegningAP';
import type { MerkOpptjeningUtlandAp } from './fakta/MerkOpptjeningUtlandAp';
import type { OverstyringAvklarStartdatoForPeriodenAp } from './fakta/OverstyringAvklarStartdatoForPeriodenAp';
import type { OverstyringDekningsgradAp } from './fakta/OverstyringDekningsgradAp';
import type { OverstyringRettigheterAp } from './fakta/OverstyringRettigheterAp';
import type { VurderArbeidsforholdInntektsmeldingAp } from './fakta/VurderArbeidsforholdInntektsmeldingAp';
import type { VurderArbeidsforholdPermisjonAp } from './fakta/VurderArbeidsforholdPermisjonAp';
import type { VurderDokumentasjonAp } from './fakta/VurderDokumentasjonAp';

export type FaktaAksjonspunkt =
  | AvklarVergeAp
  | MerkOpptjeningUtlandAp
  | AvklarAktivitetsPerioderAp
  | BekreftEktefelleAksjonspunktAp
  | BekreftDokumentertDatoAksjonspunktAp
  | BekreftMannAdoptererAksjonspunktAp
  | BekreftAleneomsorgVurderingAp
  | BekreftSvangerskapspengerAp
  | BekreftOmsorgVurderingAp
  | BekreftBosattVurderingAp
  | BekreftErMedlemVurderingAp
  | BekreftOppholdsrettVurderingAp
  | BekreftLovligOppholdVurderingAp
  | AvklarFortsattMedlemskapAp
  | SjekkTerminbekreftelseAp
  | SjekkManglendeFødselAp
  | OverstyringFaktaFødselAp
  | AvklarAnnenforelderHarRettAp
  | BekreftUttaksperioderAp
  | OverstyringAvklarStartdatoForPeriodenAp
  | AvklarFaktaForForeldreansvarAksjonspunktAp
  | KontrollerBesteberegningAP
  | AvklarBeregningsaktiviteterAP
  | OverstyrBeregningsaktiviteterAP
  | BeregningFaktaAP
  | BeregningOverstyringAP
  | FordelBeregningsgrunnlagAP
  | VurderRefusjonBeregningsgrunnlagAP
  | AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp
  | VurderArbeidsforholdInntektsmeldingAp
  | VurderDokumentasjonAp
  | VurderArbeidsforholdPermisjonAp
  | OverstyringDekningsgradAp
  | OverstyringRettigheterAp
  | AvklarDekningsgradAp;
