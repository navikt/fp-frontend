import type { SivilstandType } from '@navikt/fp-kodeverk';

import type { Personadresse } from './personadresseTsType';

export type PersonopplysningerBasis = Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>;

export type Personoversikt = Readonly<{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}>;
