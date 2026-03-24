import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import { action } from 'storybook/actions';

import { LosUrlFelles } from '@navikt/fp-los-felles';
import { getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { NotatModal } from './NotatModal';

import messages from '../../../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'behandlingskoer/NotatModal',
  component: NotatModal,
  decorators: [withIntl, withQueryClient],
  parameters: {
    msw: {
      handlers: [http.post(LosUrlFelles.FLYTT_RESERVASJON, () => HttpResponse.json({}))],
    },
  },
  args: {
    oppgaveId: 123,
    brukerIdent: 'T232332',
    closeModal: action('closeModal'),
  },
} satisfies Meta<typeof NotatModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
