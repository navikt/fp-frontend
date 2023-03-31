export type DokumentTittelSubmitValue = Readonly <{
    dokumentId: string;
    tittel: string;
}>

export type OpprettSakSubmitValue = Readonly <{
    ytelseType: string;
    aktørId: string;
}>

export type JournalførSakSubmitValue = Readonly <{
    saksnummer?: string;
    opprettSak?: OpprettSakSubmitValue;
}>

export type JournalførSubmitValue = JournalførSakSubmitValue & Readonly <{
    journalpostId: string;
    oppgaveId: number;
    enhetId: string;
    dokumenter?: DokumentTittelSubmitValue[];
    journalpostTittel?: string;
}>

export default JournalførSubmitValue;
