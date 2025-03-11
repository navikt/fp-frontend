import type { Medlemskap } from '@navikt/fp-types';

export const medlemskap: Medlemskap = {
  manuellBehandlingResultat: null,
  legacyManuellBehandling: null,
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
  utenlandsopphold: [],
  adresser: [
    {
      fom: '2015-03-05',
      tom: '2050-01-01',
      adresseType: 'BOSTEDSADRESSE',
      adresselinje1: null,
      adresselinje2: null,
      adresselinje3: null,
      postNummer: '5511',
      poststed: 'Ukjent',
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
        adresselinje1: null,
        adresselinje2: null,
        adresselinje3: null,
        postNummer: '5511',
        poststed: 'Ukjent',
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
