import type { FagsakEnkel } from './fagsakEnkelTsType';
import type { Person } from './personTsType';

export type Aktor = Readonly<{
  fagsaker: FagsakEnkel[];
  person: Person;
}>;
