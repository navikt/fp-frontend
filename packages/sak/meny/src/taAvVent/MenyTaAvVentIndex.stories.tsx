import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { MenyTaAvVentIndex } from './MenyTaAvVentIndex';

const meta = {
  title: 'sak/sak-meny-ta-av-vent',
  component: MenyTaAvVentIndex,
  args: {
    taBehandlingAvVent: action('button-click'),
    lukkModal: action('button-click'),
  },
} satisfies Meta<typeof MenyTaAvVentIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
