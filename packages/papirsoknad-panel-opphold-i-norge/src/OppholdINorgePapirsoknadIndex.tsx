import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { KodeverkMedNavn } from '@fpsak-frontend/types';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';

import OppholdINorgePanel, { FormValues } from './components/OppholdINorgePanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  readOnly: boolean;
  form: string;
  soknadData: SoknadData;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

interface StaticFunctions {
  buildInitialValues: () => any;
  validate?: (values: FormValues) => any
}

const OppholdINorgePapirsoknadIndex: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  form,
  soknadData,
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
    <OppholdINorgePanel
      readOnly={readOnly}
      form={form}
      soknadData={soknadData}
      alleKodeverk={alleKodeverk}
    />
  </RawIntlProvider>
);

OppholdINorgePapirsoknadIndex.buildInitialValues = () => OppholdINorgePanel.buildInitialValues();

OppholdINorgePapirsoknadIndex.validate = (values: FormValues) => OppholdINorgePanel.validate(values);

export default OppholdINorgePapirsoknadIndex;
