import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { AlleKodeverk } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';

import InntektsgivendeArbeidPanel, { FormValues } from './components/InntektsgivendeArbeidPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
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
