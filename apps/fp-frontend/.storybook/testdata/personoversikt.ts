import type { Personoversikt } from '@navikt/fp-types';

export const personoversikt: Personoversikt = {
  bruker: {
    aktoerId: '9921487132273',
    navn: 'Kristine Kalv',
    kjønn: 'K',
    sivilstand: 'UGIF',

    fødselsdato: '1993-03-05',
    adresser: [
      {
        fom: '2015-03-05',
        tom: '2050-01-01',
        adresseType: 'BOSTEDSADRESSE',
        adresselinje1: 'Trondheimsveien 1',

        postNummer: '5511',
        poststed: 'Oslo',
        land: 'Norge',
      },
    ],
  },
  annenPart: {
    aktoerId: '9921528317364',
    navn: 'Asbjørn Lemur',
    kjønn: 'M',
    sivilstand: 'UGIF',
    fødselsdato: '1991-03-05',
    adresser: [
      {
        fom: '2015-03-05',
        tom: '2050-01-01',
        adresseType: 'BOSTEDSADRESSE',
        adresselinje1: 'Trondheimsveien 1',

        postNummer: '5511',
        poststed: 'Oslo',
        land: 'Norge',
      },
    ],
  },
  barn: [
    {
      aktoerId: '9902442362885',
      navn: 'Ole Duck',
      kjønn: 'K',
      sivilstand: 'UGIF',
      fødselsdato: '2025-03-05',
      adresser: [
        {
          fom: '2025-03-05',
          tom: '2050-01-01',
          adresseType: 'BOSTEDSADRESSE',
          adresselinje1: 'Trondheimsveien 1',

          postNummer: '5511',
          poststed: 'Oslo',
          land: 'Norge',
        },
      ],
    },
  ],
};
