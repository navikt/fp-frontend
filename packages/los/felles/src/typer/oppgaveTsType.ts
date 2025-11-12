import type { AndreKriterierType, BehandlingType, FagsakYtelseType, OppgaveBehandlingStatus } from '@navikt/fp-types';

export type ReservasjonStatus = {
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvUid?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    uid: string;
    navn: string;
    begrunnelse: string;
  } | null;
};

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
