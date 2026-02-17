export type Reservasjon = Readonly<{
  reservertAvIdent: string;
  reservertAvNavn: string;
  reservertTilTidspunkt: string;
  oppgaveId: number;
  oppgaveSaksNr: string;
  behandlingType: string;
}>;
