import { RelasjonsRolleType } from '@navikt/fp-kodeverk';

export type OmsorgOgRett = {
  søknad: Søknad;
  registerdata: RegisterData;
  manuellBehandlingResultat: ManuellBehandlingResultat;
  relasjonsRolleType: RelasjonsRolleType;
};

export type Søknad = {
  søkerHarAleneomsorg: boolean;
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
