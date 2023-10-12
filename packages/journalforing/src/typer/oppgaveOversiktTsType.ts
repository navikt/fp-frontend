import OppgaveKilde from '../kodeverk/oppgaveKilde';

type OppgaveOversikt = Readonly<{
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
export default OppgaveOversikt;
