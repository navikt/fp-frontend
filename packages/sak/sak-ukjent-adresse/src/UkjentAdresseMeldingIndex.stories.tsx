import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import type { DecoratorFunction } from 'storybook/internal/types';

import { UkjentAdresseMeldingIndex } from './UkjentAdresseMeldingIndex';

const withWidthProvider: DecoratorFunction<ReactRenderer> = Story => (
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
