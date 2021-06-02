import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@fpsak-frontend/utils';
import { BehandlingHenlagtPanel } from '@fpsak-frontend/behandling-felles';
import { Behandling } from '@fpsak-frontend/types';

const messages = {
  'BehandlingHenlagtPanel.Henlagt': 'Behandling er henlagt',
};
const intl = createIntl(messages);

export default {
  title: 'behandling/prosess/BehandlingHenlagtPanel',
  component: BehandlingHenlagtPanel,
  decorators: [withKnobs],
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
