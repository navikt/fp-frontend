import { FordelingPeriodeKilde, UttakPeriodeType } from '@navikt/fp-kodeverk';
import type { KontrollerFaktaPeriode } from '@navikt/fp-types';

export const kontrollerFaktaPeriode: KontrollerFaktaPeriode[] = [
  {
    fom: '2025-02-12',
    tom: '2025-03-04',
    uttakPeriodeType: UttakPeriodeType.FORELDREPENGER_FOR_FODSEL,

    flerbarnsdager: false,

    periodeKilde: FordelingPeriodeKilde.SØKNAD,
  },
  {
    fom: '2025-03-05',
    tom: '2025-06-17',
    uttakPeriodeType: UttakPeriodeType.MODREKVOTE,

    flerbarnsdager: false,

    periodeKilde: FordelingPeriodeKilde.SØKNAD,
  },
  {
    fom: '2025-06-18',
    tom: '2025-10-07',
    uttakPeriodeType: UttakPeriodeType.FELLESPERIODE,

    flerbarnsdager: false,

    periodeKilde: FordelingPeriodeKilde.SØKNAD,
  },
];
