import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { SletteSaksbehandlerModal } from './SletteSaksbehandlerModal';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'los/avdelingsleder/saksbehandlere/SletteSaksbehandlerModal',
  component: SletteSaksbehandlerModal,
  decorators: [withIntl],
  args: {
    closeSletteModal: action('button-click'),
    fjernSaksbehandler: action('button-click'),
    valgtSaksbehandler: {
      brukerIdent: 'R12122',
      navn: 'Espen Utvikler',
      ansattAvdeling: null,
    },
  },
} satisfies Meta<typeof SletteSaksbehandlerModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
