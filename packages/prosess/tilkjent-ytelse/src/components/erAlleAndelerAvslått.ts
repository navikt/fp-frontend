import type { BeregningsresultatPeriode } from '@navikt/fp-types';

export const erAlleAndelerAvslått = (periode: BeregningsresultatPeriode): boolean =>
  (periode.andeler ?? []).length > 0 &&
  (periode.andeler ?? []).every(andel => andel.uttak.periodeResultatType === 'AVSLÅTT');
