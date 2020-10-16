import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import TilleggsopplysningerPanel from './components/TilleggsopplysningerPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  readOnly: boolean;
}

const TilleggsopplysningerPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  readOnly,
}) => (
  <RawIntlProvider value={intl}>
    <TilleggsopplysningerPanel
      readOnly={readOnly}
    />
  </RawIntlProvider>
);

export default TilleggsopplysningerPapirsoknadIndex;
