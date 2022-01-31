export enum AksjonspunktÅrsak {
  MANGLENDE_INNTEKTSMELDING = 'MANGLENDE_INNTEKTSMELDING',
  INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD = 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD',
}

export type Inntektsmelding = Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId: string;
  internArbeidsforholdId: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}>

export type Arbeidsforhold = Readonly<{
  arbeidsgiverIdent?: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}>

export type Inntektspost = Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>

export type Inntekt = Readonly<{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}>

type ArbeidOgInntektsmelding = Readonly<{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}>

export default ArbeidOgInntektsmelding;
