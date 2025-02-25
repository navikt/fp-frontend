export type OmsorgOgRett = {
  søknad: Søknad;
  registerdata: RegisterData;
  manuellBehandlingResultat: ManuellBehandlingResultat;
};

export type Søknad = {
  søkerHarAleneomsorg: boolean;
  annenpartNavn: string;
  annenpartIdent: string;
  annenpartBostedsland: string;
  annenpartRettighet: Rettighet;
};

export type Rettighet = {
  harRettNorge: boolean;
  harOppholdEØS?: boolean;
  harRettEØS?: boolean;
  harUføretrygd?: boolean;
};

export type RegisterData = {
  harAnnenpartUføretrygd?: boolean;
  harAnnenpartForeldrepenger?: boolean;
  harAnnenpartEngangsstønad?: boolean;
};

export type ManuellBehandlingResultat = {
  søkerHarAleneomsorg?: boolean;
  annenpartRettighet: Rettighet;
};
