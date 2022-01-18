import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import AksjonspunktHelpTextHTML from './AksjonspunktHelpTextHTML';

export default {
  title: 'sharedComponents/AksjonspunktHelpTextHTML',
  component: AksjonspunktHelpTextHTML,
};

export const Default: Story = () => (
  <AksjonspunktHelpTextHTML>
    {['Dette er en aksjonspunktmelding', 'Dette er en annen aksjonspunktmelding']}
  </AksjonspunktHelpTextHTML>
);

export const SkalIkkeVisesNårDetIkkeErAksjonspunkter: Story = () => (
  <AksjonspunktHelpTextHTML>
    {[]}
  </AksjonspunktHelpTextHTML>
);
