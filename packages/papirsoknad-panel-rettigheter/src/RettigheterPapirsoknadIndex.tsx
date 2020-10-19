import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';

import RettigheterPanel from './components/RettigheterPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

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
