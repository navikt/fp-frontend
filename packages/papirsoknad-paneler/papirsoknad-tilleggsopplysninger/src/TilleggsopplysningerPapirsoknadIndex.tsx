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
  formName: string;
}

const TilleggsopplysningerPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  readOnly,
  formName,
}) => (
  <RawIntlProvider value={intl}>
    <TilleggsopplysningerPanel
      readOnly={readOnly}
      formName={formName}
    />
  </RawIntlProvider>
);

export default TilleggsopplysningerPapirsoknadIndex;
