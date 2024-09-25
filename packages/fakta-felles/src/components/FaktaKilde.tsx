import React from 'react';
import { FormattedMessage } from 'react-intl';
import assertUnreachable from '@navikt/fp-fakta-uttaksdokumentasjon/src/utils/switchCaseUtils';

export enum FaktaKilde {
  SOKNAD,
  FREG,
  MEDL,
}

export const FaktaKildeLabel = ({ kilde }: { kilde: FaktaKilde }) => {
  switch (kilde) {
    case FaktaKilde.SOKNAD:
      return <FormattedMessage id="FaktaKilde.Soknad" />;
    case FaktaKilde.FREG:
      return <FormattedMessage id="FaktaKilde.FREG" />;
    case FaktaKilde.MEDL:
      return <FormattedMessage id="FaktaKilde.MEDL" />;
    default:
      return assertUnreachable(kilde);
  }
};
