import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { alleKodeverk, getIntlDecorator } from '@navikt/fp-storybook-utils';

import { SettPaVentReadOnlyModal } from './SettPaVentReadOnlyModal';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'fagsak/SettPaVentReadOnlyModal',
  component: SettPaVentReadOnlyModal,
  decorators: [withIntl],
} satisfies Meta<typeof SettPaVentReadOnlyModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ventearsaker: alleKodeverk.Venteårsak,
    ventearsak: 'AAP_DP_ENESTE_AKTIVITET_SVP',
    lukkCallback: action('button-click'),
  },
};
