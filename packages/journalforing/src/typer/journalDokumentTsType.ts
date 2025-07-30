type JournalVariant = 'ARKIV' | 'ORIGINAL';

export type JournalDokument = Readonly<{
  dokumentId: string;
  tittel: string;
  varianter: JournalVariant[];
  lenke: string;
}>;
