import { opplysningAdresseType as OpplysningAdresseType } from '@navikt/fp-kodeverk';

import getAddresses from './getAddresses';

describe('getAddresses', () => {
  it('skal sjekke at bostedsadresse blir korrekt bygget', () => {
    const adresseListe = [
      {
        adresseType: OpplysningAdresseType.BOSTEDSADRESSE,
        adresselinje1: 'Adresse 1',
        adresselinje2: 'Adresse 2',
        adresselinje3: 'Adresse 3',
        poststed: 'poststed',
        postNummer: '1234',
      },
    ];
    const adresse = getAddresses(adresseListe);
    expect(adresse.BOSTEDSADRESSE).toBe('Adresse 1, Adresse 2, Adresse 3, 1234 poststed');
  });

  it('skal sjekke at bostedsadresse blir korrekt satt dersom adresselinje1 ikke er satt', () => {
    const adresseListe = [
      {
        adresseType: OpplysningAdresseType.BOSTEDSADRESSE,
        adresselinje2: 'Adresse 2',
        poststed: 'poststed',
        postNummer: '1234',
      },
    ];
    const adresse = getAddresses(adresseListe);
    expect(adresse.BOSTEDSADRESSE).toBe('Adresse 2, 1234 poststed');
  });

  it('skal sjekke at land ikke blir vist når landet er norge', () => {
    const adresseListe = [
      {
        adresseType: OpplysningAdresseType.POSTADRESSE,
        adresselinje1: 'Adresse 1',
        poststed: 'poststed',
        land: 'NOR',
        postNummer: '1234',
      },
    ];
    const adresse = getAddresses(adresseListe);
    expect(adresse.POSTADRESSE).toBe('Adresse 1, 1234 poststed');
  });

  it('skal sjekke at land blir vist når landet ikke er norge', () => {
    const adresseListe = [
      {
        adresseType: OpplysningAdresseType.POSTADRESSE,
        adresselinje1: 'Adresse 1',
        poststed: 'poststed',
        land: 'SWE',
        postNummer: '1234',
      },
    ];
    const adresse = getAddresses(adresseListe);
    expect(adresse.POSTADRESSE).toBe('Adresse 1, 1234 poststed SWE');
  });

  it('skal sjekke at postadresse blir korrekt satt', () => {
    const adresseListe = [
      {
        adresseType: OpplysningAdresseType.POSTADRESSE,
        adresselinje1: 'Adresse 1',
        poststed: 'poststed',
        postNummer: '1234',
      },
    ];
    const adresse = getAddresses(adresseListe);
    expect(adresse.POSTADRESSE).toBe('Adresse 1, 1234 poststed');
  });
});
