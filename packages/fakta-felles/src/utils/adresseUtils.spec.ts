import { erPersonAdresserLike, formaterAdresse, getNyesteAdresse } from './adresseUtils';
import { AdresseType } from '@navikt/fp-kodeverk';
import { expect } from 'vitest';

const defaultPeriode = {
  fom: '2014-09-17',
  tom: '2050-01-01',
};

describe('formaterAdresse', () => {
  describe('formaterAdresse', () => {
    it('skal sjekke at adresse blir korrekt satt', () => {
      const adresse = {
        ...defaultPeriode,
        adresselinje1: 'Adresse 1',
        adresselinje2: 'Adresse 2',
        adresselinje3: 'Adresse 3',
        poststed: 'Oslo',
        postNummer: '1234',
        land: 'Norge',
      };
      const formatertAdresse = formaterAdresse(adresse);
      expect(formatertAdresse).toBe('Adresse 1, Adresse 2, Adresse 3, 1234 Oslo');
    });

    it('skal kun vise adresselinjer med innhold', () => {
      const adresse = {
        ...defaultPeriode,
        adresselinje2: 'Adresse 2',
        poststed: 'Oslo',
        postNummer: '1234',
      };
      const formatertAdresse = formaterAdresse(adresse);
      expect(formatertAdresse).toBe('Adresse 2, 1234 Oslo');
    });

    it('skal ikke vise land når landet ikke er gitt', () => {
      const adresse = {
        ...defaultPeriode,
        adresselinje1: 'Utenlandsadresse 1',
        poststed: 'Helsinki',
        postNummer: '1234',
      };
      const formatertAdresse = formaterAdresse(adresse);
      expect(formatertAdresse).toBe('Utenlandsadresse 1, 1234 Helsinki');
    });

    it('skal ikke vise land når landet er Norge', () => {
      const adresse = {
        ...defaultPeriode,
        adresselinje1: 'Adresse 1',
        poststed: 'Oslo',
        land: 'Norge',
        postNummer: '1234',
      };
      const formatertAdresse = formaterAdresse(adresse);
      expect(formatertAdresse).toBe('Adresse 1, 1234 Oslo');
    });

    it('skal vise land når landet ikke er Norge', () => {
      const adresse = {
        ...defaultPeriode,
        adresselinje1: 'Utenlandsadresse 1',
        poststed: 'Helsinki',
        land: 'Finland',
        postNummer: '1234',
      };
      const formatertAdresse = formaterAdresse(adresse);
      expect(formatertAdresse).toBe('Utenlandsadresse 1, 1234 Helsinki, Finland');
    });

    it('skal skrive ut postnummer og sted ved tomme adresselinjer', () => {
      const adresse = {
        ...defaultPeriode,
        poststed: 'Oslo',
        postNummer: '1234',
      };
      const formatertAdresse = formaterAdresse(adresse);
      expect(formatertAdresse).toBe('1234 Oslo');
    });
  });

  describe('getNyesteAdresse', () => {
    it('skal returnere nyeste postadresse', () => {
      const adresser = [
        { fom: '2021-01-01', tom: '2022-01-31', adresseType: AdresseType.BOSTEDSADRESSE },
        { fom: '2019-01-01', tom: '2021-01-31', adresseType: AdresseType.POSTADRESSE },
        { fom: '2020-01-01', tom: '2022-01-31', adresseType: AdresseType.POSTADRESSE_UTLAND },
        { fom: '2022-01-01', tom: '2022-01-31', adresseType: AdresseType.POSTADRESSE },
      ];

      const nyesteAdresse = getNyesteAdresse(adresser, AdresseType.POSTADRESSE);
      expect(nyesteAdresse).toEqual(adresser[3]);
    });
  });

  describe('erPersonAdresserLike', () => {
    const defaultAdresse = {
      ...defaultPeriode,
      adresseType: 'BOSTEDSADRESSE',
      adresselinje1: null,
      adresselinje2: null,
      adresselinje3: null,
      postNummer: '5511',
      poststed: 'Ukjent',
      land: 'Norge',
    };

    it('skal gi true for like adresser', () => {
      expect(erPersonAdresserLike([defaultAdresse], [defaultAdresse])).toBeTruthy();
    });

    it('skal gi false for ulike perioder i adresser', () => {
      const adresse2 = {
        ...defaultAdresse,
        fom: '1994-09-17',
        tom: '9999-01-01',
      };
      expect(erPersonAdresserLike([defaultAdresse], [adresse2])).toBeFalsy();
    });

    it('skal gi false for ulike adresser', () => {
      const adresse2 = {
        ...defaultAdresse,
        poststed: 'Oslo',
      };
      expect(erPersonAdresserLike([defaultAdresse], [adresse2])).toBeFalsy();
    });
  });
});
