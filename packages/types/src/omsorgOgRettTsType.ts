import { RelasjonsRolleType } from '@navikt/fp-kodeverk';

export type OmsorgOgRett = {
  søknad: Søknad;
  registerdata: RegisterData;
  manuellBehandlingResultat?: ManuellBehandlingResultat;
  relasjonsRolleType: RelasjonsRolleType;
};

export type Søknad = {
  søkerHarAleneomsorg: Verdi;
  annenpartIdent: string;
  annenpartBostedsland: string;
  annenpartRettighet: Rettighet;
};

export type Rettighet = {
  harRettNorge: Verdi;
  harOppholdEØS: Verdi;
  harRettEØS: Verdi;
  harUføretrygd: Verdi;
};

export type RegisterData = {
  harAnnenpartUføretrygd: Verdi;
  harAnnenpartForeldrepenger: Verdi;
  harAnnenpartEngangsstønad: Verdi;
};

export type ManuellBehandlingResultat = {
  søkerHarAleneomsorg: Verdi;
  annenpartRettighet: Rettighet;
};

export enum Verdi {
  JA = 'JA',
  NEI = 'NEI',
  IKKE_RELEVANT = 'IKKE_RELEVANT',
}
