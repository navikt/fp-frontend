import assertUnreachable from '@navikt/fp-fakta-uttaksdokumentasjon/src/utils/switchCaseUtils';

export enum FaktaKilde {
  SOKNAD,
  FREG,
}

export function getFormateringsIdForKilde(kilde: FaktaKilde) {
  switch (kilde) {
    case FaktaKilde.SOKNAD:
      return 'DataKilde.Soknad';
    case FaktaKilde.FREG:
      return 'DataKilde.FREG';
    default:
      return assertUnreachable(kilde);
  }
}
