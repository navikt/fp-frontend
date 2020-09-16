import Kodeverk from './kodeverkTsType';

type Soknad = Readonly<{
  fodselsdatoer: {};
  termindato?: string;
  antallBarn: number;
  utstedtdato?: string;
  soknadType: Kodeverk;
  tilleggsopplysninger?: string;
}>

export default Soknad;
