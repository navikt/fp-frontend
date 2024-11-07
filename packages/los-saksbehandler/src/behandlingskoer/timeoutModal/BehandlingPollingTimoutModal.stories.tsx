import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { BehandlingPollingTimoutModal } from './BehandlingPollingTimoutModal';

import messages from '../../../i18n/nb_NO.json';
import { Meta, StoryObj } from '@storybook/react/*';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'los/saksbehandler/behandlingskoer/BehandlingPollingTimoutModal',
  component: BehandlingPollingTimoutModal,
  decorators: [withIntl],
} satisfies Meta<typeof BehandlingPollingTimoutModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
