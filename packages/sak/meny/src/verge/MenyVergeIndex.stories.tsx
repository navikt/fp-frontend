import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { alleKodeverk, promiseAction } from '@navikt/fp-storybook-utils';

import { MenyVergeIndex } from './MenyVergeIndex';

const meta = {
  title: 'sak-meny/verge',
  component: MenyVergeIndex,
  args: {
    alleKodeverk: alleKodeverk,
    lukkModal: action('onLukkModal'),
    opprettVerge: promiseAction('onOpprettVerge'),
    fjernVerge: promiseAction('onFjernVerge'),
  },
} satisfies Meta<typeof MenyVergeIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const LeggeTilVerge: Story = {
  args: {
    type: 'OPPRETT',
    verge: undefined,
  },
};

export const FjerneVerge: Story = {
  args: {
    type: 'FJERN',
    verge: {
      vergeType: 'ADVOKAT',
      navn: 'Ola Nordmann',
      organisasjonsnummer: '123456789',
      gyldigFom: '2025-01-01',
      gyldigTom: '2025-12-31',
    },
  },
};
