import type { Dokument } from './dokumentTsType.ts';

export type Oppgave = {
  oppgavetype: string;
  nyesteBeskrivelse?: Beskrivelse;
  eldreBeskrivelser: Beskrivelse[];
  hovedDokument?: Dokument;
  andreDokumenter: Dokument[];
};

export type Beskrivelse = {
  header?: string;
  kommentar: string;
};
