import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { AnkeVurdering, BehandlingAppKontekst } from '@navikt/fp-types';

import { BehandleAnkeForm } from './components/BehandleAnkeForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  ankeVurdering: AnkeVurdering;
  behandlinger: BehandlingAppKontekst[];
}

export const AnkeProsessIndex = ({ ankeVurdering, behandlinger }: Props) => (
  <RawIntlProvider value={intl}>
    <BehandleAnkeForm ankeVurdering={ankeVurdering} behandlinger={behandlinger} />
  </RawIntlProvider>
);
