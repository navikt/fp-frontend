import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { Opptjening } from '@navikt/fp-types';

import { OpptjeningVilkarForm } from './components/OpptjeningVilkarForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  opptjening: Opptjening;
  erSvpFagsak?: boolean;
}

export const OpptjeningVilkarProsessIndex = ({ opptjening, erSvpFagsak = false }: Props) => (
  <RawIntlProvider value={intl}>
    <OpptjeningVilkarForm fastsattOpptjening={opptjening.fastsattOpptjening} erSvpFagsak={erSvpFagsak} />
  </RawIntlProvider>
);
