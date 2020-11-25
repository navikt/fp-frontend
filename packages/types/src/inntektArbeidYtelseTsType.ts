import Arbeidsforhold from './arbeidsforholdTsType';

export type RelatertTilgrensedYtelse = Readonly<{
  relatertYtelseType: string;
  tilgrensendeYtelserListe: {
    periodeTilDato: string;
    periodeFraDato: string;
    status: string;
    saksNummer: string;
  }[];
}>

type InntektArbeidYtelse = Readonly<{
  relatertTilgrensendeYtelserForSoker?: RelatertTilgrensedYtelse[];
  relatertTilgrensendeYtelserForAnnenForelder?: RelatertTilgrensedYtelse[];
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder?: RelatertTilgrensedYtelse[];
  inntektsmeldinger?: {
    arbeidsgiverStartdato?: string;
  }[];
  arbeidsforhold?: Arbeidsforhold[];
  skalKunneLeggeTilNyeArbeidsforhold: boolean;
}>

export default InntektArbeidYtelse;
