import { Kodeverk } from '@fpsak-frontend/types';

export type Inntektsmelding = Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId: string;
  internArbeidsforholdId: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  motattDato: string;
  innsendingstidspunkt: string;
}>

export type Arbeidsforhold = Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId: string;
  eksternArbeidsforholdId: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
}>

type Inntektspost = Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: Kodeverk;
}>

export type Inntekt = Readonly<{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}>

type ArbeidOgInntektsmelding = Readonly<{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
}>

export default ArbeidOgInntektsmelding;
