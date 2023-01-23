import OppgavePrioritet from "../kodeverk/oppgavePrioritet";

type OppgaveOversikt = Readonly<{
    id: number;
    opprettetDato: string,
    frist: string,
    journalpostId: string;
    aktørId?: string;
    fødselsnummer?: string;
    ytelseType: string;
    beskrivelse?: string;
    prioritet?: OppgavePrioritet;
    journalpostHarMangler: boolean;
  }>
  
  export default OppgaveOversikt;
  