import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { alleKodeverk } from '@navikt/fp-storybook-utils';

import { MenySettPaVentIndex } from './MenySettPaVentIndex';

const meta = {
  title: 'sak/sak-meny-sett-pa-vent',
  component: MenySettPaVentIndex,
  args: {
    settBehandlingPaVent: action('button-click'),
    lukkModal: action('button-click'),
    erTilbakekreving: false,
  },
} satisfies Meta<typeof MenySettPaVentIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ventearsaker: alleKodeverk.Venteårsak,
  },
};
