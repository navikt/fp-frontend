type OppgaveOversikt = Readonly<{
  id: number;
  opprettetDato: string,
  frist: string,
  tildeltEnhetsnr: string;
  journalpostId: string;
  aktoerId: string;
  beskrivelse: string;
  tema: string;
  oppgavetype: string;
  status: string;
  prioritet: string;
  journalpostHarMangler: boolean;
}>

export default OppgaveOversikt;
