import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { AnkeVurdering } from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';

import { AlleKodeverk } from '@navikt/ft-types';
import BehandleAnkeForm, { BehandlingInfo } from './components/BehandleAnkeForm';
import { BrevData } from './components/PreviewAnkeLink';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  ankeVurdering: AnkeVurdering;
  previewCallback: (data: BrevData) => Promise<any>;
  behandlinger: BehandlingInfo[];
  alleKodeverk: AlleKodeverk;
}

const AnkeProsessIndex: FunctionComponent<OwnProps> = ({
  ankeVurdering,
  behandlinger,
  previewCallback,
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
    <BehandleAnkeForm
      ankeVurdering={ankeVurdering}
      behandlinger={behandlinger}
      previewCallback={previewCallback}
      alleKodeverk={alleKodeverk}
    />
  </RawIntlProvider>
);

export default AnkeProsessIndex;
