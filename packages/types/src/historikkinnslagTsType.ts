import { HistorikkAktor } from '@navikt/fp-kodeverk';

export type Historikkinnslag = Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke: string | null;
  dokumenter: HistorikkInnslagDokumentLink[];
  tittel: string | null;
  linjer: Linje[];
}>;

type Linje =
  | {
      type: 'TEKST';
      tekst: string;
    }
  | { type: 'LINJESKIFT' };

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
