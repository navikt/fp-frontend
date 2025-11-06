import type { Medlemskap } from '@navikt/fp-types';

export const medlemskap: Medlemskap = {
  regioner: [
    {
      fom: '1993-03-05',
      tom: '9999-12-31',
      type: 'NORDEN',
    },
  ],
  personstatuser: [
    {
      fom: '1993-03-05',
      tom: '9999-12-31',
      type: 'BOSA',
    },
  ],
  oppgittUtlandsopphold: {
    oppholdNestePeriode: false,
    oppholdSistePeriode: false,
    utlandsoppholdFør: [],
    utlandsoppholdEtter: [],
  },
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
  oppholdstillatelser: [],
  medlemskapsperioder: [],
  avvik: [],
  annenpart: {
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
    regioner: [
      {
        fom: '1991-03-05',
        tom: '9999-12-31',
        type: 'NORDEN',
      },
    ],
    personstatuser: [
      {
        fom: '1991-03-05',
        tom: '9999-12-31',
        type: 'BOSA',
      },
    ],
  },
};
