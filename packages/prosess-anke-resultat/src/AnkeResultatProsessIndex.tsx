import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';

import { AlleKodeverk, AnkeVurdering } from '@navikt/fp-types';
import BehandleResultatForm from './components/BehandleResultatForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  ankeVurdering: AnkeVurdering;
  alleKodeverk: AlleKodeverk;
}

const AnkeResultatProsessIndex: FunctionComponent<OwnProps> = ({ ankeVurdering, alleKodeverk }) => (
  <RawIntlProvider value={intl}>
    <BehandleResultatForm ankeVurderingResultat={ankeVurdering.ankeVurderingResultat} alleKodeverk={alleKodeverk} />
  </RawIntlProvider>
);

export default AnkeResultatProsessIndex;
