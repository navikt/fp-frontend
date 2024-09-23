import { Personadresse, AdressePeriode } from '@navikt/fp-types';
import { isEqual } from 'lodash';

const emptyIfnull = (text?: string): string => (text == null ? '' : text);

export const formaterAdresse = (adresse: Personadresse): string => {
  const { adresselinje1, adresselinje2, adresselinje3, postNummer, poststed, land } = adresse;

  const kobinertAdresselinje = [adresselinje1, adresselinje2, adresselinje3].filter(linje => !!linje).join(', ');

  return `${emptyIfnull(kobinertAdresselinje)}, ${emptyIfnull(postNummer)} ${emptyIfnull(poststed)} ${emptyIfnull(land)}`;
};

export const erAdressePerioderLike = (list1: AdressePeriode[], list2: AdressePeriode[]): boolean => {
  if (list1.length !== list2.length) {
    return false;
  }

  return (
    list1.every(obj1 => list2.some(obj2 => isEqual(obj1, obj2))) &&
    list2.every(obj2 => list1.some(obj1 => isEqual(obj1, obj2)))
  );
};
