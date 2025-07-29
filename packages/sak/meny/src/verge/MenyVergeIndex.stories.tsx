import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { alleKodeverk } from '@navikt/fp-storybook-utils';

import { VergeType } from '../../../../kodeverk/src/vergeType';
import { MenyVergeIndex } from './MenyVergeIndex';

const meta = {
  title: 'sak-meny/verge-v2',
  component: MenyVergeIndex,
  args: {
    alleKodeverk: alleKodeverk,
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
    verge: undefined,
  },
};

export const FjerneVerge: Story = {
  args: {
    type: 'FJERN',
    verge: {
      vergeType: VergeType.ADVOKAT,
      navn: 'Ola Nordmann',
      organisasjonsnummer: '123456789',
      gyldigFom: '2025-01-01',
      gyldigTom: '2025-12-31',
    },
  },
};
