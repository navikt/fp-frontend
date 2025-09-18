import { RelasjonsRolleType } from '@navikt/fp-kodeverk';
import { type OmsorgOgRett } from '@navikt/fp-types';

export const omsorgOgRett: OmsorgOgRett = {
  søknad: {
    søkerHarAleneomsorg: 'NEI',
    annenpartIdent: null,
    annenpartBostedsland: null,
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
  manuellBehandlingResultat: null,
  relasjonsRolleType: RelasjonsRolleType.MOR,
  rettighetstype: 'BEGGE_RETT',
};
