import { expect } from 'vitest';
import { fagsakYtelseType } from '@navikt/fp-kodeverk';

import { lagVurderingsAlternativer } from './lagVurderingsAlternativer';

describe('lagVurderingsAlternativer', () => {
  it.each([
    [2, fagsakYtelseType.FORELDREPENGER],
    [2, fagsakYtelseType.SVANGERSKAPSPENGER],
    [2, fagsakYtelseType.ENGANGSSTONAD],
  ])('skal gi %s valg for %s på førstegangsbehandling', (size, ytelse) => {
    expect(lagVurderingsAlternativer(ytelse, false, false)).toHaveLength(size);
  });

  it.each([
    [3, fagsakYtelseType.FORELDREPENGER],
    [3, fagsakYtelseType.SVANGERSKAPSPENGER],
  ])('skal gi %s valg for %s på revurdering', (size, ytelse) => {
    expect(lagVurderingsAlternativer(ytelse, false, true)).toHaveLength(size);
  });

  it('skal gi 2 valg for ES på revurdering', () => {
    expect(lagVurderingsAlternativer(fagsakYtelseType.ENGANGSSTONAD, false, true)).toHaveLength(2);
  });

  it('skal gi 3 valg på ES med forutgående medlemskap på førstegangsbehandling', () => {
    expect(lagVurderingsAlternativer(fagsakYtelseType.ENGANGSSTONAD, true, false)).toHaveLength(3);
  });

  it('skal gi 3 valg på ES med forutgående medlemskap på revurdering', () => {
    expect(lagVurderingsAlternativer(fagsakYtelseType.ENGANGSSTONAD, true, true)).toHaveLength(3);
  });
});
