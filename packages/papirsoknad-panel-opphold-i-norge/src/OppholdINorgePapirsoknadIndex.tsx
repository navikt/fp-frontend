import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import OppholdINorgePanel, { FormValues } from './components/OppholdINorgePanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  readOnly: boolean;
}

interface StaticFunctions {
  buildInitialValues: () => any;
  validate?: (values: FormValues[]) => any
}

const OppholdINorgePapirsoknadIndex: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
}) => (
  <RawIntlProvider value={intl}>
    <OppholdINorgePanel
      readOnly={readOnly}
    />
  </RawIntlProvider>
);

OppholdINorgePapirsoknadIndex.buildInitialValues = () => OppholdINorgePanel.buildInitialValues();

OppholdINorgePapirsoknadIndex.validate = (values: FormValues[]) => OppholdINorgePanel.validate(values);

export default OppholdINorgePapirsoknadIndex;
