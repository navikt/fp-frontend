import React, { FunctionComponent } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import messages from '../i18n/nb_NO.json';
import styles from './ukjentAdresseMeldingIndex.less';

const intl = createIntl(messages);

/**
 * UkjentAdresseMeldingIndex
 *
 * Viser en info tekst som informerer saksbehandlere at brukeren i behandlingen
 * har ikke en registrert adresse.
 */
const UkjentAdresseMeldingIndex: FunctionComponent = () => (
  <RawIntlProvider value={intl}>
    <div className={styles.ukjentAdresseMargins}>
      <AksjonspunktHelpTextHTML>
        <b><FormattedMessage id="UkjentAdresse.Text" /></b>
      </AksjonspunktHelpTextHTML>
    </div>
  </RawIntlProvider>
);

export default UkjentAdresseMeldingIndex;
