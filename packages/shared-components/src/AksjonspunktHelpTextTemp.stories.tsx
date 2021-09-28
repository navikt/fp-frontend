import React from 'react';

import AksjonspunktHelpTextTemp from './AksjonspunktHelpTextTemp';

export default {
  title: 'sharedComponents/AksjonspunktHelpTextTemp',
  component: AksjonspunktHelpTextTemp,
};

export const visHjelpeteksterNårAksjonspunktetErÅpent = () => (
  <AksjonspunktHelpTextTemp isAksjonspunktOpen>
    {['Dette er en aksjonspunktmelding', 'Dette er en annen aksjonspunktmelding']}
  </AksjonspunktHelpTextTemp>
);

export const visHjelpeteksterNårAksjonspunktetErLukket = () => (
  <AksjonspunktHelpTextTemp isAksjonspunktOpen={false}>
    {['Dette er en aksjonspunktmelding', 'Dette er en annen aksjonspunktmelding']}
  </AksjonspunktHelpTextTemp>
);
