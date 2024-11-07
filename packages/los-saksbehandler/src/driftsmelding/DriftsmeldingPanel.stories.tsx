import { getIntlDecorator } from '@navikt/fp-storybook-utils';
import { Meta, StoryObj } from '@storybook/react';

import { DriftsmeldingPanel } from './DriftsmeldingPanel';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'los/saksbehandler/DriftsmeldingPanel',
  component: DriftsmeldingPanel,
  decorators: [withIntl],
} satisfies Meta<typeof DriftsmeldingPanel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const EnDriftsmelding: Story = {
  args: {
    driftsmeldinger: [
      {
        id: '1',
        melding: 'Dette er en driftsmelding',
      },
    ],
  },
};

export const ToDriftsmelding: Story = {
  args: {
    driftsmeldinger: [
      {
        id: '1',
        melding: 'Dette er en driftsmelding',
      },
      {
        id: '2',
        melding: 'Dette er en annen driftsmelding',
      },
    ],
  },
};
