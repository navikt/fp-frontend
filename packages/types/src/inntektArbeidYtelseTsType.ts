import Arbeidsforhold from './arbeidsforholdTsType';

export type RelatertTilgrensedYtelse = Readonly<{
  relatertYtelseType: string;
  tilgrensendeYtelserListe: {
    periodeTilDato: string;
    periodeFraDato: string;
    status: string;
    saksNummer?: string;
  }[];
}>

export type IAYInntektsmelding = Readonly<{
  arbeidsgiverReferanse: string;
  arbeidsgiverStartdato?: string;
}>

type InntektArbeidYtelse = Readonly<{
  relatertTilgrensendeYtelserForSoker?: RelatertTilgrensedYtelse[];
  relatertTilgrensendeYtelserForAnnenForelder?: RelatertTilgrensedYtelse[];
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder?: RelatertTilgrensedYtelse[];
  inntektsmeldinger?: IAYInntektsmelding[];
  arbeidsforhold?: Arbeidsforhold[];
  skalKunneLeggeTilNyeArbeidsforhold: boolean;
}>

export default InntektArbeidYtelse;
