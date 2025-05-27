import { Landkode, RelasjonsRolleType } from '@navikt/fp-kodeverk';

export type OmsorgOgRett = {
  søknad: Søknad;
  registerdata: RegisterData | null;
  manuellBehandlingResultat: ManuellBehandlingResultat | null;
  rettighetstype: Rettighetstype | null;
  relasjonsRolleType: RelasjonsRolleType;
};

export type Søknad = {
  søkerHarAleneomsorg: Verdi;
  annenpartIdent: string | null;
  annenpartBostedsland: Landkode | null;
  annenpartRettighet: Rettighet | null;
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
  annenpartRettighet: Rettighet | null;
};

export enum Verdi {
  JA = 'JA',
  NEI = 'NEI',
  IKKE_RELEVANT = 'IKKE_RELEVANT',
}

export enum Rettighetstype {
  ALENEOMSORG = 'ALENEOMSORG',
  BEGGE_RETT = 'BEGGE_RETT',
  BEGGE_RETT_EØS = 'BEGGE_RETT_EØS',
  BARE_MOR_RETT = 'BARE_MOR_RETT',
  BARE_FAR_RETT = 'BARE_FAR_RETT',
  BARE_FAR_RETT_MOR_UFØR = 'BARE_FAR_RETT_MOR_UFØR',
}
