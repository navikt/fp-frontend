import Kodeverk from './kodeverkTsType';

type Fagsak = Readonly<{
  saksnummer: number;
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
