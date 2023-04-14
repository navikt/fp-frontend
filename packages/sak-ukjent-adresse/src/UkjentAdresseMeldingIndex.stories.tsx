import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import UkjentAdresseMelding from './UkjentAdresseMeldingIndex';

const withWidthProvider = (story: any) => <div style={{ width: '600px' }}>{story()}</div>;

export default {
  title: 'sak/sak-ukjent-adresse',
  component: UkjentAdresseMelding,
  decorators: [withWidthProvider],
};

const Template: Story = () => <UkjentAdresseMelding />;

export const IngenAdresse = Template.bind({});
IngenAdresse.args = {};
