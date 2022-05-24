import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';

import FrilansPanel, { FormValues } from './components/FrilansPanel';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  readOnly: boolean;
}

interface StaticFunctions {
  buildInitialValues: () => FormValues;
}

const FrilansPapirsoknadIndex: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
}) => (
  <RawIntlProvider value={intl}>
    <FrilansPanel readOnly={readOnly} />
  </RawIntlProvider>
);

FrilansPapirsoknadIndex.buildInitialValues = () => FrilansPanel.buildInitialValues();

export default FrilansPapirsoknadIndex;
