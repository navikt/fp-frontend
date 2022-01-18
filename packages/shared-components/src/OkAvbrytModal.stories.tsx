import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import OkAvbrytModal from './OkAvbrytModal';

export default {
  title: 'sharedComponents/OkAvbrytModal',
  component: OkAvbrytModal,
};

const Template: Story = () => (
  <OkAvbrytModal
    text="Dette er ein test"
    showModal
    submit={action('button-click')}
    cancel={action('button-click')}
  />
);

export const Default = Template.bind({});
