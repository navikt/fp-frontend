import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import SprakPanel from './components/SprakPanel';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  readOnly: boolean;
}

const SprakPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  readOnly,
}) => (
  <RawIntlProvider value={intl}>
    <SprakPanel readOnly={readOnly} />
  </RawIntlProvider>
);

export default SprakPapirsoknadIndex;
