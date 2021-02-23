import Fagsak from './fagsakTsType';
import { FagsakPerson } from './fagsakPersonerTsType';

type Aktor = Readonly<{
  fagsaker: Fagsak[];
  person: FagsakPerson;
}>;

export default Aktor;
