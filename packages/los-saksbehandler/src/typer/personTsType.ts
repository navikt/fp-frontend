type Person = Readonly<{
  navn: string;
  alder: number;
  personnummer: string;
  erKvinne: boolean;
  diskresjonskode?: string;
  dødsdato?: string;
}>

export default Person;
