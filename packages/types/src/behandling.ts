import type {  BehandlingFpSak  } from './index';
import type { BehandlingFpTilbake } from './tilbakekreving/behandlingFpTilbake';

export type Behandling = BehandlingFpSak | BehandlingFpTilbake;
