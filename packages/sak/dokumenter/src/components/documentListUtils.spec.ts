import type { Dokument } from '@navikt/fp-types';

import { compareByOrder, getNextSortingDirection } from './documentListUtils';

const lagDokumentMedTittel = (tittel: string | undefined): Dokument => ({
  journalpostId: 'jp1',
  dokumentId: 'dok1',
  kommunikasjonsretning: 'INN',
  tittel,
});

describe('documentListUtils', () => {
  describe('compareByOrder', () => {
    const inputOrder = [
      ' Terminbekreftelse',
      'Avslutningstillatelse',
      undefined,
      'Søknad',
      'Inntektsmelding',
      undefined,
    ];
    const expectedAscending = [
      'Avslutningstillatelse',
      'Inntektsmelding',
      'Søknad',
      ' Terminbekreftelse',
      undefined,
      undefined,
    ];

    const sorted = (direction: 'ascending' | 'descending' | 'none') =>
      inputOrder
        .map(lagDokumentMedTittel)
        .toSorted(compareByOrder({ orderBy: 'tittel', direction }))
        .map(d => d.tittel);

    it('skal sortere dokumenter stigende etter tittel', () => {
      expect(sorted('ascending')).toEqual(expectedAscending);
    });

    it('skal sortere dokumenter synkende etter tittel', () => {
      expect(sorted('descending')).toEqual(expectedAscending.toReversed());
    });

    it('skal ikke sortere dokumenter når direction er none', () => {
      expect(sorted('none')).toEqual(inputOrder);
    });
  });

  describe('getNextSortingDirection', () => {
    const sortKey = 'tittel';
    it('skal returnere ascending når sortKey er en ny kolonne', () => {
      expect(getNextSortingDirection(sortKey, { orderBy: 'tidspunkt', direction: 'descending' })).toBe('ascending');
      expect(getNextSortingDirection(sortKey, { orderBy: 'tidspunkt', direction: 'ascending' })).toBe('ascending');
      expect(getNextSortingDirection(sortKey, { orderBy: 'tidspunkt', direction: 'none' })).toBe('ascending');
    });

    it('skal sykle sorterings retning for endring på samme kolonne', () => {
      expect(getNextSortingDirection(sortKey, { orderBy: sortKey, direction: 'ascending' })).toBe('descending');
      expect(getNextSortingDirection(sortKey, { orderBy: sortKey, direction: 'descending' })).toBe('none');
      expect(getNextSortingDirection(sortKey, { orderBy: sortKey, direction: 'none' })).toBe('ascending');
    });
  });
});
