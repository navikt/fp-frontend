export type OppgaveKilde = 'LOKAL' | 'GOSYS';

export type Oppgave = Readonly<{
  journalpostId: string;
  aktørId?: string;
  fødselsnummer?: string;
  ytelseType: string;
  frist: string;
  beskrivelse?: string;
  opprettetDato: string;
  enhetId?: string;
  reservertAv?: string;
  kilde?: OppgaveKilde;
}>;
