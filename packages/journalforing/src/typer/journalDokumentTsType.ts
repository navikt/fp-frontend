import type { DokumentTittel } from '../kodeverk/dokumentTittel.ts';
import { JournalVariant } from '../kodeverk/journalVariant';

export type JournalDokument = Readonly<{
  dokumentId: string;
  tittel: DokumentTittel;
  varianter: JournalVariant[];
  lenke: string;
}>;
