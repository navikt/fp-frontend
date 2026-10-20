import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { AlleKodeverk } from '@navikt/fp-types';

import { InntektsgivendeArbeidPanel } from './components/InntektsgivendeArbeidPanel';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  alleKodeverk: AlleKodeverk;
}

export const InntektsgivendeArbeidPapirsoknadIndex = ({ alleKodeverk }: Props) => (
  <RawIntlProvider value={intl}>
    <InntektsgivendeArbeidPanel alleKodeverk={alleKodeverk} />
  </RawIntlProvider>
);

InntektsgivendeArbeidPapirsoknadIndex.initialValues = InntektsgivendeArbeidPanel.initialValues;

InntektsgivendeArbeidPapirsoknadIndex.transformValues = InntektsgivendeArbeidPanel.transformValues;
