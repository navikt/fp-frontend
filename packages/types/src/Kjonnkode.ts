import type { foreldrepenger_behandlingslager_aktør_NavBrukerKjønn } from './fpsak.gen';

export const KjønnkodeEnum = {
  KVINNE: 'K',
  MANN: 'M',
  UDEFINERT: '-',
} satisfies Record<string, Kjønnkode>;

export type Kjønnkode = foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
