import { RelasjonsRolleType } from '@navikt/fp-kodeverk';
import { type OmsorgOgRett, Verdi } from '@navikt/fp-types';

export const omsorgOgRett: OmsorgOgRett = {
  søknad: {
    søkerHarAleneomsorg: Verdi.NEI,
    annenpartIdent: null,
    annenpartBostedsland: null,
    annenpartRettighet: {
      harRettNorge: Verdi.IKKE_RELEVANT,
      harOppholdEØS: Verdi.IKKE_RELEVANT,
      harRettEØS: Verdi.IKKE_RELEVANT,
      harUføretrygd: Verdi.IKKE_RELEVANT,
    },
  },
  registerdata: {
    harAnnenpartUføretrygd: Verdi.IKKE_RELEVANT,
    harAnnenpartForeldrepenger: Verdi.NEI,
    harAnnenpartEngangsstønad: Verdi.NEI,
  },
  manuellBehandlingResultat: null,
  relasjonsRolleType: RelasjonsRolleType.MOR,
};
