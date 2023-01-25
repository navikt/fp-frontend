import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';

import { AnkeVurdering, AlleKodeverk } from '@navikt/fp-types';

import TrygderettsbehandlingForm from './components/TrygderettsbehandlingForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  ankeVurdering: AnkeVurdering;
  alleKodeverk: AlleKodeverk;
}

const AnkeTrygderettsbehandlingProsessIndex: FunctionComponent<OwnProps> = ({
  ankeVurdering,
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
    <TrygderettsbehandlingForm
      ankeVurdering={ankeVurdering}
      alleKodeverk={alleKodeverk}
    />
  </RawIntlProvider>
);

export default AnkeTrygderettsbehandlingProsessIndex;
