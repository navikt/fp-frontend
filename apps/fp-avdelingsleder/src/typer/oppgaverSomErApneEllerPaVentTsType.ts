import type { BehandlingType } from '@navikt/fp-types';

export type OppgaverSomErApneEllerPaVent = Readonly<{
  antall: number;
  behandlingType: BehandlingType;
  behandlingVenteStatus: string;
  førsteUttakMåned?: string;
}>;
