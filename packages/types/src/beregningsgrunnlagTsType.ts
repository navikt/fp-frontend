import { Besteberegninggrunnlag } from 'types/src/besteberegningTsTypes';
import Kodeverk from './kodeverkTsType';
import RefusjonTilVurdering, { FaktaOmFordeling } from './beregningsgrunnlagFordelingTsType';
import BeregningsgrunnlagArbeidsforhold from './beregningsgrunnlagArbeidsforholdTsType';
import FaktaOmBeregning from './beregningsgrunnlagFaktaTsType';

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
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
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
  tilkommetNaturalytelse?: number;
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

export type YtelseGrunnlag = Readonly<{
  ytelsetype: string;
  besteberegninggrunnlag?: Besteberegninggrunnlag;
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
  erOverstyrtInntekt?: boolean;
}>

export default Beregningsgrunnlag;
