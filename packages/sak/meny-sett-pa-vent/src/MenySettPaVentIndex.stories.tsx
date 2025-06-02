import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { VenteArsakType } from '@navikt/fp-kodeverk';

import { MenySettPaVentIndex } from './MenySettPaVentIndex';

const meta = {
  title: 'sak/sak-meny-sett-pa-vent',
  component: MenySettPaVentIndex,
  args: {
    settBehandlingPaVent: action('button-click'),
    lukkModal: action('button-click'),
    erTilbakekreving: false,
  },
} satisfies Meta<typeof MenySettPaVentIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ventearsaker: [
      {
        kode: VenteArsakType.AVV_DOK,
        kodeverk: 'VENT_ARSAK_TYPE',
        navn: 'Avvent dokumentasjon',
      },
      {
        kode: VenteArsakType.AVV_FODSEL,
        kodeverk: 'VENT_ARSAK_TYPE',
        navn: 'Avvent fødsel',
      },
    ],
  },
};
