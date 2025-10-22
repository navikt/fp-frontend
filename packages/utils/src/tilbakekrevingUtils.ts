import type {
  BehandlingFpSak,
  BehandlingFpTilbake,
  FagsakBehandlingDtoFpSak,
  FagsakBehandlingDtoFpTilbake,
} from '@navikt/fp-types';

export const erTilbakekrevingBehandling = (
  behandling: FagsakBehandlingDtoFpSak | FagsakBehandlingDtoFpTilbake | BehandlingFpSak | BehandlingFpTilbake,
): behandling is FagsakBehandlingDtoFpTilbake | BehandlingFpTilbake => {
  return behandling.type === 'BT-007' || behandling.type === 'BT-009';
};
