import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { AnkeVurdering } from '@navikt/fp-types';

import { BehandleResultatForm } from './components/BehandleResultatForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  ankeVurdering: AnkeVurdering;
}

export const AnkeResultatProsessIndex = ({ ankeVurdering }: Props) => (
  <RawIntlProvider value={intl}>
    <BehandleResultatForm ankeVurderingResultat={ankeVurdering.ankeVurderingResultat} />
  </RawIntlProvider>
);
