import type { BehandlingÅrsakTypeFpTilbake } from './behandlingÅrsakTypeFpTilbake';

export type BehandlingÅrsakDtoFpTilbake = {
  behandlingArsakType: BehandlingÅrsakTypeFpTilbake;
  erAutomatiskRevurdering: boolean;
  manueltOpprettet: boolean;
};
