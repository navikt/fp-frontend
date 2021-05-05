import Kodeverk from './kodeverkTsType';
import BeregningsgrunnlagArbeidsforhold from './beregningsgrunnlagArbeidsforholdTsType';

export type TidligereUtbetalinger = Readonly<{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}>;

export type RefusjonTilVurderingAndel = Readonly<{
  aktivitetStatus: Kodeverk;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  }
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}>

type RefusjonTilVurdering = Readonly<{
  andeler: RefusjonTilVurderingAndel[];
}>

export type PerioderMedGraderingEllerRefusjon = Readonly<{
  erRefusjon?: boolean;
  erGradering?: boolean;
  erSøktYtelse?: boolean;
  fom?: string;
  tom?: string;
}>

export type ArbeidsforholdTilFordeling = Readonly<{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdType?: Kodeverk;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: string;
  organisasjonstype?: Kodeverk;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}>

export type FordelBeregningsgrunnlagAndel = Readonly<{
  aktivitetStatus?: Kodeverk;
  andelIArbeid?: number[];
  andelsnr?: number;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  arbeidsforholdType?: Kodeverk;
  belopFraInntektsmeldingPrAar?: number;
  fordelingForrigeBehandlingPrAar?: number;
  fordeltPrAar?: number;
  inntektskategori?: Kodeverk;
  lagtTilAvSaksbehandler?: boolean;
  nyttArbeidsforhold?: boolean;
  refusjonskravFraInntektsmeldingPrAar?: number;
  refusjonskravPrAar?: number;
  kilde?: Kodeverk;
}>

export type FordelBeregningsgrunnlagPeriode = Readonly<{
  fom?: string;
  fordelBeregningsgrunnlagAndeler?: FordelBeregningsgrunnlagAndel[];
  skalRedigereInntekt?: boolean;
  skalPreutfyllesMedBeregningsgrunnlag?: boolean;
  skalKunneEndreRefusjon?: boolean;
  tom?: string;
}>

type FordelBeregningsgrunnlag = Readonly<{
  arbeidsforholdTilFordeling?: ArbeidsforholdTilFordeling[];
  fordelBeregningsgrunnlagPerioder?: FordelBeregningsgrunnlagPeriode[];
}>

export type FaktaOmFordeling = Readonly<{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
}>

export default RefusjonTilVurdering;
