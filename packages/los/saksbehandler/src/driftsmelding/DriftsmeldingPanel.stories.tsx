import type { Meta, StoryObj } from '@storybook/react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { driftsmeldinger } from '../../testdata/driftsmeldinger';
import { DriftsmeldingPanel } from './DriftsmeldingPanel';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  component: DriftsmeldingPanel,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withIntl],
} satisfies Meta<typeof DriftsmeldingPanel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const EnDriftsmelding: Story = {
  args: {
    driftsmeldinger: [driftsmeldinger[0]!],
  },
};

export const ToDriftsmelding: Story = {
  args: {
    driftsmeldinger,
  },
};
