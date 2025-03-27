export type Oppgave = {
  oppgavetype: string;
  nyesteBeskrivelse: Beskrivelse | null;
  eldreBeskrivelser: Beskrivelse[];
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
