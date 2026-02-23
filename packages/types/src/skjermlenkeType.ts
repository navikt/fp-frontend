import type { foreldrepenger_behandlingslager_behandling_skjermlenke_SkjermlenkeType } from './fpsak.gen';
import type { SkjermlenkeTypeFpTilbake } from './tilbakekreving/sakFullDtoFpTilbake';

export type SkjermlenkeType =
  | foreldrepenger_behandlingslager_behandling_skjermlenke_SkjermlenkeType
  | SkjermlenkeTypeFpTilbake;
