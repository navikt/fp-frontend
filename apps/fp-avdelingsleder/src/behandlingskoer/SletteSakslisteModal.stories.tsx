import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { SletteSakslisteModal } from './SletteSakslisteModal';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'los/avdelingsleder/behandlingskoer/SletteSakslisteModal',
  component: SletteSakslisteModal,
  decorators: [withIntl],
  args: {
    cancel: action('button-click'),
    submit: action('button-click'),
  },
} satisfies Meta<typeof SletteSakslisteModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    valgtSaksliste: {
      sakslisteId: 1,
      navn: 'Saksliste 1',
      sorteringTyper: [],
      saksbehandlerIdenter: [],
      andreKriterie: {
        inkluder: [],
        ekskluder: [],
      },
    },
  },
};
