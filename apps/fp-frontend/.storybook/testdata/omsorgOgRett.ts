import { type OmsorgOgRett } from '@navikt/fp-types';

export const omsorgOgRett: OmsorgOgRett = {
  søknad: {
    søkerHarAleneomsorg: 'NEI',

    annenpartRettighet: {
      harRettNorge: 'JA',
      harOppholdEØS: 'IKKE_RELEVANT',
      harRettEØS: 'IKKE_RELEVANT',
      harUføretrygd: 'IKKE_RELEVANT',
    },
  },
  registerdata: {
    harAnnenpartUføretrygd: 'IKKE_RELEVANT',
    harAnnenpartForeldrepenger: 'NEI',
    harAnnenpartEngangsstønad: 'NEI',
  },

  relasjonsRolleType: 'MORA',
  rettighetstype: 'BEGGE_RETT',
};
