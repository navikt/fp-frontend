export type RelatertTilgrensedYtelse = Readonly<{
  relatertYtelseNavn: string;
  tilgrensendeYtelserListe: {
    periodeTilDato: string;
    periodeFraDato: string;
    statusNavn: string;
    saksNummer?: string;
  }[];
}>;

export type IAYInntektsmelding = Readonly<{
  arbeidsgiverReferanse: string;
  arbeidsgiverStartdato?: string;
}>;

type InntektArbeidYtelse = Readonly<{
  relatertTilgrensendeYtelserForSoker: RelatertTilgrensedYtelse[];
  relatertTilgrensendeYtelserForAnnenForelder: RelatertTilgrensedYtelse[];
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder: RelatertTilgrensedYtelse[];
}>;

export default InntektArbeidYtelse;
