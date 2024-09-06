import assertUnreachable from '@navikt/fp-fakta-uttaksdokumentasjon/src/utils/switchCaseUtils';

export enum FaktaKilde {
  SOKNAD,
  FREG,
}

export function getFormateringsIdForKilde(kilde: FaktaKilde) {
  switch (kilde) {
    case FaktaKilde.SOKNAD:
      return 'FaktaKilde.Soknad';
    case FaktaKilde.FREG:
      return 'FaktaKilde.FREG';
    default:
      return assertUnreachable(kilde);
  }
}
