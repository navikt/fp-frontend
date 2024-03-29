import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';
import { AlleKodeverk } from '@navikt/fp-types';

import InntektsgivendeArbeidPanel, { FormValues } from './components/InntektsgivendeArbeidPanel';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
}

interface StaticFunctions {
  buildInitialValues: () => FormValues;
}

const InntektsgivendeArbeidPapirsoknadIndex: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
    <InntektsgivendeArbeidPanel readOnly={readOnly} alleKodeverk={alleKodeverk} />
  </RawIntlProvider>
);

InntektsgivendeArbeidPapirsoknadIndex.buildInitialValues = () => InntektsgivendeArbeidPanel.buildInitialValues();

export default InntektsgivendeArbeidPapirsoknadIndex;
