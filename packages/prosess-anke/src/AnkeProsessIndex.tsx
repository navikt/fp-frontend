import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { AlleKodeverk, AnkeVurdering } from '@navikt/fp-types';

import BehandleAnkeForm, { BehandlingInfo } from './components/BehandleAnkeForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  ankeVurdering: AnkeVurdering;
  behandlinger: BehandlingInfo[];
  alleKodeverk: AlleKodeverk;
}

export const AnkeProsessIndex = ({ ankeVurdering, behandlinger, alleKodeverk }: Props) => (
  <RawIntlProvider value={intl}>
    <BehandleAnkeForm ankeVurdering={ankeVurdering} behandlinger={behandlinger} alleKodeverk={alleKodeverk} />
  </RawIntlProvider>
);
