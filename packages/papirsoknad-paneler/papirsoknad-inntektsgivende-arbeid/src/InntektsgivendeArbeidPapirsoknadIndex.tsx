import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import InntektsgivendeArbeidPanel from './components/InntektsgivendeArbeidPanel';
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

const InntektsgivendeArbeidPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  readOnly,
  formName,
}) => (
  <RawIntlProvider value={intl}>
    <InntektsgivendeArbeidPanel
      readOnly={readOnly}
      formName={formName}
    />
  </RawIntlProvider>
);

export default InntektsgivendeArbeidPapirsoknadIndex;
