import React, { FunctionComponent, ReactNode } from 'react';
import { RawIntlProvider } from 'react-intl';
import { AlleKodeverk } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import AnnenForelderPanel from './components/AnnenForelderPanel';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  permisjonRettigheterPanel?: ReactNode;
}

const AnnenForelderPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  readOnly,
  alleKodeverk,
  permisjonRettigheterPanel,
}) => (
  <RawIntlProvider value={intl}>
    <AnnenForelderPanel
      readOnly={readOnly}
      alleKodeverk={alleKodeverk}
      permisjonRettigheterPanel={permisjonRettigheterPanel}
    />
  </RawIntlProvider>
);

export default AnnenForelderPapirsoknadIndex;
