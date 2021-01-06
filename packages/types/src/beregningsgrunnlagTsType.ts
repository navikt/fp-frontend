import Kodeverk from './kodeverkTsType';
import RefusjonTilVurdering, {FaktaOmFordeling} from './beregningsgrunnlagFordelingTsType';
import BeregningsgrunnlagArbeidsforhold from './beregningsgrunnlagArbeidsforholdTsType';

type FaktaOmBeregningAndel = Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Kodeverk;
  aktivitetStatus?: Kodeverk;
}>

export type AndelForFaktaOmBeregning = Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Kodeverk;
  aktivitetStatus?: Kodeverk;
  belopReadOnly?: number;
  fastsattBelop?: number;
  visningsnavn: string;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}>

export type RefusjonskravSomKommerForSentListe = Readonly<{
  arbeidsgiverId: string;
  arbeidsgiverVisningsnavn: string;
  erRefusjonskravGyldig?: boolean;
}>

type VurderMilitaer = Readonly<{
  harMilitaer?: boolean;
}>

type VurderBesteberegning = Readonly<{
  skalHaBesteberegning?: boolean;
}>

export type BeregningAktivitet = Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: Kodeverk;
  aktørIdString?: string;
}>

export type AvklarBeregningAktiviteter = Readonly<{
  tom: string;
  aktiviteter:BeregningAktivitet[];
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

interface ATFLSammeOrgAndel extends FaktaOmBeregningAndel {
  inntektPrMnd: number;
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

type Næring = Readonly <{
  orgnr: string;
  virksomhetType: Kodeverk;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>

type PgiVerdier = Readonly <{
  beløp: number;
  årstall: number,
}>

export type BeregningsgrunnlagAndel = Readonly <{
  aktivitetStatus?: Kodeverk;
  arbeidsforholdType?: Kodeverk;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagFom?: string;
  beregningsgrunnlagTom?: string;
  bruttoPrAar?: number;
  arbeidsforholdId?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgi1?: number;
  pgi2?: number;
  pgi3?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[],
  aarsbeloepFraTilstoetendeYtelse?: number;
  bortfaltNaturalytelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  andelsnr?: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>;

export type RelevanteStatuserProp = Readonly<{
  isArbeidstaker: boolean;
  isFrilanser: boolean;
  isSelvstendigNaeringsdrivende: boolean;
  harAndreTilstotendeYtelser: boolean;
  harDagpengerEllerAAP: boolean;
  isAAP: boolean;
  isDagpenger: boolean;
  skalViseBeregningsgrunnlag: boolean;
  isKombinasjonsstatus: boolean;
  isMilitaer: boolean;
}>;

type YtelseGrunnlag = Readonly<{
  ytelsetype: string;
}>;

export type SammenligningsgrunlagProp = Readonly<{
  sammenligningsgrunnlagType: Kodeverk;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar?: number;
  sammenligningsgrunnlagFom?: string;
  sammenligningsgrunnlagTom?: string;
}>

export type BeregningsgrunnlagPeriodeProp = Readonly<{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom?: string;
  beregningsgrunnlagPeriodeTom?: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: Kodeverk[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}>

type Beregningsgrunnlag = Readonly<{
  aktivitetStatus?: Kodeverk[];
  beregningsgrunnlagPeriode?: BeregningsgrunnlagPeriodeProp[];
  dekningsgrad?: number;
  grunnbeløp?: number;
  sammenligningsgrunnlag?: SammenligningsgrunlagProp;
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
  skjaeringstidspunktBeregning?: string;
  faktaOmBeregning?: FaktaOmBeregning;
  faktaOmFordeling?: FaktaOmFordeling;
  andelerMedGraderingUtenBG?: BeregningsgrunnlagAndel[];
  ytelsesspesifiktGrunnlag?: YtelseGrunnlag;
  refusjonTilVurdering?: RefusjonTilVurdering;
}>

export default Beregningsgrunnlag;
