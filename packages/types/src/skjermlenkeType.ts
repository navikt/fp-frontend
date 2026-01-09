import type { foreldrepenger_behandlingslager_behandling_skjermlenke_SkjermlenkeType } from './apiDtoGenerert';
import type { SkjermlenkeTypeFpTilbake } from './tilbakekreving/sakFullDtoFpTilbake.ts';

export type SkjermlenkeType =
  | foreldrepenger_behandlingslager_behandling_skjermlenke_SkjermlenkeType
  | SkjermlenkeTypeFpTilbake;
