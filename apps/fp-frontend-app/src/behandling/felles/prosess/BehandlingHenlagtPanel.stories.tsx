import type { Meta, StoryObj } from '@storybook/react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { BehandlingHenlagtPanel } from './BehandlingHenlagtPanel';

import messages from '../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'behandling/prosess/BehandlingHenlagtPanel',
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
