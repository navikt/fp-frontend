import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';

import RettigheterPanel from './components/RettigheterPanel';
import SoknadData from '../felles/SoknadData';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  readOnly: boolean;
  soknadData: SoknadData;
}

const RettigheterPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  readOnly,
  soknadData,
}) => (
  <RawIntlProvider value={intl}>
    <RettigheterPanel
      readOnly={readOnly}
      soknadData={soknadData}
    />
  </RawIntlProvider>
);

export default RettigheterPapirsoknadIndex;
