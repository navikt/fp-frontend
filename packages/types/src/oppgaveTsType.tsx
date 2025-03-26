export type Oppgave = {
  oppgavetype: string;
  nyesteBeskrivelse?: Beskrivelse;
  eldreBeskrivelser: Beskrivelse[];
  dokumenter: OppgaveDokument[];
};

export type Beskrivelse = {
  header?: string;
  kommentarer: string[];
};

export type OppgaveDokument = {
  journalpostId: string;
  dokumentId: string;
  tittel?: string;
};
