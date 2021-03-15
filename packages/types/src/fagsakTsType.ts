import Kodeverk from './kodeverkTsType';

type Fagsak = Readonly<{
  saksnummer: string;
  fagsakYtelseType: Kodeverk;
  relasjonsRolleType: Kodeverk;
  status: Kodeverk;
  dekningsgrad: number;
}>

export default Fagsak;
