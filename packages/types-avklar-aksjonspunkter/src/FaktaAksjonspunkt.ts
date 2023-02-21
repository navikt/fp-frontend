import { FordelBeregningsgrunnlagAP, VurderRefusjonBeregningsgrunnlagAP } from '@navikt/ft-fakta-fordel-beregningsgrunnlag';
import {
  BeregningFaktaAP, BeregningOverstyringAP, AvklarBeregningsaktiviteterAP, OverstyrBeregningsaktiviteterAP,
} from '@navikt/ft-fakta-beregning';
import AvklarVergeAp from './fakta/AvklarVergeAp';
import MerkOpptjeningUtlandAp from './fakta/MerkOpptjeningUtlandAp';
import OverstyringUtenlandssakMarkeringAp from './fakta/OverstyringUtenlandssakMarkeringAp';
import AvklarAktivitetsPerioderAp from './fakta/AvklarAktivitetsPerioderAp';
import AvklarFaktaForForeldreansvarAksjonspunktAp from './fakta/AvklarFaktaForForeldreansvarAksjonspunktAp';
import AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp from './fakta/AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp';
import BekreftMannAdoptererAksjonspunktAp from './fakta/BekreftMannAdoptererAksjonspunktAp';
import BekreftEktefelleAksjonspunktAp from './fakta/BekreftEktefelleAksjonspunktAp';
import BekreftDokumentertDatoAksjonspunktAp from './fakta/BekreftDokumentertDatoAksjonspunktAp';
import BekreftSvangerskapspengerAp from './fakta/BekreftSvangerskapspengerAp';
import BekreftAleneomsorgVurderingAp from './fakta/BekreftAleneomsorgVurderingAp';
import BekreftOmsorgVurderingAp from './fakta/BekreftOmsorgVurderingAp';
import BekreftBosattVurderingAp from './fakta/BekreftBosattVurderingAp';
import BekreftErMedlemVurderingAp from './fakta/BekreftErMedlemVurderingAp';
import BekreftLovligOppholdVurderingAp from './fakta/BekreftLovligOppholdVurderingAp';
import AvklarFortsattMedlemskapAp from './fakta/AvklarFortsattMedlemskapAp';
import BekreftTerminbekreftelseAp from './fakta/BekreftTerminbekreftelseAp';
import SjekkManglendeFodselAp from './fakta/SjekkManglendeFodselAp';
import BekreftUttaksperioderAp from './fakta/BekreftUttaksperioderAp';
import AvklarAnnenforelderHarRettAp from './fakta/AvklarAnnenforelderHarRettAp';
import VurderingAvVilkarForMorsSyksomVedFodselForForeldrepengerAp from './fakta/VurderingAvVilkarForMorsSyksomVedFodselForForeldrepengerAp';
import BekreftOppholdsrettVurderingAp from './fakta/BekreftOppholdsrettVurderingAp';
import OverstyringAvklarStartdatoForPeriodenAp from './fakta/OverstyringAvklarStartdatoForPeriodenAp';
import KontrollerBesteberegningAP from './fakta/KontrollerBesteberegningAP';
import VurderDokumentasjonAp from './fakta/VurderDokumentasjonAp';
import VurderArbeidsforholdInntektsmeldingAp from './fakta/VurderArbeidsforholdInntektsmeldingAp';
import VurderArbeidsforholdPermisjonAp from './fakta/VurderArbeidsforholdPermisjonAp';

export type FaktaAksjonspunkt = AvklarVergeAp
  | MerkOpptjeningUtlandAp
  | OverstyringUtenlandssakMarkeringAp
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
  | VurderingAvVilkarForMorsSyksomVedFodselForForeldrepengerAp
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
  | VurderArbeidsforholdPermisjonAp;

export default FaktaAksjonspunkt;
