import Kodeverk from './kodeverkTsType';
import Personadresse from './personadresseTsType';

export type PersonopplysningerBasis = Readonly<{
  fnr: string;
  navn: string;
  aktoerId: string;
  diskresjonskode: Kodeverk;
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
