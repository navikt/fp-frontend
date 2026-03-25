import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import { http, HttpResponse } from 'msw';

import { withQueryClient } from '@navikt/fp-storybook-utils';

import { LosUrlFelles } from '../api/fplosFellesApi';
import { EndreReservasjonDato } from './EndreReservasjonDato';

const meta = {
  title: 'los/EndreReservasjonDato',
  component: EndreReservasjonDato,
  decorators: [withQueryClient],
  parameters: {
    msw: {
      handlers: [http.post(LosUrlFelles.ENDRE_OPPGAVERESERVASJON, () => HttpResponse.json({}))],
    },
  },
  args: {
    oppgaveId: 123,
    invalidateQueryKeys: [],
    reservertTilTidspunkt: dayjs().add(1, 'week').format(ISO_DATE_FORMAT),
  },
  render: props => {
    return <EndreReservasjonDato {...props} />;
  },
} satisfies Meta<typeof EndreReservasjonDato>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
