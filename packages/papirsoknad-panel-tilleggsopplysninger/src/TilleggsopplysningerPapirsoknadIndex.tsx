import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@fpsak-frontend/utils';

import TilleggsopplysningerPanel from './components/TilleggsopplysningerPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  readOnly: boolean;
}

const TilleggsopplysningerPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  readOnly,
}) => (
  <RawIntlProvider value={intl}>
    <TilleggsopplysningerPanel
      readOnly={readOnly}
    />
  </RawIntlProvider>
);

export default TilleggsopplysningerPapirsoknadIndex;
