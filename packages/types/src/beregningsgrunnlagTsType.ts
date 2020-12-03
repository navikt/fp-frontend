import Kodeverk from './kodeverkTsType';

export type BeregningsgrunnlagArbeidsforhold = Readonly<{
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: Kodeverk;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType?: Kodeverk;

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>

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

type PerioderMedGraderingEllerRefusjon = Readonly<{
  erRefusjon?: boolean;
  erGradering?: boolean;
  fom?: string;
  tom?: string;
}>

type ArbeidsforholdTilFordeling = Readonly<{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsforholdType?: Kodeverk;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: number;
  organisasjonstype?: Kodeverk;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}>

type FordelBeregningsgrunnlagAndel = Readonly<{
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

type FaktaOmFordeling = Readonly<{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
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

export type RefusjonTilVurderingAndel = Readonly<{
  aktivitetStatus: Kodeverk;
  tidligereUtbetalinger?: {
    fom: string;
    tom?: string;
    erTildeltRefusjon: boolean;
  }[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  }
  arbeidsgiverNavn?: string;
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}>

type RefusjonTilVurdering = Readonly<{
  andeler: RefusjonTilVurderingAndel[];
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
