import Arbeidsgiver from './arbeidsgiverTsType';
import Kodeverk from './kodeverkTsType';

type FaktaArbeidsforhold = Readonly<{
  arbeidsgiver: Arbeidsgiver;
  arbeidType: Kodeverk;
}>

export default FaktaArbeidsforhold;
