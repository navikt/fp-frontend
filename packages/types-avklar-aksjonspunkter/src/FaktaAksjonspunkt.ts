import AvklarVergeAp from './fakta/AvklarVergeAp';
import MerkOpptjeningUtlandAp from './fakta/MerkOpptjeningUtlandAp';
import OverstyringUtenlandssakMarkeringAp from './fakta/OverstyringUtenlandssakMarkeringAp';
import AvklarAktivitetsPerioderAp from './fakta/AvklarAktivitetsPerioderAp';
import AvklarFaktaForForeldreansvarAksjonspunktAp from './fakta/AvklarFaktaForForeldreansvarAksjonspunktAp';
import AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp from './fakta/AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp';
import KontrollerAktivitetskravAp from './fakta/KontrollerAktivitetskravAp';
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
import AvklartFaktaFeilutbetalingAp from './fakta/tilbakekreving/AvklartFaktaFeilutbetalingAp';
import AvklarArbeidsforholdAp from './fakta/AvklarArbeidsforholdAp';
import FaktaUttakAp from './fakta/FaktaUttakAp';
import AvklarAnnenforelderHarRettAp from './fakta/AvklarAnnenforelderHarRettAp';
import VurderingAvVilkarForMorsSyksomVedFodselForForeldrepengerAp from './fakta/VurderingAvVilkarForMorsSyksomVedFodselForForeldrepengerAp';
import BekreftOppholdsrettVurderingAp from './fakta/BekreftOppholdsrettVurderingAp';
import OverstyringAvklarStartdatoForPeriodenAp from './fakta/OverstyringAvklarStartdatoForPeriodenAp';
import KontrollerBesteberegningAP from './fakta/KontrollerBesteberegningAP';
import FordelBeregningsgrunnlagAP from './fakta/FordelBeregningsgrunnlagAP';
import VurderRefusjonBeregningsgrunnlagAP from './fakta/VurderRefusjonBeregningsgrunnlagAP';
import BeregningAktivitetAP from './fakta/BeregningAktivitetAP';
import BeregningFaktaAP, { BeregningOverstyringAP } from './fakta/BeregningFaktaAP';

export type FaktaAksjonspunkt = AvklarVergeAp
  | MerkOpptjeningUtlandAp
  | OverstyringUtenlandssakMarkeringAp
  | AvklarAktivitetsPerioderAp
  | KontrollerAktivitetskravAp
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
  | AvklarArbeidsforholdAp
  | AvklartFaktaFeilutbetalingAp
  | AvklarAnnenforelderHarRettAp
  | FaktaUttakAp
  | VurderingAvVilkarForMorsSyksomVedFodselForForeldrepengerAp
  | OverstyringAvklarStartdatoForPeriodenAp
  | AvklarFaktaForForeldreansvarAksjonspunktAp
  | KontrollerBesteberegningAP
  | FordelBeregningsgrunnlagAP
  | VurderRefusjonBeregningsgrunnlagAP
  | BeregningAktivitetAP
  | BeregningFaktaAP
  | BeregningOverstyringAP
  | AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp;

export default FaktaAksjonspunkt;
