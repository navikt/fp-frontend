import React from 'react';

import { AvsnittSkiller } from '@fpsak-frontend/shared-components';

export default {
  title: 'sharedComponents/AvsnittSkiller',
  component: AvsnittSkiller,
};

export const visAvsnittskiller = () => (
  <div>
    Dette er en tekst
    <AvsnittSkiller />
    Dette er en tekst
  </div>
);
