import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import AdvarselModal from './AdvarselModal';

export default {
  title: 'sharedComponents/AdvarselModal',
  component: AdvarselModal,
};

export const Default: Story = () => (
  <AdvarselModal
    bodyText="Dette er en advarsel"
    showModal
    submit={action('button-click')}
  />
);
