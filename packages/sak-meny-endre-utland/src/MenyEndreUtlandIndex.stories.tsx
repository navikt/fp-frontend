import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import MenyEndreUtlandIndex from './MenyEndreUtlandIndex';

export default {
  title: 'sak/sak-meny-endre-utland',
  component: MenyEndreUtlandIndex,
};

const Template: Story<{
  endreUtlandMarkering: () => void;
  lukkModal: () => void;
}> = ({
  endreUtlandMarkering,
  lukkModal,
}) => (
  <MenyEndreUtlandIndex
    saksnummer="123"
    endreUtlandMarkering={endreUtlandMarkering}
    lukkModal={lukkModal}
  />
);

export const Default = Template.bind({});
Default.args = {
  endreUtlandMarkering: action('button-click'),
  lukkModal: action('button-click'),
};
