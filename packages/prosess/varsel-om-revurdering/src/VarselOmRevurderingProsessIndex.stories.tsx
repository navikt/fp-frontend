import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  type PanelDataArgs,
  withMellomlagretFormData,
  withPanelData,
} from '@navikt/fp-storybook-utils';
import type { BehandlingFpSak } from '@navikt/fp-types';

import { VarselOmRevurderingProsessIndex } from './VarselOmRevurderingProsessIndex';

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  språkkode: 'NN',
  type: 'BT-002',
} as BehandlingFpSak;

const meta = {
  component: VarselOmRevurderingProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.VARSEL_REVURDERING_MANUELL)],
    previewCallback: action('button-click'),
  },
  render: args => <VarselOmRevurderingProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof VarselOmRevurderingProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ForFørstegangsbehandling: Story = {
  args: {
    behandling: defaultBehandling,
  },
};

export const ForRevurdering: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: 'BT-004',
    },
  },
};
