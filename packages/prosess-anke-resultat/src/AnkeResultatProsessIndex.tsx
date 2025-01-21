import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { AlleKodeverk, AnkeVurdering } from '@navikt/fp-types';

import BehandleResultatForm from './components/BehandleResultatForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  ankeVurdering: AnkeVurdering;
  alleKodeverk: AlleKodeverk;
}

export const AnkeResultatProsessIndex = ({ ankeVurdering, alleKodeverk }: Props) => (
  <RawIntlProvider value={intl}>
    <BehandleResultatForm ankeVurderingResultat={ankeVurdering.ankeVurderingResultat} alleKodeverk={alleKodeverk} />
  </RawIntlProvider>
);
