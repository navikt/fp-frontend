import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import MenyEndreUtlandIndex from './MenyEndreUtlandIndex';

export default {
  title: 'sak/sak-meny-endre-utland',
  component: MenyEndreUtlandIndex,
};

const Template: Story<{
  endreFagsakMarkering: () => void;
  lukkModal: () => void;
}> = ({
  endreFagsakMarkering,
  lukkModal,
}) => (
  <MenyEndreUtlandIndex
    saksnummer="123"
    endreFagsakMarkering={endreFagsakMarkering}
    lukkModal={lukkModal}
  />
);

export const Default = Template.bind({});
Default.args = {
  endreFagsakMarkering: action('button-click'),
  lukkModal: action('button-click'),
};
