import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { InntektArbeidYtelse, AlleKodeverk } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';

import YtelserFaktaPanel from './components/YtelserFaktaPanel';
import messages from '../i18n/nb_NO.json';

interface OwnProps {
  inntektArbeidYtelse: InntektArbeidYtelse;
  alleKodeverk: AlleKodeverk;
}

const intl = createIntl(messages);

const YtelserFaktaIndex: FunctionComponent<OwnProps> = ({
  inntektArbeidYtelse,
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
    <YtelserFaktaPanel
      inntektArbeidYtelse={inntektArbeidYtelse}
      relatertYtelseTyper={alleKodeverk[kodeverkTyper.RELATERT_YTELSE_TYPE]}
      relatertYtelseStatus={[
        ...alleKodeverk[kodeverkTyper.FAGSAK_STATUS],
        ...alleKodeverk[kodeverkTyper.RELATERT_YTELSE_TILSTAND],
      ]}
    />
  </RawIntlProvider>
);

export default YtelserFaktaIndex;
