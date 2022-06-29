import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import UkjentAdresseMelding from '@fpsak-frontend/sak-ukjent-adresse';

const withWidthProvider = (story: any) => (
  <div style={{ width: '600px' }}>
    { story() }
  </div>
);

export default {
  title: 'sak/sak-ukjent-adresse',
  component: UkjentAdresseMelding,
  decorators: [withWidthProvider],
};

const Template: Story<{
  isPanelOpen: boolean;
}> = () => (
  <UkjentAdresseMelding />
);

export const IngenAdresse = Template.bind({});
IngenAdresse.args = {
  isPanelOpen: false,
};
