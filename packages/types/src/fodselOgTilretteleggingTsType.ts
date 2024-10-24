export enum SvpTilretteleggingFomKilde {
  ENDRET_AV_SAKSBEHANDLER = 'ENDRET_AV_SAKSBEHANDLER',
  REGISTRERT_AV_SAKSBEHANDLER = 'REGISTRERT_AV_SAKSBEHANDLER',
  TIDLIGERE_VEDTAK = 'TIDLIGERE_VEDTAK',
  SØKNAD = 'SØKNAD',
}

export type Permisjon = Readonly<{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig?: boolean;
  type: string;
}>;

export type ArbeidsforholdTilretteleggingDato = Readonly<{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
  kilde: SvpTilretteleggingFomKilde;
  mottattDato?: string;
}>;

export type OppholdKilde = 'SØKNAD' | 'INNTEKTSMELDING' | 'REGISTRERT_AV_SAKSBEHANDLER';

export type SvpAvklartOppholdPeriode = Readonly<{
  fom: string;
  tom: string;
  oppholdÅrsak: string;
  oppholdKilde: OppholdKilde;
}>;

export type ArbeidsforholdFodselOgTilrettelegging = Readonly<{
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[];
  arbeidsgiverReferanse: string;
  uttakArbeidType: string;
  opplysningerOmRisiko?: string;
  opplysningerOmTilrettelegging?: string;
  internArbeidsforholdReferanse?: string;
  eksternArbeidsforholdReferanse?: string;
  skalBrukes: boolean;
  kanTilrettelegges: boolean;
  begrunnelse?: string;
  velferdspermisjoner: Permisjon[];
  avklarteOppholdPerioder: SvpAvklartOppholdPeriode[];
}>;

type FodselOgTilrettelegging = Readonly<{
  termindato?: string;
  fødselsdato?: string;
  arbeidsforholdListe: ArbeidsforholdFodselOgTilrettelegging[];
  saksbehandlet: boolean;
}>;

export default FodselOgTilrettelegging;
