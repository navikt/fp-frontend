import { erAdressePerioderLike } from './adresseUtils';
import { expect } from 'vitest';

const defaultAdresse = {
  fom: '2014-09-17',
  tom: '2050-01-01',
  adresse: {
    adresseType: 'BOSTEDSADRESSE',
    adresselinje1: null,
    adresselinje2: null,
    adresselinje3: null,
    postNummer: '5511',
    poststed: 'Ukjent',
    land: 'NOR',
  },
};

describe('adresseUtils', () => {
  describe('erAdressePerioderLike', () => {
    it('skal gi true for like adresser', () => {
      expect(erAdressePerioderLike([defaultAdresse], [defaultAdresse])).toBeTruthy();
    });

    it('skal gi false for ulike perioder i adresser', () => {
      const adresse2 = {
        ...defaultAdresse,
        fom: '1994-09-17',
        tom: '9999-01-01',
      };
      expect(erAdressePerioderLike([defaultAdresse], [adresse2])).toBeFalsy();
    });

    it('skal gi false for ulike adresser', () => {
      const adresse2 = {
        ...defaultAdresse,
        adresse: {
          ...defaultAdresse.adresse,
          poststed: 'Oslo',
        },
      };
      expect(erAdressePerioderLike([defaultAdresse], [adresse2])).toBeFalsy();
    });
  });
});
