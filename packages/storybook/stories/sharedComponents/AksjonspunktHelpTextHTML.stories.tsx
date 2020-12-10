import React from 'react';

import { AksjonspunktHelpTextHTML } from '@fpsak-frontend/shared-components';

export default {
  title: 'sharedComponents/AksjonspunktHelpTextHTML',
  component: AksjonspunktHelpTextHTML,
};

export const visAksjonspunkthjelpetekster = () => (
  <AksjonspunktHelpTextHTML>
    {['Dette er en aksjonspunktmelding', 'Dette er en annen aksjonspunktmelding']}
  </AksjonspunktHelpTextHTML>
);
