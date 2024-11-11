import { Personadresse } from '@navikt/fp-types';
import { AdresseType } from '@navikt/fp-kodeverk';
import { isEqual } from 'lodash';

import { sorterPerioder } from './periodeUtils';

const PERSON_ADRESSE_LAND_NORGE = 'NORGE';

const emptyIfnull = (text: string | null | undefined): string => text ?? '';

export const formaterAdresse = (adresse: Personadresse): string => {
  const { adresselinje1, adresselinje2, adresselinje3, postNummer, poststed, land } = adresse;

  const gateadresse = [adresselinje1, adresselinje2, adresselinje3].filter(linje => !!linje).join(', ');
  const postNummerogSted = `${emptyIfnull(postNummer)} ${emptyIfnull(poststed)}`;
  const adresseLand = land?.toUpperCase() !== PERSON_ADRESSE_LAND_NORGE ? land : undefined;

  return [gateadresse, postNummerogSted, adresseLand]
    .map(linje => linje?.trim())
    .filter(linje => !!linje)
    .join(', ')
    .trim();
};

export const getNyesteAdresse = (adresser: Personadresse[], adresseType: AdresseType): Personadresse | undefined =>
  [...adresser].sort(sorterPerioder).find(adresse => adresse.adresseType === adresseType);

export const erPersonAdresserLike = (list1: Personadresse[], list2: Personadresse[]): boolean => {
  if (list1.length !== list2.length) {
    return false;
  }

  return (
    list1.every(obj1 => list2.some(obj2 => isEqual(obj1, obj2))) &&
    list2.every(obj2 => list1.some(obj1 => isEqual(obj1, obj2)))
  );
};
