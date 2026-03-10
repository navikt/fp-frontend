import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  lagBehandling,
  type PanelDataArgs,
  withMellomlagretFormData,
  withPanelData,
} from '@navikt/fp-storybook-utils';

import { VarselOmRevurderingProsessIndex } from './VarselOmRevurderingProsessIndex';

const meta = {
  component: VarselOmRevurderingProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.VARSEL_REVURDERING_MANUELL)],
    previewCallback: action('button-click'),
    isReadOnly: false,
  },
  render: args => <VarselOmRevurderingProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof VarselOmRevurderingProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ForFørstegangsbehandling: Story = {
  args: {
    behandling: lagBehandling({ språkkode: 'NN' }),
  },
};

export const ForRevurdering: Story = {
  args: {
    behandling: lagBehandling({ språkkode: 'NN', type: 'BT-004' }),
  },
};

export const Readonly: Story = {
  args: {
    behandling: lagBehandling({ språkkode: 'NN' }),
    isReadOnly: true,
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.VARSEL_REVURDERING_MANUELL, { begrunnelse: 'Test begrunnelse' }),
    ],
  },
};
