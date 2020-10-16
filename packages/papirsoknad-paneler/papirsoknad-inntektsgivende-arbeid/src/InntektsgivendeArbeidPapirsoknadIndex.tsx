import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { KodeverkMedNavn } from '@fpsak-frontend/types';

import InntektsgivendeArbeidPanel from './components/InntektsgivendeArbeidPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  readOnly: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

const InntektsgivendeArbeidPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  readOnly,
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
    <InntektsgivendeArbeidPanel
      readOnly={readOnly}
      alleKodeverk={alleKodeverk}
    />
  </RawIntlProvider>
);

export default InntektsgivendeArbeidPapirsoknadIndex;
