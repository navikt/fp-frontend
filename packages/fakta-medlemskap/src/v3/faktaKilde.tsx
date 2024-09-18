import assertUnreachable from '@navikt/fp-fakta-uttaksdokumentasjon/src/utils/switchCaseUtils';

export enum FaktaKilde {
  SOKNAD,
  FREG,
  MEDL,
}

export function getFormateringsIdForKilde(kilde: FaktaKilde) {
  switch (kilde) {
    case FaktaKilde.SOKNAD:
      return 'FaktaKilde.Soknad';
    case FaktaKilde.FREG:
      return 'FaktaKilde.FREG';
    case FaktaKilde.MEDL:
      return 'FaktaKilde.MEDL';
    default:
      return assertUnreachable(kilde);
  }
}
