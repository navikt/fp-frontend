import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { BehandlingHenlagtPanel } from '@fpsak-frontend/behandling-felles';

const intl = createIntl({
  locale: 'nb-NO',
  messages: {
    'BehandlingHenlagtPanel.Henlagt': 'Behandling er henlagt',
  },
}, createIntlCache());

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
    />
  </RawIntlProvider>
);
