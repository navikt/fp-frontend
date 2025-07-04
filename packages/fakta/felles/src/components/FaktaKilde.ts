import { assertUnreachable, createIntl } from '@navikt/ft-utils';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

export type FaktaKilde = 'SØKNAD' | 'FOLKEREGISTER' | 'MEDL' | 'SAKSBEHANDLER';

export const getLabelForFaktaKilde = (kilde: FaktaKilde) => {
  switch (kilde) {
    case 'SØKNAD':
      return intl.formatMessage({ id: 'FaktaKilde.Soknad' });
    case 'FOLKEREGISTER':
      return intl.formatMessage({ id: 'FaktaKilde.FREG' });
    case 'MEDL':
      return intl.formatMessage({ id: 'FaktaKilde.MEDL' });
    case 'SAKSBEHANDLER':
      return intl.formatMessage({ id: 'FaktaKilde.SBH' });
    default:
      return assertUnreachable(kilde);
  }
};
