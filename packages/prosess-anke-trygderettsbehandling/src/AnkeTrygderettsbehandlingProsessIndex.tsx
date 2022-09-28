import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { AlleKodeverk } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import { AnkeVurdering } from '@fpsak-frontend/types';

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
