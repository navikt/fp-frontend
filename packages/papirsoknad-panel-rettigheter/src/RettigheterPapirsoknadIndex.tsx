import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import RettigheterPanel from './components/RettigheterPanel';
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

const RettigheterPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  readOnly,
  formName,
}) => (
  <RawIntlProvider value={intl}>
    <RettigheterPanel
      readOnly={readOnly}
      formName={formName}
    />
  </RawIntlProvider>
);

export default RettigheterPapirsoknadIndex;
