import { AdresseType } from '@navikt/fp-kodeverk';

import getAddresses from './getAddresses';
import { Personadresse } from '@navikt/fp-types';

describe('getAddresses', () => {
  it('skal sjekke at adresser blir korrekt delt på type', () => {
    const adresseListe: Personadresse[] = [
      {
        adresseType: AdresseType.BOSTEDSADRESSE,
        adresselinje1: 'Adresse 1',
        poststed: 'poststed',
        postNummer: '0001',
      },
      {
        adresseType: AdresseType.BOSTEDSADRESSE_UTLAND,
        adresselinje1: 'Adresse 2',
        poststed: 'poststed',
        land: 'Finland',
        postNummer: '0002',
      },
      {
        adresseType: AdresseType.POSTADRESSE,
        adresselinje1: 'Adresse 3',
        poststed: 'poststed',
        land: 'Norge',
        postNummer: '0003',
      },
      {
        adresseType: AdresseType.POSTADRESSE_UTLAND,
        adresselinje1: 'Adresse 4',
        poststed: 'poststed',
        land: 'Danmark',
        postNummer: '0004',
      },
    ];

    const adresser = getAddresses(adresseListe);
    expect(adresser.BOSTEDSADRESSE).toBe('Adresse 1, 0001 poststed');
    expect(adresser.BOSTEDSADRESSE_UTLAND).toBe('Adresse 2, 0002 poststed, Finland');
    expect(adresser.POSTADRESSE).toBe('Adresse 3, 0003 poststed');
    expect(adresser.POSTADRESSE_UTLAND).toBe('Adresse 4, 0004 poststed, Danmark');
  });

  it('skal returnere bostedsadresse som ukjent for adresse med ukjent adresse type', () => {
    const adresseListe: Personadresse[] = [
      {
        adresselinje1: 'Adresse 1',
        poststed: 'poststed',
        postNummer: '0001',
      },
    ];

    const adresser = getAddresses(adresseListe);
    expect(adresser.BOSTEDSADRESSE).toBe('UKJENT');
  });

  it('skal ikke returnere adresse for tomme adresselinjer', () => {
    const adresseListe: Personadresse[] = [
      {
        adresseType: AdresseType.BOSTEDSADRESSE_UTLAND,
        poststed: 'poststed',
        land: 'Finland',
        postNummer: '0002',
      },
    ];

    const adresser = getAddresses(adresseListe);
    expect(adresser.BOSTEDSADRESSE_UTLAND).toBeUndefined();
  });
});
