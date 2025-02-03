import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus } from '@navikt/fp-kodeverk';
import {
  PanelDataArgs,
  PanelOverstyringContextArgs,
  withFormData,
  withPanelData,
  withPanelOverstyring,
} from '@navikt/fp-storybook-utils';
import { Aksjonspunkt } from '@navikt/fp-types';

import { BeregningsresultatProsessIndex } from './BeregningsresultatProsessIndex';

const beregningsresultat = {
  beregnetTilkjentYtelse: 92000,
  antallBarn: 1,
  satsVerdi: 92000,
};

const defaultAksjonspunkter = [
  {
    definisjon: AksjonspunktKode.VURDER_FEILUTBETALING,
    status: AksjonspunktStatus.OPPRETTET,
    begrunnelse: 'test',
  },
] as Aksjonspunkt[];

const meta = {
  title: 'prosess/prosess-beregningsresultat',
  component: BeregningsresultatProsessIndex,
  decorators: [withFormData, withPanelData, withPanelOverstyring],
  args: {
    beregningresultatEngangsstonad: beregningsresultat,
    overstyringApKode: AksjonspunktKode.OVERSTYR_BEREGNING,
  },
  render: args => <BeregningsresultatProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & PanelOverstyringContextArgs & ComponentProps<typeof BeregningsresultatProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SaksbehandlerKanIkkeOverstyre: Story = {
  args: {
    aksjonspunkterForPanel: defaultAksjonspunkter,
  },
};

export const SaksbehandlerKanOverstyre: Story = {
  args: {
    aksjonspunkterForPanel: defaultAksjonspunkter,
    kanOverstyreAccess: { isEnabled: true, employeeHasAccess: true },
  },
};

export const OverstyrtReadonlyPanel: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.OVERSTYR_BEREGNING,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: 'Dette er en begrunnelse',
      },
    ] as Aksjonspunkt[],
    kanOverstyreAccess: { isEnabled: true, employeeHasAccess: true },
    isReadOnly: true,
  },
};
