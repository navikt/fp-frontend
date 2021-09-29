import Kodeverk from './kodeverkTsType';
import BeregningsgrunnlagArbeidsforhold from './beregningsgrunnlagArbeidsforholdTsType';

export type FaktaOmBeregningAndel = Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Kodeverk;
  aktivitetStatus?: Kodeverk;
}>

export type AndelForFaktaOmBeregning = Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  refusjonskrav?: number;
  inntektskategori?: Kodeverk;
  aktivitetStatus?: Kodeverk;
  belopReadOnly?: number;
  fastsattBelop?: number;
  visningsnavn?: string;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}>

export type RefusjonskravSomKommerForSentListe = Readonly<{
  arbeidsgiverIdent: string;
  erRefusjonskravGyldig?: boolean;
}>

type VurderMilitaer = Readonly<{
  harMilitaer?: boolean;
}>

export type VurderBesteberegning = Readonly<{
  skalHaBesteberegning?: boolean;
}>

export type BeregningAktivitet = Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: Kodeverk;
  aktørIdString?: string;
  skalBrukes?: boolean;
}>

export type AvklarBeregningAktiviteter = Readonly<{
  tom: string;
  aktiviteter?: BeregningAktivitet[];
}>

export type AvklarBeregningAktiviteterMap = Readonly<{
  aktiviteterTomDatoMapping?: AvklarBeregningAktiviteter[];
}>

interface KunYtelseAndel extends FaktaOmBeregningAndel {
  fastsattBelopPrMnd: number;
}

export interface KortvarigAndel extends AndelForFaktaOmBeregning {
  erTidsbegrensetArbeidsforhold?: boolean;
}

export interface ArbeidstakerUtenIMAndel extends AndelForFaktaOmBeregning {
  mottarYtelse?: boolean;
  inntektPrMnd?: number;
}

export type KunYtelse = Readonly<{
  andeler?: KunYtelseAndel[];
  fodendeKvinneMedDP: boolean;
  erBesteberegning?: boolean;
}>

export type VurderMottarYtelse = Readonly<{
  erFrilans?: boolean;
  frilansMottarYtelse?: boolean;
  frilansInntektPrMnd?: number;
  arbeidstakerAndelerUtenIM?: ArbeidstakerUtenIMAndel[];
}>

export interface ATFLSammeOrgAndel extends FaktaOmBeregningAndel {
  inntektPrMnd?: number;
}

export type FaktaOmBeregning = Readonly<{
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  kunYtelse?: KunYtelse;
  faktaOmBeregningTilfeller?: Kodeverk[];
  vurderMottarYtelse?: VurderMottarYtelse;
  arbeidstakerOgFrilanserISammeOrganisasjonListe?: ATFLSammeOrgAndel[];
}>

export default FaktaOmBeregning;
