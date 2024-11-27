import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { AlleKodeverk } from '@navikt/fp-types';

import { InntektsgivendeArbeidPanel } from './components/InntektsgivendeArbeidPanel';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
}

export const InntektsgivendeArbeidPapirsoknadIndex = ({ readOnly, alleKodeverk }: Props) => (
  <RawIntlProvider value={intl}>
    <InntektsgivendeArbeidPanel readOnly={readOnly} alleKodeverk={alleKodeverk} />
  </RawIntlProvider>
);

InntektsgivendeArbeidPapirsoknadIndex.initialValues = InntektsgivendeArbeidPanel.initialValues;

InntektsgivendeArbeidPapirsoknadIndex.transformValues = InntektsgivendeArbeidPanel.transformValues;
