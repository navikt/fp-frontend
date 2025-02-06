import type { BehandlingAppKontekst } from './behandlingAppKontekstTsType';
import type { BehandlingOppretting } from './fagsakTsType';
import type { Historikkinnslag } from './historikkinnslagTsType';

export type FagsakDataFpTilbake = Readonly<{
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  behandlinger: BehandlingAppKontekst[];
  historikkinnslag: Historikkinnslag[];
}>;
