import Kodeverk from './kodeverkTsType';

type Fagsak = Readonly<{
  saksnummerString: string;
  sakstype: Kodeverk;
  relasjonsRolleType: Kodeverk;
  status: Kodeverk;
  dekningsgrad: number;
}>

export default Fagsak;
