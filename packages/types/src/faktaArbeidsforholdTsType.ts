import Kodeverk from './kodeverkTsType';

type FaktaArbeidsforhold = Readonly<{
  arbeidsgiverReferanse: string;
  arbeidType: Kodeverk;
}>

export default FaktaArbeidsforhold;
