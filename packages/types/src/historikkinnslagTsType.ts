import { HistorikkAktor } from '@navikt/fp-kodeverk';

export type Historikkinnslag = Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: string | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}>;

export type Linje =
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
  dokumentId: string;
  journalpostId: string;
  tag: string;
  utgått: boolean;
}>;
