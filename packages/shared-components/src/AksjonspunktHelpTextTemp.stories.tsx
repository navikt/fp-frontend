import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import AksjonspunktHelpTextTemp from './AksjonspunktHelpTextTemp';

export default {
  title: 'sharedComponents/AksjonspunktHelpTextTemp',
  component: AksjonspunktHelpTextTemp,
};

export const HjelpeteksterNårAksjonspunktetErÅpent: Story = () => (
  <AksjonspunktHelpTextTemp isAksjonspunktOpen>
    {['Dette er en aksjonspunktmelding', 'Dette er en annen aksjonspunktmelding']}
  </AksjonspunktHelpTextTemp>
);

export const HjelpeteksterNårAksjonspunktetErLukket: Story = () => (
  <AksjonspunktHelpTextTemp isAksjonspunktOpen={false}>
    {['Dette er en aksjonspunktmelding', 'Dette er en annen aksjonspunktmelding']}
  </AksjonspunktHelpTextTemp>
);
