import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import FrilansPanel, { FormValues } from './components/FrilansPanel';
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

interface StaticFunctions {
  buildInitialValues?: () => any;
  validate: (values: FormValues) => any;
}

const FrilansPapirsoknadIndex: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  formName,
}) => (
  <RawIntlProvider value={intl}>
    <FrilansPanel
      readOnly={readOnly}
      formName={formName}
    />
  </RawIntlProvider>
);

FrilansPapirsoknadIndex.buildInitialValues = () => FrilansPanel.buildInitialValues();

FrilansPapirsoknadIndex.validate = (values: FormValues) => FrilansPanel.validate(values);

export default FrilansPapirsoknadIndex;
