export type Oppgave = {
  oppgaveId: string;
  oppgavetype: string;
  beskrivelser: Beskrivelse[];
  dokumenter: OppgaveDokument[];
};

export type Beskrivelse = {
  header: string | null;
  kommentarer: string[];
};

export type OppgaveDokument = {
  journalpostId: string;
  dokumentId: string;
  tittel: string | null;
};
