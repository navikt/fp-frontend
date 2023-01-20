import Sak from "./sakTsType";

type OppgaveDetaljert = Readonly<{
  id: number;
  opprettetDato: string,
  frist: string,
  tildeltEnhetsnr: string;
  journalpostId: string;
  brukerIdent: string;
  brukerNavn: string;
  avsenderIdent: string;
  avsenderNavn: string;
  relaterteSaker: Sak[];
  dokumentRessurs: string;
  beskrivelse: string;
  tema: string;
  oppgavetype: string;
  status: string;
  prioritet: string;
}>

export default OppgaveDetaljert;
