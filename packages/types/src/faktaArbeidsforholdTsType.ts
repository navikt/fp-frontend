import Kodeverk from './kodeverkTsType';

type FaktaArbeidsforhold = Readonly<{
  arbeidsgiver: {
    identifikator: string;
    aktørId: string;
    fødselsdato: string;
    navn: string;
  };
  arbeidType: Kodeverk;
}>

export default FaktaArbeidsforhold;
