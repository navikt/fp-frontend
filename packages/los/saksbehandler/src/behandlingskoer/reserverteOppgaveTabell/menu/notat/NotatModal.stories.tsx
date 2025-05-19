import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { NotatModal } from './NotatModal';

import messages from '../../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'behandlingskoer/NotatModal',
  component: NotatModal,
  decorators: [withIntl],
  args: {
    closeModal: action('button-click'),
    flyttOppgavereservasjon: () => Promise.resolve(),
    brukernavn: 'T232332',
  },
} satisfies Meta<typeof NotatModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
