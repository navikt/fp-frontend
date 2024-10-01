import { AdressePeriode } from '@navikt/fp-types';
import { isEqual } from 'lodash';

export const erAdressePerioderLike = (list1: AdressePeriode[], list2: AdressePeriode[]): boolean => {
  if (list1.length !== list2.length) {
    return false;
  }

  return (
    list1.every(obj1 => list2.some(obj2 => isEqual(obj1, obj2))) &&
    list2.every(obj2 => list1.some(obj1 => isEqual(obj1, obj2)))
  );
};
