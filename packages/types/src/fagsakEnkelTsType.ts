export type Person = Readonly<{
  navn: string;
  alder: number;
  erKvinne: boolean;
  fødselsnummer: string;
}>

type FagsakEnkel = Readonly<{
  saksnummer: string;
  fagsakYtelseType: string;
  status: string;
  aktørId: string;
  barnFødt: string;
  person: Person;
}>

export default FagsakEnkel;
