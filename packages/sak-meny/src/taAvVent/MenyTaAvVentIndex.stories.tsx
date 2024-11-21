import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { MenyTaAvVentIndex } from './MenyTaAvVentIndex';

const meta = {
  title: 'sak/sak-meny-ta-av-vent',
  component: MenyTaAvVentIndex,
  args: {
    behandlingVersjon: 2,
    taBehandlingAvVent: action('button-click'),
    lukkModal: action('button-click'),
  },
} satisfies Meta<typeof MenyTaAvVentIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
