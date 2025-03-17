export type Avklaring = {
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
};

export type ArbeidsforholdOgInntektRadData = {
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato?: string;
  årsak?: string;
  avklaring?: Avklaring;
};
