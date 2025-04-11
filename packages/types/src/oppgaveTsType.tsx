import type { OppgaveId } from './oppgaveIdTsType.tsx';

export type Oppgave = {
  oppgaveId: OppgaveId;
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
