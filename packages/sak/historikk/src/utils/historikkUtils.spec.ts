import { expect } from 'vitest';

import type { Historikkinnslag, HistorikkinnslagDtoFpTilbake } from '@navikt/fp-types';

import { sortAndTagTilbakekreving } from './historikkUtils';

const historikkInnslagFpsak = [
  {
    opprettetTidspunkt: '2024-12-17T11:06:13.768',
  },
  {
    opprettetTidspunkt: '2024-12-17T11:03:41.971',
  },
  {
    opprettetTidspunkt: '2024-12-17T11:06:13.85',
  },
] as Historikkinnslag[];

const historikkInnslagTilbake = [
  {
    opprettetTidspunkt: '2024-12-17T11:06:13.841',
  },
  {
    opprettetTidspunkt: '2024-12-17T11:06:13.702',
  },
  {
    opprettetTidspunkt: '2024-12-17T11:06:14.361',
  },
] as HistorikkinnslagDtoFpTilbake[];

describe('historikkUtils', () => {
  it('sorterer historikk', () => {
    const sorted = sortAndTagTilbakekreving(historikkInnslagFpsak, historikkInnslagTilbake);

    expect(sorted[0]!.opprettetTidspunkt).toEqual('2024-12-17T11:06:14.361');
    expect(sorted[0]!.erTilbakekreving).toBeTruthy();

    expect(sorted[1]!.opprettetTidspunkt).toEqual('2024-12-17T11:06:13.85');
    expect(sorted[1]!.erTilbakekreving).toBeFalsy();

    expect(sorted[2]!.opprettetTidspunkt).toEqual('2024-12-17T11:06:13.841');
    expect(sorted[2]!.erTilbakekreving).toBeTruthy();

    expect(sorted[3]!.opprettetTidspunkt).toEqual('2024-12-17T11:06:13.768');
    expect(sorted[3]!.erTilbakekreving).toBeFalsy();

    expect(sorted[4]!.opprettetTidspunkt).toEqual('2024-12-17T11:06:13.702');
    expect(sorted[4]!.erTilbakekreving).toBeTruthy();

    expect(sorted[5]!.opprettetTidspunkt).toEqual('2024-12-17T11:03:41.971');
    expect(sorted[5]!.erTilbakekreving).toBeFalsy();
  });
});
