import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { alleKodeverk } from '@navikt/fp-storybook-utils';

import { MenyEndreUtlandIndex } from './MenyEndreUtlandIndex';

const meta = {
  title: 'sak/sak-meny-endre-utland',
  component: MenyEndreUtlandIndex,
  args: {
    saksnummer: '123',
    endreFagsakMarkering: action('button-click'),
    lukkModal: action('button-click'),
    fagsakMarkeringerKodeverk: alleKodeverk.FagsakMarkering,
  },
} satisfies Meta<typeof MenyEndreUtlandIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
