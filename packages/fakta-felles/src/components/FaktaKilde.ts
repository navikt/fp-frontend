import { createIntl } from '@navikt/ft-utils';
import assertUnreachable from '@navikt/fp-fakta-uttaksdokumentasjon/src/utils/switchCaseUtils';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

export enum FaktaKilde {
  SOKNAD,
  FREG,
  MEDL,
}

export const getLabelForFaktaKilde = (kilde: FaktaKilde) => {
  switch (kilde) {
    case FaktaKilde.SOKNAD:
      return intl.formatMessage({ id: 'FaktaKilde.Soknad' });
    case FaktaKilde.FREG:
      return intl.formatMessage({ id: 'FaktaKilde.FREG' });
    case FaktaKilde.MEDL:
      return intl.formatMessage({ id: 'FaktaKilde.MEDL' });
    default:
      return assertUnreachable(kilde);
  }
};
