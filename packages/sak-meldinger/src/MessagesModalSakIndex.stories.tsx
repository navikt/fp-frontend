import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { MessagesModalSakIndex } from './MessagesModalSakIndex';

const meta = {
  title: 'sak/sak-meldinger/modal',
  component: MessagesModalSakIndex,
  args: {
    showModal: true,
    closeEvent: action('button-click'),
  },
} satisfies Meta<typeof MessagesModalSakIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
