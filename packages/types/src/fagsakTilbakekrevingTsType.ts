import BehandlingAppKontekst from './behandlingAppKontekstTsType';
import { BehandlingOppretting } from './fagsakTsType';
import Historikkinnslag from './historikkinnslagTsType';

type FagsakDataFpTilbake = Readonly<{
  saksnummer: string;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  behandlinger: BehandlingAppKontekst[];
  historikkinnslag: Historikkinnslag[];
}>;

export default FagsakDataFpTilbake;
