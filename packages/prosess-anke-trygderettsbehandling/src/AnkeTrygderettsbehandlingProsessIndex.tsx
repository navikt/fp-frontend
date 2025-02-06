import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { AnkeVurdering } from '@navikt/fp-types';

import { TrygderettsbehandlingForm } from './components/TrygderettsbehandlingForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  ankeVurdering: AnkeVurdering;
}

export const AnkeTrygderettsbehandlingProsessIndex = ({ ankeVurdering }: Props) => (
  <RawIntlProvider value={intl}>
    <TrygderettsbehandlingForm ankeVurdering={ankeVurdering} />
  </RawIntlProvider>
);
