import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

export type DekningsgradResultatAp = {
  dekningsgrad: number,
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_DEKNINGSGRAD>;

export type ArbeidsinntektResultat = {
  andelsnr: number;
  inntekt: number;
}

export type FastsettAvvikATFLResultatAP = {
  inntektPrAndelList: ArbeidsinntektResultat[];
  inntektFrilanser: number;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS>;

export type TidsbegrensetArbeidsforholdInntektResultat = {
  andelsnr: number;
  bruttoFastsattInntekt: number;
}

export type TidsbegrensetArbeidsforholdPeriodeResultat = {
  periodeFom: string;
  periodeTom: string;
  fastsatteTidsbegrensedeAndeler: TidsbegrensetArbeidsforholdInntektResultat[];
}

export type FastsettAvvikATFLTidsbegrensetResultatAP = {
  fastsatteTidsbegrensedePerioder: TidsbegrensetArbeidsforholdPeriodeResultat[];
  frilansInntekt: number;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD>;

export type VurderVarigEndretNyoppstartetResultatAP = {
  erVarigEndretNaering: boolean;
  bruttoBeregningsgrunnlag?: number;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE>;

export type NyIArbeidslivetruttoNæringResultatAP = {
  bruttoBeregningsgrunnlag: number;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET>;

type BeregningsgrunnlagResultatAP = NyIArbeidslivetruttoNæringResultatAP | VurderVarigEndretNyoppstartetResultatAP
  | FastsettAvvikATFLTidsbegrensetResultatAP | FastsettAvvikATFLResultatAP | DekningsgradResultatAp;

export default BeregningsgrunnlagResultatAP;
