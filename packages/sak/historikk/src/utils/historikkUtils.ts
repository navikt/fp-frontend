import type { Historikkinnslag, HistorikkinnslagDtoFpTilbake } from '@navikt/fp-types';

type HistorikkMedTilbakekrevingIndikator = (Historikkinnslag | HistorikkinnslagDtoFpTilbake) & {
  erTilbakekreving?: boolean;
};

const sortNewestByOpprettetTidspunkt = (
  a: Historikkinnslag | HistorikkinnslagDtoFpTilbake,
  b: Historikkinnslag | HistorikkinnslagDtoFpTilbake,
) => (new Date(b.opprettetTidspunkt).getTime() > new Date(a.opprettetTidspunkt).getTime() ? 1 : -1);

const markor = (h: Historikkinnslag | HistorikkinnslagDtoFpTilbake, erTilbakekreving: boolean) => ({
  ...h,
  erTilbakekreving,
});

export const sortAndTagTilbakekreving = (
  historikkFpsak: Historikkinnslag[] = [],
  historikkFptilbake: HistorikkinnslagDtoFpTilbake[] = [],
): HistorikkMedTilbakekrevingIndikator[] =>
  [...historikkFpsak.map(h => markor(h, false)), ...historikkFptilbake.map(h => markor(h, true))].sort(
    sortNewestByOpprettetTidspunkt,
  );
