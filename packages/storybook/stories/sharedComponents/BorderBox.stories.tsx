import React from 'react';

import { BorderBox } from '@fpsak-frontend/shared-components';

export default {
  title: 'sharedComponents/BorderBox',
  component: BorderBox,
};

export const visBoksDerEnIkkeHarFeil = () => (
  <BorderBox error={false}>
    Dette er en tekst
  </BorderBox>
);

export const visBoksDerEnHarFeil = () => (
  <BorderBox error>
    Dette er en tekst
  </BorderBox>
);
