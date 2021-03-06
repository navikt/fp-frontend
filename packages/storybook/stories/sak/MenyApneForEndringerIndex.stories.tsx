import React from 'react';
import { action } from '@storybook/addon-actions';

import MenyApneForEndringerIndex from '@fpsak-frontend/sak-meny-apne-for-endringer';

export default {
  title: 'sak/sak-meny-apne-for-endringer',
  component: MenyApneForEndringerIndex,
};

export const visMenyForÅpneBehandlingForEndringer = () => (
  <MenyApneForEndringerIndex
    apneBehandlingForEndringer={action('button-click')}
    lukkModal={action('button-click')}
  />
);
