import Kodeverk from './kodeverkTsType';
import Personadresse from './personadresseTsType';

export type PersonopplysningerBasis = Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: Kodeverk;
  sivilstand: Kodeverk;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>

export type Personoversikt = Readonly<{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}>

export default Personoversikt;
