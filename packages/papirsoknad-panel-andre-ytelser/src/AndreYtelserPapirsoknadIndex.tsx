import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { KodeverkMedNavn } from '@fpsak-frontend/types';

import AndreYtelserPanel, { FormValues } from './components/AndreYtelserPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  readOnly: boolean;
  form: string;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  kunMiliterEllerSiviltjeneste?: boolean,
}

interface StaticFunctions {
  buildInitialValues: (andreYtelser: KodeverkMedNavn[]) => FormValues;
  validate?: (values: FormValues, andreYtelser: KodeverkMedNavn[]) => any,
  transformValues?: (values: FormValues, andreYtelser: KodeverkMedNavn[]) => any;
}

const AndreYtelserPapirsoknadIndex: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  form,
  alleKodeverk,
  kunMiliterEllerSiviltjeneste,
}) => (
  <RawIntlProvider value={intl}>
    <AndreYtelserPanel
      readOnly={readOnly}
      form={form}
      alleKodeverk={alleKodeverk}
      kunMiliterEllerSiviltjeneste={kunMiliterEllerSiviltjeneste}
    />
  </RawIntlProvider>
);

AndreYtelserPapirsoknadIndex.buildInitialValues = (andreYtelser: KodeverkMedNavn[]): FormValues => AndreYtelserPanel.buildInitialValues(andreYtelser);

AndreYtelserPapirsoknadIndex.validate = (values: FormValues, andreYtelser: KodeverkMedNavn[]) => AndreYtelserPanel.validate(values, andreYtelser);

AndreYtelserPapirsoknadIndex.transformValues = (values: FormValues, andreYtelser: KodeverkMedNavn[]) => AndreYtelserPanel.transformValues(values, andreYtelser);

export default AndreYtelserPapirsoknadIndex;
