import React from 'react';

import AksjonspunktBox from './AksjonspunktBox';

export default {
  title: 'sharedComponents/AksjonspunktBox',
  component: AksjonspunktBox,
};

export const visBoksDerAksjonspunktErÅpent = () => (
  <AksjonspunktBox erAksjonspunktApent erIkkeGodkjentAvBeslutter={false}>
    <div>Dette er en aksjonspunktboks</div>
  </AksjonspunktBox>
);

export const visBoksDerAksjonspunktErLukket = () => (
  <AksjonspunktBox erAksjonspunktApent={false} erIkkeGodkjentAvBeslutter={false}>
    <div>Dette er en aksjonspunktboks</div>
  </AksjonspunktBox>
);

export const visBoksDerAksjonspunktetIkkeErGodkjentAvBeslutter = () => (
  <AksjonspunktBox erAksjonspunktApent erIkkeGodkjentAvBeslutter>
    <div>Dette er en aksjonspunktboks</div>
  </AksjonspunktBox>
);
