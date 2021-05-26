import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { AlleKodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';

import AndreYtelserPanel, { FormValues } from './components/AndreYtelserPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  readOnly: boolean;
  form: string;
  alleKodeverk: AlleKodeverk;
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
