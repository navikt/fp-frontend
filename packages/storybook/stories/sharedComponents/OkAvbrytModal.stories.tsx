import React from 'react';
import { action } from '@storybook/addon-actions';

import { OkAvbrytModal } from '@fpsak-frontend/shared-components';

export default {
  title: 'sharedComponents/OkAvbrytModal',
  component: OkAvbrytModal,
};

export const visModal = () => (
  <OkAvbrytModal
    text="Dette er ein test"
    showModal
    submit={action('button-click')}
    cancel={action('button-click')}
  />
);
