import type { Dokument } from '@navikt/fp-types';

export type TableHeaders = 'kommunikasjonsretning' | 'tittel' | 'gjelderFor' | 'tidspunkt';
export type SortConfig = { orderBy: TableHeaders; direction: 'ascending' | 'descending' | 'none' };

const comparator = (orderBy: TableHeaders, aDok: Dokument, bDok: Dokument): number => {
  const a = aDok[orderBy]?.trim();
  const b = bDok[orderBy]?.trim();

  if (a !== undefined && b !== undefined) {
    return a.localeCompare(b);
  }
  if (a === undefined && b === undefined) {
    return 0;
  }
  return a === undefined ? 1 : -1;
};

export const compareByOrder =
  (sort: SortConfig) =>
  (a: Dokument, b: Dokument): number => {
    switch (sort.direction) {
      case 'ascending':
        return comparator(sort.orderBy, a, b);
      case 'descending':
        return comparator(sort.orderBy, b, a);
      default:
        return 0;
    }
  };

export const getNextSortingDirection = (newSortKey: TableHeaders, currentSortState: SortConfig) => {
  if (newSortKey !== currentSortState.orderBy) {
    return 'ascending';
  }

  switch (currentSortState.direction) {
    case 'ascending':
      return 'descending';
    case 'descending':
      return 'none';
    case 'none':
      return 'ascending';
  }
};

export const getDokumentKey = (dokument: Dokument) => `${dokument.journalpostId}-${dokument.dokumentId}`;
