import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { MenyMerkSomHasterIndex } from './MenyMerkSomHasterIndex';

const meta = {
  title: 'sak/sak-meny-merk-som-haster',
  component: MenyMerkSomHasterIndex,
  args: {
    merkSomHaster: action('button-click'),
    lukkModal: action('button-click'),
  },
} satisfies Meta<typeof MenyMerkSomHasterIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
