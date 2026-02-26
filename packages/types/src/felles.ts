/**
 * Denne fila inneholder typer som ofte brukes som union mellom fpsak og fptilbake
 */

import type { foreldrepenger_behandlingslager_behandling_skjermlenke_SkjermlenkeType } from './fpsak.gen';
import type { BehandlingFpSak, FagsakBehandlingDtoFpSak } from './index';
import type { BehandlingFpTilbake, FagsakBehandlingDtoFpTilbake, SkjermlenkeTypeFpTilbake } from './tilbakekreving';

export type SkjermlenkeType =
  | foreldrepenger_behandlingslager_behandling_skjermlenke_SkjermlenkeType
  | SkjermlenkeTypeFpTilbake;

export type FagsakBehandlingDto = FagsakBehandlingDtoFpSak | FagsakBehandlingDtoFpTilbake;

export type Behandling = BehandlingFpSak | BehandlingFpTilbake;
