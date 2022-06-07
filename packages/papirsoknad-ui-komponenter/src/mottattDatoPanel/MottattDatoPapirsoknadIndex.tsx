import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import MottattDatoPanel from './components/MottattDatoPanel';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  readOnly: boolean;
}

const MottattDatoPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  readOnly,
}) => (
  <RawIntlProvider value={intl}>
    <MottattDatoPanel readOnly={readOnly} />
  </RawIntlProvider>
);

export default MottattDatoPapirsoknadIndex;
