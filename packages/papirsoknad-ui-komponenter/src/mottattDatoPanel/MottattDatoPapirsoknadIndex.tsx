import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { MottattDatoPanel } from './components/MottattDatoPanel';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  readOnly: boolean;
}

export const MottattDatoPapirsoknadIndex = ({ readOnly }: Props) => (
  <RawIntlProvider value={intl}>
    <MottattDatoPanel readOnly={readOnly} />
  </RawIntlProvider>
);
