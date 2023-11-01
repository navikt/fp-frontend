import { FagsakYtelseType } from '@navikt/ft-kodeverk';
import JournalKanal from '../kodeverk/journalKanal';
import JournalAvsender from './journalAvsenderTsType';
import JournalBruker from './journalBrukerTsType';
import JournalDokument from './journalDokumentTsType';
import JournalFagsak from './journalFagsakTsType';
import JournalpostTilstand from '../kodeverk/journalpostTilstand';

type Journalpost = Readonly<{
  journalpostId: string;
  tittel?: string;
  kanal?: JournalKanal;
  bruker: JournalBruker;
  tilstand?: JournalpostTilstand;
  avsender: JournalAvsender;
  ytelseType: FagsakYtelseType;
  dokumenter?: JournalDokument[];
  fagsaker?: JournalFagsak[];
}>;

export default Journalpost;
