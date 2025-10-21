import type { BehandlingOppretting } from '../fagsakTsType';
import type { Historikkinnslag } from '../historikkinnslagTsType';
import type { FagsakBehandlingDtoFpTilbake } from './fagsakBehandlingDtoFpTilbake';

export type FagsakDataFpTilbake = Readonly<{
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  behandlinger: FagsakBehandlingDtoFpTilbake[];
  historikkinnslag: Historikkinnslag[];
}>;
