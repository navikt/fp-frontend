import type { Meta, StoryObj } from '@storybook/react';

import { BeregningsresultatProsessIndex } from './BeregningsresultatProsessIndex';

const meta = {
  title: 'prosess/prosess-beregningsresultat',
  component: BeregningsresultatProsessIndex,
  args: {
    beregningresultatEngangsstonad: {
      beregnetTilkjentYtelse: 92000,
      antallBarn: 1,
      satsVerdi: 92000,
    },
  },
  render: args => <BeregningsresultatProsessIndex {...args} />,
} satisfies Meta<typeof BeregningsresultatProsessIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
