import React from 'react';
import { action } from '@storybook/addon-actions';

import MenyTaAvVentIndex from '@fpsak-frontend/sak-meny-ta-av-vent';

export default {
  title: 'sak/sak-meny-ta-av-vent',
  component: MenyTaAvVentIndex,
};

export const visMenyForÅTaBehandlingAvVent = () => (
  <MenyTaAvVentIndex
    behandlingVersjon={2}
    taBehandlingAvVent={action('button-click')}
    lukkModal={action('button-click')}
  />
);
