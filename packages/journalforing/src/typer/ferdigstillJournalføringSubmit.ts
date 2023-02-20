type JournalførSubmitValue = Readonly <{
    journalpostId: string;
    oppgaveId: number;
    enhetId: string;
    saksnummer?: string;
    opprettSak?: OpprettSakSubmitValue;
}>

export type OpprettSakSubmitValue = Readonly <{
    ytelseType: string;
    aktørId: string;
}>

export default JournalførSubmitValue;
