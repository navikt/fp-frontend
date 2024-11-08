import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import OppgaveReservasjonEndringDatoModal from './OppgaveReservasjonEndringDatoModal';

import messages from '../../i18n/nb_NO.json';
import dayjs from 'dayjs';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';

const withIntl = getIntlDecorator(messages);

const meta = {
  component: OppgaveReservasjonEndringDatoModal,
  decorators: withIntl,
  args: {
    reserverTilDefault: undefined,
    oppgaveId: 1,
    showModal: true,
    closeModal: action('onClose'),
    endreReserverasjonState: () => {},
    hentReserverteOppgaver: () => {},
    endreOppgavereservasjon: args => {
      action('onEndreOppgavereservasjon')(args);
      return Promise.resolve([]);
    },
  },
} satisfies Meta<typeof OppgaveReservasjonEndringDatoModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    reserverTilDefault: undefined,
  },
};
export const MedDefaultverdi: Story = {
  args: {
    reserverTilDefault: dayjs().add(2, 'weeks').format(ISO_DATE_FORMAT),
  },
};
