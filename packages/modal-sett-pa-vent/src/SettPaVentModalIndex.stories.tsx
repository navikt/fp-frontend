import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { alleKodeverk, alleKodeverkTilbakekreving } from '@navikt/fp-storybook-utils';
import type { KodeverkMedNavn } from '@navikt/fp-types';

import { SettPaVentModalIndex } from './SettPaVentModalIndex';

const meta = {
  title: 'modal-sett-pa-vent/SettPaVentModal',
  component: SettPaVentModalIndex,
  args: {
    ventearsaker: alleKodeverk['Venteårsak'] as KodeverkMedNavn[],
    showModal: true,
    submitCallback: action('button-click'),
    cancelEvent: action('button-click'),
    erTilbakekreving: false,
  },
} satisfies Meta<typeof SettPaVentModalIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const BehandlingMedFrist: Story = {
  args: {
    hasManualPaVent: true,
    frist: '2050-10-10',
  },
};

export const BehandlingSomErAutomatiskPåVentUtenFrist: Story = {
  args: {
    hasManualPaVent: false,
    ventearsak: 'ventearsak',
  },
};

export const VenterPåTilbakekrevinggrunnlagMedUtløptFrist: Story = {
  args: {
    frist: '2015-10-10',
    ventearsak: 'VENT_PÅ_TILBAKEKREVINGSGRUNNLAG',
    hasManualPaVent: false,
    erTilbakekreving: true,
    ventearsaker: alleKodeverkTilbakekreving['Venteårsak'] as KodeverkMedNavn[],
  },
};
