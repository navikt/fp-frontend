import React from 'react';
import { StoryFn } from '@storybook/react';

import UkjentAdresseMelding from './UkjentAdresseMeldingIndex';

const withWidthProvider = (story: any) => <div style={{ width: '600px' }}>{story()}</div>;

export default {
  title: 'sak/sak-ukjent-adresse',
  component: UkjentAdresseMelding,
  decorators: [withWidthProvider],
};

const Template: StoryFn = () => <UkjentAdresseMelding />;

export const IngenAdresse = Template.bind({});
IngenAdresse.args = {};
