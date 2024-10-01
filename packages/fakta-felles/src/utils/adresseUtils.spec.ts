import { AdresseType } from '@navikt/fp-kodeverk';

import { formaterAdresse } from './adresseUtils';
import { Personadresse } from '@navikt/fp-types';

describe('formaterAdresse', () => {
  it('skal sjekke at bostedsadresse blir korrekt bygget', () => {
    const adresse = {
      adresseType: AdresseType.BOSTEDSADRESSE,
      adresselinje1: 'Adresse 1',
      adresselinje2: 'Adresse 2',
      adresselinje3: 'Adresse 3',
      poststed: 'poststed',
      postNummer: '1234',
    };
    const formatertAdresse = formaterAdresse(adresse);
    expect(formatertAdresse).toBe('Adresse 1, Adresse 2, Adresse 3, 1234 poststed');
  });

  it('skal sjekke at bostedsadresse blir korrekt satt dersom adresselinje1 ikke er satt', () => {
    const adresse = {
      adresseType: AdresseType.BOSTEDSADRESSE,
      adresselinje2: 'Adresse 2',
      poststed: 'poststed',
      postNummer: '1234',
    };
    const formatertAdresse = formaterAdresse(adresse);
    expect(formatertAdresse).toBe('Adresse 2, 1234 poststed');
  });

  it('skal sjekke at land ikke blir vist når landet er norge', () => {
    const adresse = {
      adresseType: AdresseType.POSTADRESSE,
      adresselinje1: 'Adresse 1',
      poststed: 'poststed',
      land: 'Norge',
      postNummer: '1234',
    };
    const formatertAdresse = formaterAdresse(adresse);
    expect(formatertAdresse).toBe('Adresse 1, 1234 poststed');
  });

  it('skal sjekke at land blir vist når landet ikke er norge', () => {
    const adresse = {
      adresseType: AdresseType.POSTADRESSE,
      adresselinje1: 'Adresse 1',
      poststed: 'poststed',
      land: 'Sverige',
      postNummer: '1234',
    };
    const formatertAdresse = formaterAdresse(adresse);
    expect(formatertAdresse).toBe('Adresse 1, 1234 poststed Sverige');
  });

  it('skal sjekke at postadresse blir korrekt satt', () => {
    const adresse: Personadresse = {
      adresseType: AdresseType.POSTADRESSE,
      adresselinje1: 'Adresse 1',
      poststed: 'poststed',
      postNummer: '1234',
    };
    const formatertAdresse = formaterAdresse(adresse);
    expect(formatertAdresse).toBe('Adresse 1, 1234 poststed');
  });
});
