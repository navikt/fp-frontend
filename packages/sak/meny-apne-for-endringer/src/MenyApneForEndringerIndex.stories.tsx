import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { MenyApneForEndringerIndex } from './MenyApneForEndringerIndex';

const meta = {
  title: 'sak/sak-meny-apne-for-endringer',
  component: MenyApneForEndringerIndex,
  args: {
    apneBehandlingForEndringer: action('button-click'),
    lukkModal: action('button-click'),
  },
} satisfies Meta<typeof MenyApneForEndringerIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
