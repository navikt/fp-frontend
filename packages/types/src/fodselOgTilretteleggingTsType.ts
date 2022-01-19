export type Permisjon = Readonly<{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig: boolean;
  type: string;
}>

export type ArbeidsforholdTilretteleggingDato = Readonly<{
  fom: string;
  type: string;
  stillingsprosent?: number;
  overstyrtUtbetalingsgrad?: number;
}>

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
}>

type FodselOgTilrettelegging = Readonly<{
  termindato?: string;
  fødselsdato?: string;
  arbeidsforholdListe: ArbeidsforholdFodselOgTilrettelegging[];
  saksbehandlet: boolean;
}>

export default FodselOgTilrettelegging;
