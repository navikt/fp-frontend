import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { KodeverkMedNavn } from '@fpsak-frontend/types';

import InntektsgivendeArbeidPanel, { FormValues } from './components/InntektsgivendeArbeidPanel';
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

interface StaticFunctions {
  buildInitialValues: () => FormValues;
  validate?: (values: FormValues) => any,
}

const InntektsgivendeArbeidPapirsoknadIndex: FunctionComponent<OwnProps> & StaticFunctions = ({
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

InntektsgivendeArbeidPapirsoknadIndex.buildInitialValues = (): FormValues => InntektsgivendeArbeidPanel.buildInitialValues();

InntektsgivendeArbeidPapirsoknadIndex.validate = (values: FormValues) => InntektsgivendeArbeidPanel.validate(values);

export default InntektsgivendeArbeidPapirsoknadIndex;
