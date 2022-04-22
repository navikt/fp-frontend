import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { AlleKodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';

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
  validate: (values: FormValues, andreYtelser: KodeverkMedNavn[]) => any,
  transformValues: (values: FormValues, andreYtelser: KodeverkMedNavn[]) => any;
}

const AndreYtelserPapirsoknadIndex: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  form,
  alleKodeverk,
  kunMiliterEllerSiviltjeneste,
}) => (
  <RawIntlProvider value={intl}>
    { /* @ts-ignore Fiks cannot be used as a JSX component */ }
    <AndreYtelserPanel
      readOnly={readOnly}
      form={form}
      alleKodeverk={alleKodeverk}
      kunMiliterEllerSiviltjeneste={kunMiliterEllerSiviltjeneste}
    />
  </RawIntlProvider>
);

AndreYtelserPapirsoknadIndex.buildInitialValues = (andreYtelser) => AndreYtelserPanel.buildInitialValues(andreYtelser);

AndreYtelserPapirsoknadIndex.validate = (values, andreYtelser) => AndreYtelserPanel.validate(values, andreYtelser);

AndreYtelserPapirsoknadIndex.transformValues = (values, andreYtelser) => AndreYtelserPanel.transformValues(values, andreYtelser);

export default AndreYtelserPapirsoknadIndex;
