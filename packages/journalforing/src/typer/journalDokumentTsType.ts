import { JournalVariant } from '../kodeverk/journalVariant';

export type JournalDokument = Readonly<{
  dokumentId: string;
  tittel: string;
  varianter: JournalVariant[];
  lenke: string;
}>;
