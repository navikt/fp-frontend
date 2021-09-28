import React from 'react';
import { action } from '@storybook/addon-actions';

import AdvarselModal from './AdvarselModal';

export default {
  title: 'sharedComponents/AdvarselModal',
  component: AdvarselModal,
};

export const visModal = () => (
  <AdvarselModal
    bodyText="Dette er en advarsel"
    showModal
    submit={action('button-click')}
  />
);
