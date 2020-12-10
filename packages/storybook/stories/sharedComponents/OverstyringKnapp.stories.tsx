import React from 'react';

import { OverstyringKnapp } from '@fpsak-frontend/shared-components';

export default {
  title: 'sharedComponents/OverstyringKnapp',
  component: OverstyringKnapp,
};

export const visDefaultOverstyringsknapp = () => (
  <OverstyringKnapp />
);

export const visOverstyringsknappNårOverstyrt = () => (
  <OverstyringKnapp erOverstyrt />
);
