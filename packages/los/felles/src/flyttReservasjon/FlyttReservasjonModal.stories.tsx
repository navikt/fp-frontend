import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { FlyttReservasjonModal } from './FlyttReservasjonModal';

const meta = {
  title: 'los/FlyttReservasjonModal',
  component: FlyttReservasjonModal,
  args: {
    closeModal: action('button-click'),
    tilgjengeligeSaksbehandlere: [
      {
        navn: 'Espen Utvikler',
        brukerIdent: 'P123456',
        ansattAvdeling: 'Avdeling A',
      },
      {
        navn: 'Kari Konsulent',
        brukerIdent: 'S12345',
        ansattAvdeling: 'Avdeling B',
      },
    ],
    flyttOppgavereservasjon: action('flyttOppgavereservasjon'),
  },
} satisfies Meta<typeof FlyttReservasjonModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
