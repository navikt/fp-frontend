import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { InntektArbeidYtelse } from '@navikt/fp-types';

import YtelserFaktaPanel from './components/YtelserFaktaPanel';

import messages from '../i18n/nb_NO.json';

interface Props {
  inntektArbeidYtelse: InntektArbeidYtelse;
}

const intl = createIntl(messages);

export const YtelserFaktaIndex = ({ inntektArbeidYtelse }: Props) => (
  <RawIntlProvider value={intl}>
    <YtelserFaktaPanel inntektArbeidYtelse={inntektArbeidYtelse} />
  </RawIntlProvider>
);
