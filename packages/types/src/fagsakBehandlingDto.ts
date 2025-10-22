import type { FagsakBehandlingDtoFpSak } from './fagsakBehandlingDtoFpSak';
import type { FagsakBehandlingDtoFpTilbake } from './tilbakekreving/fagsakBehandlingDtoFpTilbake';

export type FagsakBehandlingDto = FagsakBehandlingDtoFpSak | FagsakBehandlingDtoFpTilbake;
