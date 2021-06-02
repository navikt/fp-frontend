import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { AlleKodeverk } from '@fpsak-frontend/types';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import { createIntl } from '@fpsak-frontend/utils';

import OppholdINorgePanel, { FormValues } from './components/OppholdINorgePanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  readOnly: boolean;
  form: string;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
}

interface StaticFunctions {
  buildInitialValues: () => FormValues;
  validate: (values: FormValues) => any
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

OppholdINorgePapirsoknadIndex.buildInitialValues = (): FormValues => OppholdINorgePanel.buildInitialValues();

OppholdINorgePapirsoknadIndex.validate = (values: FormValues) => OppholdINorgePanel.validate(values);

export default OppholdINorgePapirsoknadIndex;
