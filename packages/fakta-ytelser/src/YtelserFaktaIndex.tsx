import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { KodeverkType } from '@navikt/fp-kodeverk';
import { InntektArbeidYtelse, AlleKodeverk } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';

import YtelserFaktaPanel from './components/YtelserFaktaPanel';
import messages from '../i18n/nb_NO.json';

interface OwnProps {
  inntektArbeidYtelse: InntektArbeidYtelse;
  alleKodeverk: AlleKodeverk;
}

const intl = createIntl(messages);

const YtelserFaktaIndex: FunctionComponent<OwnProps> = ({ inntektArbeidYtelse, alleKodeverk }) => (
  <RawIntlProvider value={intl}>
    <YtelserFaktaPanel
      inntektArbeidYtelse={inntektArbeidYtelse}
    />
  </RawIntlProvider>
);

export default YtelserFaktaIndex;
