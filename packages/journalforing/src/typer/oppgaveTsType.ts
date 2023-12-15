import OppgaveKilde from '../kodeverk/oppgaveKilde';

type Oppgave = Readonly<{
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
export default Oppgave;
