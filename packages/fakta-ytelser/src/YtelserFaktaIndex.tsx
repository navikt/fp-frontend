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
      relatertYtelseTyper={alleKodeverk[KodeverkType.RELATERT_YTELSE_TYPE]}
      relatertYtelseStatus={[
        ...alleKodeverk[KodeverkType.FAGSAK_STATUS],
        ...alleKodeverk[KodeverkType.RELATERT_YTELSE_TILSTAND],
      ]}
    />
  </RawIntlProvider>
);

export default YtelserFaktaIndex;
