import { formaterAdresse, getNyesteAdresse } from './adresseUtils';
import { AdresseType } from '@navikt/fp-kodeverk';
import { expect } from 'vitest';

describe('formaterAdresse', () => {
  describe('formaterAdresse', () => {
    it('skal sjekke at adresse blir korrekt satt', () => {
      const adresse = {
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
        adresselinje2: 'Adresse 2',
        poststed: 'Oslo',
        postNummer: '1234',
      };
      const formatertAdresse = formaterAdresse(adresse);
      expect(formatertAdresse).toBe('Adresse 2, 1234 Oslo');
    });

    it('skal ikke vise land når landet ikke er gitt', () => {
      const adresse = {
        adresselinje1: 'Utenlandsadresse 1',
        poststed: 'Helsinki',
        postNummer: '1234',
      };
      const formatertAdresse = formaterAdresse(adresse);
      expect(formatertAdresse).toBe('Utenlandsadresse 1, 1234 Helsinki');
    });

    it('skal ikke vise land når landet er Norge', () => {
      const adresse = {
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
        { fom: '2021-01-01', tom: null, adresseType: AdresseType.BOSTEDSADRESSE },
        { fom: '2019-01-01', tom: '2021-01-31', adresseType: AdresseType.POSTADRESSE },
        { fom: '2020-01-01', tom: '2022-01-31', adresseType: AdresseType.POSTADRESSE_UTLAND },
        { fom: '2022-01-01', tom: '2022-01-31', adresseType: AdresseType.POSTADRESSE },
        { fom: null, tom: '2022-01-31', adresseType: AdresseType.POSTADRESSE },
      ];

      const nyesteAdresse = getNyesteAdresse(adresser, AdresseType.POSTADRESSE);
      expect(nyesteAdresse).toEqual(adresser[3]);
    });
  });
});
