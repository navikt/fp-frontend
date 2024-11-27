import { FagsakYtelseType } from '@navikt/fp-kodeverk';

import JournalKanal from '../kodeverk/journalKanal';
import JournalpostTilstand from '../kodeverk/journalpostTilstand';
import JournalAvsender from './journalAvsenderTsType';
import JournalBruker from './journalBrukerTsType';
import JournalDokument from './journalDokumentTsType';
import JournalFagsak from './journalFagsakTsType';

type Journalpost = Readonly<{
  journalpostId: string;
  tittel?: string;
  kanal?: JournalKanal;
  bruker: JournalBruker;
  tilstand?: JournalpostTilstand;
  eksisterendeSaksnummer?: string;
  journalførendeEnhet?: string;
  avsender: JournalAvsender;
  ytelseType: FagsakYtelseType;
  dokumenter?: JournalDokument[];
  fagsaker?: JournalFagsak[];
}>;

export default Journalpost;
