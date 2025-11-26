import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { FastsattOpptjening } from '@navikt/fp-types';

import { OpptjeningVilkarForm } from './components/OpptjeningVilkarForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  fastsattOpptjening: FastsattOpptjening;
}

export const OpptjeningVilkarProsessIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <OpptjeningVilkarForm {...props} />
  </RawIntlProvider>
);
