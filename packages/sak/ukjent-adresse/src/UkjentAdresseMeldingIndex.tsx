import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { Alert } from '@navikt/ds-react';
import { createIntl } from '@navikt/ft-utils';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

/**
 * UkjentAdresseMeldingIndex
 *
 * Viser en info tekst som informerer saksbehandlere at brukeren i behandlingen
 * har ikke en registrert adresse.
 */
export const UkjentAdresseMeldingIndex = () => (
  <RawIntlProvider value={intl}>
    <Alert variant="warning" size="small">
      <FormattedMessage id="UkjentAdresse.Text" tagName="b" />
    </Alert>
  </RawIntlProvider>
);
