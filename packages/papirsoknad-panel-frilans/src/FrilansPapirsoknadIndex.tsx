import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@fpsak-frontend/utils';

import FrilansPanel, { FormValues } from './components/FrilansPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  readOnly: boolean;
  formName: string;
}

interface StaticFunctions {
  buildInitialValues?: () => FormValues;
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

FrilansPapirsoknadIndex.buildInitialValues = (): FormValues => FrilansPanel.buildInitialValues();

FrilansPapirsoknadIndex.validate = (values: FormValues) => FrilansPanel.validate(values);

export default FrilansPapirsoknadIndex;
