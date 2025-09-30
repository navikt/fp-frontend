import type { BehandlingType } from '@navikt/fp-types';

export type OppgaverForAvdeling = Readonly<{
  fagsakYtelseType: string;
  behandlingType: BehandlingType;
  tilBehandling: boolean;
  antall: number;
}>;
