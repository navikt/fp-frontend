import { HistorikkAktor } from '@navikt/fp-kodeverk';

export type Historikkinnslag = Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke: string | null;
  dokumenter: HistorikkInnslagDokumentLink[];
  tittel: string | null;
  body: string[];
}>;

type HistorikkUtfører = {
  type: HistorikkAktor;
  ident: string | null;
};

export type HistorikkInnslagDokumentLink = Readonly<{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}>;
