import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { SprakPanel } from './components/SprakPanel';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  readOnly: boolean;
}

export const SprakPapirsoknadIndex = ({ readOnly }: Props) => (
  <RawIntlProvider value={intl}>
    <SprakPanel readOnly={readOnly} />
  </RawIntlProvider>
);
