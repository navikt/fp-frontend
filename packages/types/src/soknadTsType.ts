import Kodeverk from './kodeverkTsType';

type Soknad = Readonly<{
  fodselsdatoer?: { [key: number]: string };
  adopsjonFodelsedatoer?: { [key: number]: string };
  termindato?: string;
  antallBarn: number;
  utstedtdato?: string;
  soknadType: Kodeverk;
  tilleggsopplysninger?: string;
  omsorgsovertakelseDato?: string;
}>

export default Soknad;
