export type DokumentTittelFormValues = Readonly<{
  dokumentId: string;
  tittel?: string;
}>;

export type JournalføringFormValues = Readonly<{
  saksnummerValg?: string;
  ytelsetypeValg?: string;
  journalpostTittel?: string;
  journalpostDokumenter?: DokumentTittelFormValues[];
}>;
