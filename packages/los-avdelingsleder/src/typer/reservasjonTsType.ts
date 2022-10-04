type Reservasjon = Readonly<{
  reservertAvUid: string;
  reservertAvNavn: string;
  reservertTilTidspunkt: string;
  oppgaveId: number;
  oppgaveSaksNr: number;
  behandlingType: string;
}>

export default Reservasjon;
