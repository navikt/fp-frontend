import type { Soknad } from '@navikt/fp-types';

export const soknad: Soknad = {
  soknadType: 'ST-001',
  mottattDato: '2025-03-05',

  antallBarn: 1,
  oppgittTilknytning: {
    oppholdNorgeNa: true,
    oppholdSistePeriode: true,
    oppholdNestePeriode: true,
    utlandsoppholdFor: [],
    utlandsoppholdEtter: [],
  },
  manglendeVedlegg: [],
  oppgittFordeling: {
    startDatoForPermisjon: '2025-02-12',
    dekningsgrader: {
      avklartDekningsgrad: 100,
      søker: {
        søknadsdato: '2025-03-05',
        dekningsgrad: 100,
      },
      annenPart: {
        søknadsdato: '',
        dekningsgrad: undefined,
      },
    },
  },
  søknadsfrist: {
    mottattDato: '2025-03-05',
    utledetSøknadsfrist: '2025-05-31',
    søknadsperiodeStart: '2025-02-12',
    søknadsperiodeSlutt: '2025-10-07',
    dagerOversittetFrist: 0,
  },
  termindato: '2025-03-05',

  fodselsdatoer: {
    '1': '2025-03-05',
  },
};
