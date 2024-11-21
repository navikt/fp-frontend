import { HistorikkAktor } from '@navikt/fp-kodeverk';

export type HistorikkinnslagV2 = Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}>;

type HistorikkUtfører = {
  type: HistorikkAktor;
  ident: string;
};

export type HistorikkInnslagDokumentLink = Readonly<{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}>;
