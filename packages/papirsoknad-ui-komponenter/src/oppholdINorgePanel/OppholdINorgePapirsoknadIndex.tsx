import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { AlleKodeverk } from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';

import SoknadData from '../felles/SoknadData';
import OppholdINorgePanel, { FormValues } from './components/OppholdINorgePanel';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
}

interface StaticFunctions {
  buildInitialValues: () => FormValues;
}

const OppholdINorgePapirsoknadIndex: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  soknadData,
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
    <OppholdINorgePanel
      readOnly={readOnly}
      soknadData={soknadData}
      alleKodeverk={alleKodeverk}
    />
  </RawIntlProvider>
);

OppholdINorgePapirsoknadIndex.buildInitialValues = (): FormValues => OppholdINorgePanel.buildInitialValues();

export default OppholdINorgePapirsoknadIndex;
