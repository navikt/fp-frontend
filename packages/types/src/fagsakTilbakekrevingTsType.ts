import { BehandlingAppKontekst } from './behandlingAppKontekstTsType';
import { BehandlingOppretting } from './fagsakTsType';
import { Historikkinnslag } from './historikkinnslagTsType';

export type FagsakDataFpTilbake = Readonly<{
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  behandlinger: BehandlingAppKontekst[];
  historikkinnslag: Historikkinnslag[];
}>;
