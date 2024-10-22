import { historikkAktor as HistorikkAktor } from '@navikt/fp-kodeverk';

export type HistorikkinnslagV2 = Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  title: string;
  body: string[];
}>;

type HistorikkUtfører = {
  type: HistorikkAktor;
  ident: string;
};
