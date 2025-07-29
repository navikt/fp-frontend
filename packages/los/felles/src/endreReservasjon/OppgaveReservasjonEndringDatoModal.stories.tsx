import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import { action } from 'storybook/actions';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { OppgaveReservasjonEndringDatoModal } from './OppgaveReservasjonEndringDatoModal';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'los/OppgaveReservasjonEndringDatoModal',
  component: OppgaveReservasjonEndringDatoModal,
  decorators: [withIntl],
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
    reserverTilDefault: dayjs().add(1, 'week').format('YYYY-MM-DD'),
  },
};
