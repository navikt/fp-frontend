import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';
import { AlleKodeverk } from '@navikt/ft-types';

import OppholdINorgePanel, { FormValues } from './components/OppholdINorgePanel';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  readOnly: boolean;
  erAdopsjon: boolean;
  alleKodeverk: AlleKodeverk;
  mottattDato?: string;
}

interface StaticFunctions {
  buildInitialValues: () => FormValues;
  transformValues?: (formValues: FormValues) => FormValues;
}

const OppholdINorgePapirsoknadIndex: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  erAdopsjon,
  alleKodeverk,
  mottattDato,
}) => (
  <RawIntlProvider value={intl}>
    <OppholdINorgePanel
      readOnly={readOnly}
      erAdopsjon={erAdopsjon}
      alleKodeverk={alleKodeverk}
      mottattDato={mottattDato}
    />
  </RawIntlProvider>
);

OppholdINorgePapirsoknadIndex.buildInitialValues = OppholdINorgePanel.buildInitialValues;

OppholdINorgePapirsoknadIndex.transformValues = OppholdINorgePanel.transformValues;

export default OppholdINorgePapirsoknadIndex;
