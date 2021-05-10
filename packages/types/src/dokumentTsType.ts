type Dokument = Readonly<{
  journalpostId: string;
  dokumentId: string;
  behandlinger?: string[];
  tittel?: string;
  tidspunkt?: string;
  kommunikasjonsretning: string;
  gjelderFor?: string;
}>

export default Dokument;
