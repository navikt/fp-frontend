export type DokumentTittelFormValues = Readonly <{
    dokumentId: string;
    tittel?: string;
}>

type JournalføringFormValues = Readonly <{
    saksnummerValg?: string;
    ytelsetypeValg?: string;
    journalpostTittel?: string;
    journalpostDokumenter: DokumentTittelFormValues[];
  }>

export default JournalføringFormValues;
