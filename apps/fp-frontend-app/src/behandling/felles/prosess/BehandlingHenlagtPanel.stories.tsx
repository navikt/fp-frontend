import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import BehandlingHenlagtPanel from './BehandlingHenlagtPanel';

const messages = {
  'BehandlingHenlagtPanel.Henlagt': 'Behandling er henlagt',
};
const intl = createIntl(messages);

export default {
  title: 'app/prosess/BehandlingHenlagtPanel',
  component: BehandlingHenlagtPanel,
};

export const visBehandlingErHenlagtProsessPanel = () => (
  <RawIntlProvider value={intl}>
    <BehandlingHenlagtPanel valgtProsessSteg="henlagt" registrerProsessPanel={() => undefined} />
  </RawIntlProvider>
);
