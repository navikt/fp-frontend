import { describe, expect, it } from 'vitest';

import type { KodeverkMedNavn } from '@navikt/fp-types';

import { sortKodeverkByNavn } from './sortKodeverkByNavn';

describe('sortKodeverkByNavn', () => {
  it('skal sortere kodeverk alfabetisk etter navn, ikke kode', () => {
    const kodeverk: KodeverkMedNavn<'ArbeidType'>[] = [
      { kode: 'FRILANSER', navn: 'Frilanser' },
      { kode: 'UTENLANDSK_ARBEIDSFORHOLD', navn: 'Arbeid i utlandet' },
      { kode: 'ETTERLØNN_SLUTTPAKKE', navn: 'Etterlønn eller sluttpakke' },
    ];

    expect(kodeverk.toSorted(sortKodeverkByNavn).map(({ navn }) => navn)).toEqual([
      'Arbeid i utlandet',
      'Etterlønn eller sluttpakke',
      'Frilanser',
    ]);
  });
});
