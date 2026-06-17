import type { Meta, StoryObj } from '@storybook/react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { SnarvegerProvider } from './SnarvegerContext';
import { SnarvegerIndex } from './SnarvegerIndex';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'app/SnarvegerIndex',
  component: SnarvegerIndex,
  decorators: [
    withIntl,
    Story => (
      <SnarvegerProvider>
        <Story />
      </SnarvegerProvider>
    ),
  ],
} satisfies Meta<typeof SnarvegerIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
