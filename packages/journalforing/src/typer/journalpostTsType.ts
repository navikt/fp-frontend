import { FagsakYtelseType } from '@navikt/fp-kodeverk';

import { JournalKanal } from '../kodeverk/journalKanal';
import { JournalpostTilstand } from '../kodeverk/journalpostTilstand';
import type { JournalAvsender } from './journalAvsenderTsType';
import type { JournalBruker } from './journalBrukerTsType';
import type { JournalDokument } from './journalDokumentTsType';
import type { JournalFagsak } from './journalFagsakTsType';

export type Journalpost = Readonly<{
  journalpostId: string;
  tittel?: string;
  kanal?: JournalKanal;
  bruker: JournalBruker;
  tilstand?: JournalpostTilstand;
  eksisterendeSaksnummer?: string;
  journalførendeEnhet?: string;
  kanOppretteSak: boolean;
  avsender: JournalAvsender;
  ytelseType: FagsakYtelseType;
  dokumenter?: JournalDokument[];
  fagsaker?: JournalFagsak[];
}>;
