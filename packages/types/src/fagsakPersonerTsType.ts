import Kodeverk from './kodeverkTsType';

export type FagsakPerson = Readonly<{
  navn: string;
  personnummer: string;
  kjønn: Kodeverk;
  diskresjonskode?: Kodeverk;
  fødselsdato: string;
  dodsdato?: string;
  aktørId?: string;
}>

export type FagsakHendelse = Readonly<{
  hendelseType: Kodeverk;
  hendelseDato: string;
  antallBarn: number;
  dødfødsel: boolean;
}>

type FagsakPersoner = Readonly<{
  bruker: FagsakPerson;
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
}>

export default FagsakPersoner;
