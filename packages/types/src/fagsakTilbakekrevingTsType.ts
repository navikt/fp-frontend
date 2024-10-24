import BehandlingAppKontekst from './behandlingAppKontekstTsType';
import { BehandlingOppretting } from './fagsakTsType';
import Historikkinnslag from './historikkinnslagTsType';
import { HistorikkinnslagV2 } from './historikkinnslagTsTypeV2';

type FagsakDataFpTilbake = Readonly<{
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  behandlinger: BehandlingAppKontekst[];
  historikkinnslag: Historikkinnslag[];
  // TODO: gjør denne required til denne når vi har laget den
  historikkinnslagV2?: HistorikkinnslagV2[];
}>;

export default FagsakDataFpTilbake;
