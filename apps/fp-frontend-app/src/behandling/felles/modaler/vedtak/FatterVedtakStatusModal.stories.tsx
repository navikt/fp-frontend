import { action } from '@storybook/addon-actions';

import { FatterVedtakStatusModal } from './FatterVedtakStatusModal';

import { Meta, StoryObj } from '@storybook/react/*';
import messages from '../../../../../i18n/nb_NO.json';
import { getIntlDecorator } from '@navikt/fp-storybook-utils';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'app/vedtak/FatterVedtakStatusModal',
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
