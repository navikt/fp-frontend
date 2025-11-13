import type { ReservasjonStatus } from '@navikt/fp-los-felles';
import type { AndreKriterierType, BehandlingType, FagsakYtelseType, OppgaveBehandlingStatus } from '@navikt/fp-types';

export type Oppgave = {
  id: number;
  reservasjonStatus: ReservasjonStatus;
  saksnummer: string;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: BehandlingType;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: FagsakYtelseType;
  erTilSaksbehandling: boolean;
  behandlingId: string;
  andreKriterier: AndreKriterierType[];
};

export type OppgaveMedStatus = Oppgave & {
  oppgaveBehandlingStatus: OppgaveBehandlingStatus;
};
