import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { KlageBehandlingModal } from './KlageBehandlingModal';

import messages from '../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'behandling/klage/KlageBehandlingModal',
  component: KlageBehandlingModal,
  decorators: [withIntl],
} satisfies Meta<typeof KlageBehandlingModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    visModal: true,
    lukkModal: action('button-click'),
  },
};
