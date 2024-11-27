import { expect } from 'vitest';

import { FagsakYtelseType } from '@navikt/fp-kodeverk';

import { lagVurderingsAlternativer } from './lagVurderingsAlternativer';

describe('lagVurderingsAlternativer', () => {
  it.each([
    [2, FagsakYtelseType.FORELDREPENGER],
    [2, FagsakYtelseType.SVANGERSKAPSPENGER],
    [2, FagsakYtelseType.ENGANGSSTONAD],
  ])('skal gi %s valg for %s på førstegangsbehandling', (size, ytelse) => {
    expect(lagVurderingsAlternativer(ytelse, false, false)).toHaveLength(size);
  });

  it.each([
    [3, FagsakYtelseType.FORELDREPENGER],
    [3, FagsakYtelseType.SVANGERSKAPSPENGER],
  ])('skal gi %s valg for %s på revurdering', (size, ytelse) => {
    expect(lagVurderingsAlternativer(ytelse, false, true)).toHaveLength(size);
  });

  it('skal gi 2 valg for ES på revurdering', () => {
    expect(lagVurderingsAlternativer(FagsakYtelseType.ENGANGSSTONAD, false, true)).toHaveLength(2);
  });

  it('skal gi 3 valg på ES med forutgående medlemskap på førstegangsbehandling', () => {
    expect(lagVurderingsAlternativer(FagsakYtelseType.ENGANGSSTONAD, true, false)).toHaveLength(3);
  });

  it('skal gi 3 valg på ES med forutgående medlemskap på revurdering', () => {
    expect(lagVurderingsAlternativer(FagsakYtelseType.ENGANGSSTONAD, true, true)).toHaveLength(3);
  });
});
