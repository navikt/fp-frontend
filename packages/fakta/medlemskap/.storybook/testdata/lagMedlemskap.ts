import { TIDENES_ENDE } from '@navikt/ft-utils';

import type { Medlemskap } from '@navikt/fp-types';

export const lagMedlemskap = (override: Partial<Medlemskap> = {}): Medlemskap => ({
  avvik: [
    'BOSATT_UTENLANDSOPPHOLD',
    'BOSATT_UTENLANDSADRESSE',
    'BOSATT_MANGLENDE_BOSTEDSADRESSE',
    'BOSATT_UGYLDIG_PERSONSTATUS',
    'MEDL_PERIODER',
    'TREDJELAND_MANGLENDE_LOVLIG_OPPHOLD',
  ],
  oppholdstillatelser: [
    {
      fom: '2021-10-13',
      tom: '2024-01-13',
      type: 'PERMANENT',
    },
  ],
  medlemskapsperioder: [
    {
      fom: '2019-01-01',
      tom: '2022-01-01',
      erMedlem: false,
      lovvalgsland: 'Finland',
      medlemskapType: 'AVKLARES',
      dekningType: 'OPPHOR',
      beslutningsdato: '2020-02-01',
    },

    {
      fom: '2023-01-01',
      tom: '2024-01-01',
      erMedlem: true,
      lovvalgsland: 'Norge',
      studieland: 'Sverige',
      medlemskapType: 'ENDELIG',
      dekningType: 'FULL',
      beslutningsdato: '2024-09-24',
    },
  ],
  adresser: [
    {
      fom: '2019-01-01',
      tom: TIDENES_ENDE,
      adresseType: 'BOSTEDSADRESSE',
      adresselinje1: 'Oslogata 1',

      poststed: 'Oslo',
      postNummer: '1234',
      land: 'Norge',
    },
    {
      fom: '2020-01-01',
      tom: '2021-01-01',
      adresseType: 'POSTADRESSE_UTLAND',
      adresselinje1: 'Mäkelänkatu 1B',

      poststed: 'Helsinki',
      postNummer: 'FI-00123',
      land: 'Finland',
    },
  ],
  regioner: [
    {
      fom: '2019-01-01',
      tom: '2021-01-01',
      type: 'NORDEN',
    },
  ],
  personstatuser: [
    {
      fom: '2019-01-01',
      tom: '2022-01-01',
      type: 'BOSA',
    },
    {
      fom: '2024-01-01',
      tom: TIDENES_ENDE,
      type: 'UTVA',
    },
  ],
  oppgittUtlandsopphold: {
    oppholdNestePeriode: true,
    oppholdSistePeriode: true,
    utlandsoppholdFør: [
      {
        landNavn: 'SVERIGE',
        landkode: 'SWE',
        fom: '2010-01-01',
        tom: '2011-01-01',
      },
    ],
    utlandsoppholdEtter: [
      {
        landNavn: 'DANMARK',
        landkode: 'DNK',
        fom: '2018-01-01',
        tom: '2019-01-01',
      },
    ],
  },
  annenpart: {
    adresser: [
      {
        fom: '2019-01-01',
        tom: TIDENES_ENDE,
        adresseType: 'BOSTEDSADRESSE',
        adresselinje1: 'Oslogata 1',

        poststed: 'Oslo',
        postNummer: '1234',
        land: 'Norge',
      },
      {
        fom: '2020-01-01',
        tom: '2021-01-01',
        adresseType: 'POSTADRESSE_UTLAND',
        adresselinje1: 'Mäkelänkatu 1B',

        poststed: 'Helsinki',
        postNummer: 'FI-00123',
        land: 'Finland',
      },
    ],
    regioner: [
      {
        fom: '2019-01-01',
        tom: '2021-01-01',
        type: 'ANNET',
      },
    ],
    personstatuser: [
      {
        fom: '2019-01-01',
        tom: '2020-01-01',
        type: 'BOSA',
      },
    ],
  },
  ...override,
});
