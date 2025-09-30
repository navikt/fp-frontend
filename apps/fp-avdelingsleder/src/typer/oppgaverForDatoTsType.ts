import type { BehandlingType } from '@navikt/fp-types';

export type OppgaveForDato = Readonly<{
  fagsakYtelseType: string;
  behandlingType: BehandlingType;
  opprettetDato: string;
  antall: number;
}>;
