import React from 'react';

import { FadingPanel } from '@fpsak-frontend/shared-components';

export default {
  title: 'sharedComponents/FadingPanel',
  component: FadingPanel,
};

export const visPanel = () => (
  <FadingPanel withoutTopMargin>
    Dette er en tekst
  </FadingPanel>
);
