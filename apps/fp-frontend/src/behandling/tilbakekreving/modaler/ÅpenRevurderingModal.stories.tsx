import type { Meta, StoryObj } from '@storybook/react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { ÅpenRevurderingModal } from './ÅpenRevurderingModal';

import messages from '../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'behandling/tilbakekreving/ÅpenRevurderingModal',
  component: ÅpenRevurderingModal,
  decorators: [withIntl],
} satisfies Meta<typeof ÅpenRevurderingModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    harÅpenRevurdering: true,
  },
};
