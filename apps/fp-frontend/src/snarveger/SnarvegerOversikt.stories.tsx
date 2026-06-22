import type { Decorator, Meta, StoryObj } from '@storybook/react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { SnarvegerProvider } from './SnarvegerContext';
import { SnarvegerOversikt } from './SnarvegerOversikt';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const withSnarvegerProvider: Decorator = Story => (
  <SnarvegerProvider>
    <Story />
  </SnarvegerProvider>
);

const meta = {
  title: 'snarveger/SnarvegerOversikt',
  component: SnarvegerOversikt,
  decorators: [withIntl, withSnarvegerProvider],
} satisfies Meta<typeof SnarvegerOversikt>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
