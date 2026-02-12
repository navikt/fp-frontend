import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import { action } from 'storybook/actions';

import { OppgaveReservasjonEndringDatoModal } from './OppgaveReservasjonEndringDatoModal';

const meta = {
  title: 'los/OppgaveReservasjonEndringDatoModal',
  component: OppgaveReservasjonEndringDatoModal,
  args: {
    closeModal: action('button-click'),
    endreOppgavereservasjon: action('button-click'),
  },
} satisfies Meta<typeof OppgaveReservasjonEndringDatoModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MedDefaultverdi: Story = {
  args: {
    reserverTilDefault: dayjs().add(1, 'week').format(ISO_DATE_FORMAT),
  },
};
