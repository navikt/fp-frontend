import Person from './personTsType';

type Fagsak = Readonly<{
  saksnummer: number;
  saksnummerString: string;
  system: string;
  fagsakYtelseType: string;
  status: string;
  person: Person;
  barnFødt?: string;
  behandlingStatus?: string;
  opprettet: string;
  endret?: string;
  href?: string;
}>;

export default Fagsak;
