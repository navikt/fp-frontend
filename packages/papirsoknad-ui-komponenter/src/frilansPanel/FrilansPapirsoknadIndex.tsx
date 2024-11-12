import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';

import { FrilansPanel, FormValues } from './components/FrilansPanel';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  readOnly: boolean;
}

export const FrilansPapirsoknadIndex = ({ readOnly }: Props) => (
  <RawIntlProvider value={intl}>
    <FrilansPanel readOnly={readOnly} />
  </RawIntlProvider>
);

FrilansPapirsoknadIndex.buildInitialValues = () => FrilansPanel.buildInitialValues();

FrilansPapirsoknadIndex.transformValues = (formValues: FormValues) => FrilansPanel.transformValues(formValues);
