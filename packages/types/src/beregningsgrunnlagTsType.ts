import Kodeverk from './kodeverkTsType';

type BeregningsgrunnlagArbeidsforhold = Readonly<{
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
}>

type FaktaOmBeregningAndel = Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Kodeverk;
  aktivitetStatus?: Kodeverk;
}>

type AndelForFaktaOmBeregning = Readonly<{
  arbeidsforhold: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Kodeverk;
  aktivitetStatus?: Kodeverk;
  belopReadOnly?: number;
  fastsattBelop?: number;
  visningsnavn: string;
  skalKunneEndreAktivitet: boolean;
  lagtTilAvSaksbehandler: boolean;
}>

type RefusjonskravSomKommerForSentListe = Readonly<{
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

type AvklarAktiviteter = Readonly<{
  aktiviteterTomDatoMapping?: {
    tom: string;
    aktiviteter: {
      arbeidsgiverNavn?: string;
      arbeidsgiverId?: string;
      eksternArbeidsforholdId?: string;
      fom: string;
      tom?: string;
      arbeidsforholdId?: string;
      arbeidsforholdType: Kodeverk;
      aktørIdString?: string;
    }[];
  }[];
}>

type FaktaOmBeregning = Readonly<{
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarAktiviteter;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
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

type FordelBeregningsgrunnlagPeriode = Readonly<{
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
}>

export default Beregningsgrunnlag;
