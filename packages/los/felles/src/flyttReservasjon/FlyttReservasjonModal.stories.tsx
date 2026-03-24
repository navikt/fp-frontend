import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import { action } from 'storybook/actions';

import { withQueryClient } from '@navikt/fp-storybook-utils';

import { LosUrlFelles } from '../api/fplosFellesApi';
import { FlyttReservasjonModal } from './FlyttReservasjonModal';

const meta = {
  title: 'los/FlyttReservasjonModal',
  component: FlyttReservasjonModal,
  decorators: [withQueryClient],
  parameters: {
    msw: {
      handlers: [http.post(LosUrlFelles.FLYTT_RESERVASJON, () => HttpResponse.json({}))],
    },
  },
  args: {
    oppgaveId: 123,
    invalidateQueryKeys: [],
    closeModal: action('closeModal'),
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
    isLoadingSaksbehandlere: false,
  },
} satisfies Meta<typeof FlyttReservasjonModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
