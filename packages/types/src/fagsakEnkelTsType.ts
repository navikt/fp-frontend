export type Person = Readonly<{
  navn: string;
  alder: number;
  erKvinne: boolean;
  fødselsnummer: string;
  personnummer: string;
  dødsdato?: string;
  diskresjonskode?: string;
}>

type FagsakEnkel = Readonly<{
  saksnummer: string;
  fagsakYtelseType: string;
  status: string;
  aktørId: string;
  barnFødt: string;
  opprettet: string;
  endret?: string;
  person: Person;
}>

export default FagsakEnkel;
