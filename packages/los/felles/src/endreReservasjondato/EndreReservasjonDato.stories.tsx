import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import { action } from 'storybook/actions';

import type { ReservasjonStatusDto } from '@navikt/fp-types';

import { EndreReservasjonDato } from './EndreReservasjonDato';

const meta = {
  title: 'los/EndreReservasjonDato',
  component: EndreReservasjonDato,
  args: {
    endreReservasjon: (date: string) =>
      new Promise(resolve => {
        action('endreReservasjon')(date);
        setTimeout(() => resolve({} as ReservasjonStatusDto), 1000);
      }),
    reservertTilTidspunkt: dayjs().add(1, 'week').format(ISO_DATE_FORMAT),
  },
} satisfies Meta<typeof EndreReservasjonDato>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
