import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { alleKodeverk } from '@navikt/fp-storybook-utils';

import { MenyVergeIndex } from './MenyVergeIndex';

const meta = {
  title: 'sak/sak-meny-verge',
  component: MenyVergeIndex,
  args: {
    alleKodeverk: alleKodeverk as any,
    lukkModal: action('onLukkModal'),
    opprettVerge: action('onOpprettVerge') as () => Promise<void>,
    fjernVerge: action('onFjernVerge') as () => Promise<void>,
  },
} satisfies Meta<typeof MenyVergeIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const LeggeTilVerge: Story = {
  args: {
    type: 'OPPRETT',
  },
};

export const FjerneVerge: Story = {
  args: {
    type: 'FJERN',
  },
};
