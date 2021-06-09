import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

export type BeregningAktivitetTransformedValues = {
  opptjeningAktivitetType: string;
  fom: string;
  tom?: string;
  oppdragsgiverOrg?: string;
  arbeidsgiverIdentifikator?: string;
  arbeidsforholdRef?: string;
  skalBrukes: boolean;
}

export type BeregningAktiviteterTransformedValues = {
  beregningsaktivitetLagreDtoList: BeregningAktivitetTransformedValues[];
}

export type OverstyrBeregningsaktiviteterAP = BeregningAktiviteterTransformedValues &
  AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER>;

export type AvklarBeregningsaktiviteterAP = BeregningAktiviteterTransformedValues & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_AKTIVITETER>;

export type NyoppstartetFLTransformedValues = {
  erNyoppstartetFL: boolean;
}

export type VurderteArbeidsforholdTransformedValues = {
  andelsnr: number;
  tidsbegrensetArbeidsforhold: boolean;
  opprinneligVerdi?: boolean;
}

export type TidsbegrensetArbeidsforholdTransformedValues = {
  fastsatteArbeidsforhold: VurderteArbeidsforholdTransformedValues[];
}

export type NyIArbeidslivetTransformedValues = {
  erNyIArbeidslivet: boolean;
}

export type FastsettMånedsinntektFLTransformedValues = {
  maanedsinntekt: number;
}

export type VurderLønnsendringTransformedValues = {
  erLønnsendringIBeregningsperioden: boolean;
}

export type FastsettMånedsinntektUtenInntektsmeldingAndelTransformedValues = {
  andelsnr: number;
  fastsattBeløp: number;
  inntektskategori: string;
}

export type FastsettMånedsinntektUtenInntektsmeldingTransformedValues = {
  andelListe: FastsettMånedsinntektUtenInntektsmeldingAndelTransformedValues[];
}

export type VurderATFLISammeOrAndelTransformedValues = {
  andelsnr: number;
  arbeidsinntekt: number;
}

export type VurderATFLISammeOrgTransformedValues = {
  vurderATogFLiSammeOrganisasjonAndelListe: VurderATFLISammeOrAndelTransformedValues[];
}

export type FastsatteVerdierForBesteberegningTransformedValues = {
  fastsattBeløp: number;
  inntektskategori: string;
}

export type BesteberegningFødendeKvinneAndelTransformedValues = {
  andelsnr: number;
  nyAndel: boolean;
  lagtTilAvSaksbehandler: boolean;
  fastsatteVerdier: FastsatteVerdierForBesteberegningTransformedValues;
}

export type DagpengeAndelLagtTilBesteberegningTransformedValues = {
  fastsatteVerdier: FastsatteVerdierForBesteberegningTransformedValues;
}

export type BesteberegningFødendeKvinneTransformedValues = {
  besteberegningAndelListe: BesteberegningFødendeKvinneAndelTransformedValues[];
  nyDagpengeAndel?: DagpengeAndelLagtTilBesteberegningTransformedValues;
}

export type FastsattBrukersAndelTransformedValues = {
  nyAndel: boolean;
  fastsattBeløp: number;
  inntektskategori: string;
  andelsnr?: number;
  lagtTilAvSaksbehandler?: boolean;
}

export type FastsettBgKunYtelseTransformedValues = {
  andeler: FastsattBrukersAndelTransformedValues[];
  skalBrukeBesteberegning: boolean;
}

export type VurderEtterlønnSluttpakkeTransformedValues = {
  erEtterlønnSluttpakke: boolean;
}

export type FastsettEtterlønnSluttpakkeTransformedValues = {
  fastsattPrMnd: number;
}

export type ArbeidstakerandelUtenIMMottarYtelseTransformedValues = {
  andelsnr: number;
  mottarYtelse: boolean;
}

export type MottarYtelseTransformedValues = {
  frilansMottarYtelse: boolean;
  arbeidstakerUtenIMMottarYtelse: ArbeidstakerandelUtenIMMottarYtelseTransformedValues[];
}

export type VurderMilitærTransformedValues = {
  harMilitaer: boolean;
}

export type RefusjonskravPrArbeidsgiverVurderingTransformedValues = {
  arbeidsgiverId: string;
  skalUtvideGyldighet: boolean;
}

export type FaktaBeregningTransformedValues = {
  faktaOmBeregningTilfeller?: string[];
  vurderNyoppstartetFL?: NyoppstartetFLTransformedValues;
  vurderTidsbegrensetArbeidsforhold?: TidsbegrensetArbeidsforholdTransformedValues;
  vurderNyIArbeidslivet?: NyIArbeidslivetTransformedValues;
  fastsettMaanedsinntektFL?: FastsettMånedsinntektFLTransformedValues;
  vurdertLonnsendring?: VurderLønnsendringTransformedValues;
  fastsattUtenInntektsmelding?: FastsettMånedsinntektUtenInntektsmeldingTransformedValues;
  vurderATogFLiSammeOrganisasjon?: VurderATFLISammeOrgTransformedValues;
  besteberegningAndeler?: BesteberegningFødendeKvinneTransformedValues;
  kunYtelseFordeling?: FastsettBgKunYtelseTransformedValues;
  vurderEtterlønnSluttpakke?: VurderEtterlønnSluttpakkeTransformedValues;
  fastsettEtterlønnSluttpakke?: FastsettEtterlønnSluttpakkeTransformedValues;
  mottarYtelse?: MottarYtelseTransformedValues;
  vurderMilitaer?: VurderMilitærTransformedValues;
  refusjonskravGyldighet?: RefusjonskravPrArbeidsgiverVurderingTransformedValues[];
}

export type FastsatteVerdierTransformedValues = {
  refusjon?: number;
  refusjonPrÅr?: number;
  fastsattBeløp?: number;
  fastsattÅrsbeløp?: number;
  fastsattÅrsbeløpInklNaturalytelse?: number;
  inntektskategori?: string;
  skalHaBesteberegning?: boolean;
}

export type FastsettBeregningsgrunnlagAndelTransformedValues = {
  andelsnr?: number;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  nyAndel: boolean;
  aktivitetStatus?: string;
  arbeidsforholdType?: string;
  lagtTilAvSaksbehandler?: boolean;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  forrigeInntektskategori?: string;
  forrigeRefusjonPrÅr?: number;
  forrigeArbeidsinntektPrÅr?: number;
  fastsatteVerdier: FastsatteVerdierTransformedValues;
}

export type BeregningFaktaTransformedValues = {
  fakta: FaktaBeregningTransformedValues;
  overstyrteAndeler?: FastsettBeregningsgrunnlagAndelTransformedValues[];
}

export type BeregningFaktaAP = BeregningFaktaTransformedValues
  & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN>;

export type BeregningOverstyringAP = BeregningFaktaTransformedValues
  & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG>;

export type BeregningFaktaOgOverstyringAP = BeregningFaktaAP | BeregningOverstyringAP;

export default BeregningFaktaAP;
