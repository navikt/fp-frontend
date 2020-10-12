type Arbeidsgiver = Readonly<{
  identifikator: string;
  aktørId: string;
  fødselsdato: string;
  navn: string;
  virksomhet: boolean;
}>

export default Arbeidsgiver;
