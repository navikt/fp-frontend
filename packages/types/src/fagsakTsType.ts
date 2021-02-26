import Kodeverk from './kodeverkTsType';

type Fagsak = Readonly<{
  saksnummerString: string;
  sakstype: Kodeverk;
  relasjonsRolleType: Kodeverk;
  status: Kodeverk;
  barnFodt: string;
  opprettet: string;
  endret: string;
  kanRevurderingOpprettes: boolean;
  skalBehandlesAvInfotrygd: boolean;
  dekningsgrad: number;
}>

export default Fagsak;
