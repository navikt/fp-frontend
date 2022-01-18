import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import AvsnittSkiller from './AvsnittSkiller';

export default {
  title: 'sharedComponents/AvsnittSkiller',
  component: AvsnittSkiller,
};

export const Default: Story = () => (
  <div>
    Dette er en tekst
    <AvsnittSkiller />
    Dette er en tekst
  </div>
);
