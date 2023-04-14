export type RelatertTilgrensedYtelse = Readonly<{
  relatertYtelseType: string;
  tilgrensendeYtelserListe: {
    periodeTilDato: string;
    periodeFraDato: string;
    status: string;
    saksNummer?: string;
  }[];
}>;

export type IAYInntektsmelding = Readonly<{
  arbeidsgiverReferanse: string;
  arbeidsgiverStartdato?: string;
}>;

type InntektArbeidYtelse = Readonly<{
  relatertTilgrensendeYtelserForSoker?: RelatertTilgrensedYtelse[];
  relatertTilgrensendeYtelserForAnnenForelder?: RelatertTilgrensedYtelse[];
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder?: RelatertTilgrensedYtelse[];
}>;

export default InntektArbeidYtelse;
