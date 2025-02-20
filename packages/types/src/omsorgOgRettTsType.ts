import { SivilstandType } from '@navikt/fp-kodeverk';

import type { Personadresse } from './personadresseTsType.ts';

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
  adresser: Personadresse;
  annenpartAdresser: Personadresse;
  sivilstand: SivilstandType;
  harAnnenpartUføretrygd?: boolean;
  harAnnenpartForeldrepenger?: boolean;
  harAnnenpartEngangsstønad?: boolean;
};

export type ManuellBehandlingResultat = {
  harAleneomsorg?: boolean;
  harAnnenpartRettNorge?: boolean;
  harAnnenpartOppholdEØS?: boolean;
  harAnnenpartRettEØS?: boolean;
  harAnnenpartUføretrygd?: boolean;
};
