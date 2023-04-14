import { FagsakYtelseType } from '@navikt/ft-kodeverk';
import JournalKanal from '../kodeverk/journalKanal';
import JournalAvsender from './journalAvsenderTsType';
import JournalBruker from './journalBrukerTsType';
import JournalDokument from './journalDokumentTsType';
import JournalFagsak from './journalFagsakTsType';

type Journalpost = Readonly<{
  journalpostId: string;
  tittel?: string;
  kanal?: JournalKanal;
  bruker: JournalBruker;
  avsender: JournalAvsender;
  ytelseType: FagsakYtelseType;
  dokumenter?: JournalDokument[];
  fagsaker?: JournalFagsak[];
}>;

export default Journalpost;
