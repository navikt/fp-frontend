import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import styles from './ukjentAdresseMeldingIndex.module.css';

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
    <div className={styles.ukjentAdresseMargins}>
      <AksjonspunktHelpTextHTML>
        <b>
          <FormattedMessage id="UkjentAdresse.Text" />
        </b>
      </AksjonspunktHelpTextHTML>
    </div>
  </RawIntlProvider>
);
