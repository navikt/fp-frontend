import React from 'react';

import { AksjonspunktBox } from '@fpsak-frontend/shared-components';

export default {
  title: 'sharedComponents/AksjonspunktBox',
  component: AksjonspunktBox,
};

export const visModalDerAksjonspunktErÅpent = () => (
  <AksjonspunktBox erAksjonspunktApent>
    <div>Dette er en aksjonspunktboks</div>
  </AksjonspunktBox>
);

export const visModalDerAksjonspunktErLukket = () => (
  <AksjonspunktBox erAksjonspunktApent={false}>
    <div>Dette er en aksjonspunktboks</div>
  </AksjonspunktBox>
);
