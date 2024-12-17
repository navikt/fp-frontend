import { Historikkinnslag } from '@navikt/fp-types';

type HistorikkMedTilbakekrevingIndikator = Historikkinnslag & {
  erTilbakekreving?: boolean;
};

const sortNewestByOpprettetTidspunkt = (a: Historikkinnslag, b: Historikkinnslag) =>
  new Date(b.opprettetTidspunkt).getTime() > new Date(a.opprettetTidspunkt).getTime() ? 1 : -1;

const markor = (h: Historikkinnslag, erTilbakekreving: boolean) => ({ ...h, erTilbakekreving });

export const sortAndTagTilbakekreving = (
  historikkFpsak: Historikkinnslag[] = [],
  historikkFptilbake: Historikkinnslag[] = [],
): HistorikkMedTilbakekrevingIndikator[] => {
  const historikkMedMarkor = [
    ...historikkFpsak.map(h => markor(h, false)),
    ...historikkFptilbake.map(h => markor(h, true)),
  ];
  return historikkMedMarkor.sort(sortNewestByOpprettetTidspunkt);
};
