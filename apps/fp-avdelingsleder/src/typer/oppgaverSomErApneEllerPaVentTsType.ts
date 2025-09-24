import type { BehandlingType } from '@navikt/fp-kodeverk';

export type OppgaverSomErApneEllerPaVent = Readonly<{
  antall: number;
  behandlingType: BehandlingType;
  behandlingVenteStatus: string;
  førsteUttakMåned?: string;
}>;
