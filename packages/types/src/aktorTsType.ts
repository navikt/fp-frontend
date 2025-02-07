import type { FagsakEnkel } from './fagsakEnkelTsType';

type FagsakPerson = Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dodsdato?: string;
  aktørId?: string;
}>;

export type Aktor = Readonly<{
  fagsaker: FagsakEnkel[];
  person: FagsakPerson;
}>;
