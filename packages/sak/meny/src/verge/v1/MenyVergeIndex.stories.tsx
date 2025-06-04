import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { MenyVergeIndex } from './MenyVergeIndex';

const meta = {
  title: 'sak-meny/verge-v1',
  component: MenyVergeIndex,
  args: {
    lukkModal: action('button-click'),
  },
} satisfies Meta<typeof MenyVergeIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const LeggeTilVerge: Story = {
  args: {
    opprettVerge: action('button-click') as () => Promise<void>,
  },
};

export const FjerneVerge: Story = {
  args: {
    fjernVerge: action('button-click') as () => Promise<void>,
  },
};
