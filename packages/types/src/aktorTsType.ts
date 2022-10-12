import FagsakEnkel from './fagsakEnkelTsType';

type FagsakPerson = Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dodsdato?: string;
  aktørId?: string;
}>

type Aktor = Readonly<{
  fagsaker: FagsakEnkel[];
  person: FagsakPerson;
}>;

export default Aktor;
