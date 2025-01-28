import {
  AvklarBeregningsaktiviteterAP,
  BeregningFaktaAP,
  BeregningOverstyringAP,
  OverstyrBeregningsaktiviteterAP,
} from '@navikt/ft-fakta-beregning';
import {
  FordelBeregningsgrunnlagAP,
  VurderRefusjonBeregningsgrunnlagAP,
} from '@navikt/ft-fakta-fordel-beregningsgrunnlag';

import AvklarAktivitetsPerioderAp from './fakta/AvklarAktivitetsPerioderAp';
import AvklarAnnenforelderHarRettAp from './fakta/AvklarAnnenforelderHarRettAp';
import AvklarDekningsgradAp from './fakta/AvklarDekningsgradAp';
import AvklarFaktaForForeldreansvarAksjonspunktAp from './fakta/AvklarFaktaForForeldreansvarAksjonspunktAp';
import AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp from './fakta/AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp';
import AvklarFortsattMedlemskapAp from './fakta/AvklarFortsattMedlemskapAp';
import AvklarVergeAp from './fakta/AvklarVergeAp';
import BekreftAleneomsorgVurderingAp from './fakta/BekreftAleneomsorgVurderingAp';
import BekreftBosattVurderingAp from './fakta/BekreftBosattVurderingAp';
import BekreftDokumentertDatoAksjonspunktAp from './fakta/BekreftDokumentertDatoAksjonspunktAp';
import BekreftEktefelleAksjonspunktAp from './fakta/BekreftEktefelleAksjonspunktAp';
import BekreftErMedlemVurderingAp from './fakta/BekreftErMedlemVurderingAp';
import BekreftLovligOppholdVurderingAp from './fakta/BekreftLovligOppholdVurderingAp';
import BekreftMannAdoptererAksjonspunktAp from './fakta/BekreftMannAdoptererAksjonspunktAp';
import BekreftOmsorgVurderingAp from './fakta/BekreftOmsorgVurderingAp';
import BekreftOppholdsrettVurderingAp from './fakta/BekreftOppholdsrettVurderingAp';
import BekreftSvangerskapspengerAp from './fakta/BekreftSvangerskapspengerAp';
import BekreftTerminbekreftelseAp from './fakta/BekreftTerminbekreftelseAp';
import BekreftUttaksperioderAp from './fakta/BekreftUttaksperioderAp';
import KontrollerBesteberegningAP from './fakta/KontrollerBesteberegningAP';
import MerkOpptjeningUtlandAp from './fakta/MerkOpptjeningUtlandAp';
import OverstyringAvklarStartdatoForPeriodenAp from './fakta/OverstyringAvklarStartdatoForPeriodenAp';
import OverstyringDekningsgradAp from './fakta/OverstyringDekningsgradAp';
import SjekkManglendeFodselAp from './fakta/SjekkManglendeFodselAp';
import VurderArbeidsforholdInntektsmeldingAp from './fakta/VurderArbeidsforholdInntektsmeldingAp';
import VurderArbeidsforholdPermisjonAp from './fakta/VurderArbeidsforholdPermisjonAp';
import VurderDokumentasjonAp from './fakta/VurderDokumentasjonAp';

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
  | BekreftTerminbekreftelseAp
  | SjekkManglendeFodselAp
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
  | AvklarDekningsgradAp;

export default FaktaAksjonspunkt;
