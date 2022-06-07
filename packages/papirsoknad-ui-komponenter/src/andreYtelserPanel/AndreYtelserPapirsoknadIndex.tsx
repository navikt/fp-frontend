import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import AndreYtelserPanel, { FormValues } from './components/AndreYtelserPanel';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  kunMiliterEllerSiviltjeneste?: boolean,
}

interface StaticFunctions {
  buildInitialValues: (andreYtelser: KodeverkMedNavn[]) => FormValues;
  transformValues: (values: FormValues, andreYtelser: KodeverkMedNavn[]) => any;
}

const AndreYtelserPapirsoknadIndex: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  alleKodeverk,
  kunMiliterEllerSiviltjeneste,
}) => (
  <RawIntlProvider value={intl}>
    <AndreYtelserPanel
      readOnly={readOnly}
      alleKodeverk={alleKodeverk}
      kunMiliterEllerSiviltjeneste={kunMiliterEllerSiviltjeneste}
    />
  </RawIntlProvider>
);

AndreYtelserPapirsoknadIndex.buildInitialValues = (andreYtelser) => AndreYtelserPanel.buildInitialValues(andreYtelser);

AndreYtelserPapirsoknadIndex.transformValues = (values, andreYtelser) => AndreYtelserPanel.transformValues(values, andreYtelser);

export default AndreYtelserPapirsoknadIndex;
