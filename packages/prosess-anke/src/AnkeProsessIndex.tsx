import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { AlleKodeverk, AnkeVurdering } from '@fpsak-frontend/types';
import BehandleAnkeForm, { BehandlingInfo } from './components/BehandleAnkeForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  ankeVurdering: AnkeVurdering;
  behandlinger: BehandlingInfo[];
  alleKodeverk: AlleKodeverk;
}

const AnkeProsessIndex: FunctionComponent<OwnProps> = ({
  ankeVurdering,
  behandlinger,
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
    <BehandleAnkeForm
      ankeVurdering={ankeVurdering}
      behandlinger={behandlinger}
      alleKodeverk={alleKodeverk}
    />
  </RawIntlProvider>
);

export default AnkeProsessIndex;
