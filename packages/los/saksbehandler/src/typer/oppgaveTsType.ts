import {
  type AndreKriterierType,
  type BehandlingType,
  type FagsakYtelseType,
  type OppgaveBehandlingStatus,
  type ReservasjonStatusDto,
} from '@navikt/fp-types';

export type Oppgave = {
  id: number;
  reservasjonStatus: ReservasjonStatusDto;
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
