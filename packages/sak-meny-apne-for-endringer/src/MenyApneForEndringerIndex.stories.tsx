import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import MenyApneForEndringerIndex from './MenyApneForEndringerIndex';

export default {
  title: 'sak/sak-meny-apne-for-endringer',
  component: MenyApneForEndringerIndex,
};

const Template: Story<{
  apneBehandlingForEndringer: () => void;
  lukkModal: () => void;
}> = ({
  apneBehandlingForEndringer,
  lukkModal,
}) => (
  <MenyApneForEndringerIndex
    apneBehandlingForEndringer={apneBehandlingForEndringer}
    lukkModal={lukkModal}
  />
);

export const Default = Template.bind({});
Default.args = {
  apneBehandlingForEndringer: action('button-click'),
  lukkModal: action('button-click'),
};
