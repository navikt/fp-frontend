import React from 'react';
import { action } from '@storybook/addon-actions';

import OkAvbrytModal from './OkAvbrytModal';

export default {
  title: 'sharedComponents/OkAvbrytModal',
  component: OkAvbrytModal,
};

export const Default = () => (
  <OkAvbrytModal
    text="Dette er ein test"
    showModal
    submit={action('button-click')}
    cancel={action('button-click')}
  />
);
