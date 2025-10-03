import type { KontrollerFaktaPeriode } from '@navikt/fp-types';

export const kontrollerFaktaPeriode: KontrollerFaktaPeriode[] = [
  {
    fom: '2025-02-12',
    tom: '2025-03-04',
    uttakPeriodeType: 'FORELDREPENGER_FØR_FØDSEL',
    flerbarnsdager: false,
    periodeKilde: 'SØKNAD',
  },
  {
    fom: '2025-03-05',
    tom: '2025-06-17',
    uttakPeriodeType: 'MØDREKVOTE',
    flerbarnsdager: false,
    periodeKilde: 'SØKNAD',
  },
  {
    fom: '2025-06-18',
    tom: '2025-10-07',
    uttakPeriodeType: 'FELLESPERIODE',
    flerbarnsdager: false,
    periodeKilde: 'SØKNAD',
  },
];
