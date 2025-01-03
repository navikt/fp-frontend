import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { SettPaVentReadOnlyModal } from './SettPaVentReadOnlyModal';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const VENTEARSAKER = [
  {
    kode: 'test',
    navn: 'Dette er en venteårsak',
    kodeverk: 'VENTEARSAK',
  },
];

const meta = {
  title: 'app/settpavent/SettPaVentReadOnlyModal',
  component: SettPaVentReadOnlyModal,
  decorators: [withIntl],
} satisfies Meta<typeof SettPaVentReadOnlyModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ventearsaker: VENTEARSAKER,
    ventearsak: 'test',
    lukkCallback: action('button-click'),
  },
};
