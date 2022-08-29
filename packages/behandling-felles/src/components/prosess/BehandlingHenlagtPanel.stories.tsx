import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import { Behandling } from '@navikt/ft-types';

import BehandlingHenlagtPanel from './BehandlingHenlagtPanel';

const messages = {
  'BehandlingHenlagtPanel.Henlagt': 'Behandling er henlagt',
};
const intl = createIntl(messages);

export default {
  title: 'behandling/prosess/BehandlingHenlagtPanel',
  component: BehandlingHenlagtPanel,
};

export const visBehandlingErHenlagtProsessPanel = () => (
  <RawIntlProvider value={intl}>
    <BehandlingHenlagtPanel
      valgtProsessSteg="henlagt"
      registrerProsessPanel={() => undefined}
      behandling={{ versjon: 1 } as Behandling}
    />
  </RawIntlProvider>
);
