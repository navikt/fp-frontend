import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import MottattDatoPanel from './components/MottattDatoPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  readOnly: boolean;
}

const MottattDatoPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  readOnly,
}) => (
  <RawIntlProvider value={intl}>
    <MottattDatoPanel
      readOnly={readOnly}
    />
  </RawIntlProvider>
);

export default MottattDatoPapirsoknadIndex;
