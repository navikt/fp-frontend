import React from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { UkjentAdresseMeldingIndex } from './UkjentAdresseMeldingIndex';

const withWidthProvider = (Story: StoryFn) => (
  <div style={{ width: '600px' }}>
    <Story />
  </div>
);

const meta = {
  title: 'sak/sak-ukjent-adresse',
  component: UkjentAdresseMeldingIndex,
  decorators: [withWidthProvider],
} satisfies Meta<typeof UkjentAdresseMeldingIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const IngenAdresse: Story = {};
