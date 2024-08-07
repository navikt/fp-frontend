import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MenyApneForEndringerIndex from './MenyApneForEndringerIndex';

export default {
  title: 'sak/sak-meny-apne-for-endringer',
  component: MenyApneForEndringerIndex,
};

const Template: StoryFn<{
  apneBehandlingForEndringer: () => void;
  lukkModal: () => void;
}> = ({ apneBehandlingForEndringer, lukkModal }) => (
  <MenyApneForEndringerIndex apneBehandlingForEndringer={apneBehandlingForEndringer} lukkModal={lukkModal} />
);

export const Default = Template.bind({});
Default.args = {
  apneBehandlingForEndringer: action('button-click'),
  lukkModal: action('button-click'),
};
