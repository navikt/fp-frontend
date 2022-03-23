export type Avklaring = {
  saksbehandlersVurdering: string;
  begrunnelse: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}

type ArbeidsforholdOgInntektRadData = {
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  internArbeidsforholdId?: string;
  årsak?: string;
  avklaring?: Avklaring;
}

export default ArbeidsforholdOgInntektRadData;
