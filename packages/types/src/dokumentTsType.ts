export type Dokument = Readonly<{
  journalpostId: string;
  dokumentId: string;
  behandlingUuidList?: string[];
  tittel?: string;
  tidspunkt?: string;
  kommunikasjonsretning: string;
  gjelderFor?: string;
}>;
