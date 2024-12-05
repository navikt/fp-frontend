import { OppgaveKilde } from '../kodeverk/oppgaveKilde';

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
