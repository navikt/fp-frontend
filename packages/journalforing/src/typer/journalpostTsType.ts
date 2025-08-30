import { type FagsakYtelseType } from '@navikt/fp-kodeverk';

import type { JournalDokument } from './journalDokumentTsType';
import type { JournalFagsak } from './journalFagsakTsType';

export type JournalKanal = 'NAV_NO' | 'ALTINN' | 'EESSI' | 'EIA' | 'HELSENETTET' | 'SKAN_NETS';
export type JournalpostTilstand =
  | 'MOTTATT'
  | 'JOURNALFOERT'
  | 'FEILREGISTRERT'
  | 'EKSPEDERT'
  | 'FERDIGSTILT'
  | 'UTGAAR';

type JournalBruker = Readonly<{
  navn: string;
  fnr: string;
  aktørId: string;
}>;

type JournalAvsender = Readonly<{
  navn: string;
  id: string;
}>;

export type Journalpost = Readonly<{
  journalpostId: string;
  tittel?: string;
  kanal?: JournalKanal;
  bruker: JournalBruker | null;
  tilstand?: JournalpostTilstand;
  eksisterendeSaksnummer?: string;
  journalførendeEnhet?: string;
  kanOppretteSak: boolean;
  avsender: JournalAvsender;
  ytelseType: FagsakYtelseType;
  dokumenter?: JournalDokument[];
  fagsaker?: JournalFagsak[];
}>;
