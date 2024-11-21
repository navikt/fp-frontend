export type RelatertTilgrensedYtelse = Readonly<{
  relatertYtelseNavn: string;
  tilgrensendeYtelserListe: {
    periodeTilDato: string;
    periodeFraDato: string;
    statusNavn: string;
    saksNummer?: string;
  }[];
}>;

export type InntektArbeidYtelse = Readonly<{
  relatertTilgrensendeYtelserForSoker: RelatertTilgrensedYtelse[];
  relatertTilgrensendeYtelserForAnnenForelder: RelatertTilgrensedYtelse[];
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder: RelatertTilgrensedYtelse[];
}>;
