import { Meta, StoryObj } from '@storybook/react/*';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { BehandlingHenlagtPanel } from './BehandlingHenlagtPanel';

const messages = {
  'BehandlingHenlagtPanel.Henlagt': 'Behandling er henlagt',
};
const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'app/prosess/BehandlingHenlagtPanel',
  component: BehandlingHenlagtPanel,
  decorators: [withIntl],
} satisfies Meta<typeof BehandlingHenlagtPanel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    valgtProsessSteg: 'henlagt',
    registrerProsessPanel: () => undefined,
  },
};
