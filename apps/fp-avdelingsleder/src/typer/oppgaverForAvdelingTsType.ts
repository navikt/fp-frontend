import type { BehandlingType } from '@navikt/fp-kodeverk';

export type OppgaverForAvdeling = Readonly<{
  fagsakYtelseType: string;
  behandlingType: BehandlingType;
  tilBehandling: boolean;
  antall: number;
}>;
