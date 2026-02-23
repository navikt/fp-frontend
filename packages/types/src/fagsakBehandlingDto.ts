import type { FagsakBehandlingDtoFpSak } from './index';
import type { FagsakBehandlingDtoFpTilbake } from './tilbakekreving';

export type FagsakBehandlingDto = FagsakBehandlingDtoFpSak | FagsakBehandlingDtoFpTilbake;
