import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { FatterVedtakStatusModal } from './FatterVedtakStatusModal';

import messages from '../../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'behandling/vedtak/FatterVedtakStatusModal',
  component: FatterVedtakStatusModal,
  decorators: [withIntl],
} satisfies Meta<typeof FatterVedtakStatusModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    visModal: true,
    lukkModal: action('button-click'),
    tekst: 'Forslag til vedtak er sendt til beslutter',
  },
};
