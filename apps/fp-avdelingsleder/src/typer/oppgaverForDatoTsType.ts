import type { BehandlingType } from '@navikt/fp-kodeverk';

export type OppgaveForDato = Readonly<{
  fagsakYtelseType: string;
  behandlingType: BehandlingType;
  opprettetDato: string;
  antall: number;
}>;
