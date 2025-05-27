import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { VenteArsakType } from '@navikt/fp-kodeverk';
import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { SettPaVentReadOnlyModal } from './SettPaVentReadOnlyModal';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const VENTEARSAKER = [
  {
    kode: VenteArsakType.AVV_FODSEL,
    navn: 'Dette er en venteårsak',
    kodeverk: 'VENTEARSAK',
  },
];

const meta = {
  title: 'fagsak/SettPaVentReadOnlyModal',
  component: SettPaVentReadOnlyModal,
  decorators: [withIntl],
} satisfies Meta<typeof SettPaVentReadOnlyModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ventearsaker: VENTEARSAKER,
    ventearsak: VenteArsakType.ENDRE_TILKJENT_YTELSE,
    lukkCallback: action('button-click'),
    frist: null,
  },
};
