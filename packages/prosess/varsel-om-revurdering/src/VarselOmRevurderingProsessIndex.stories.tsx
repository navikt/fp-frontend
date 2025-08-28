import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { AksjonspunktKode, AksjonspunktStatus, BehandlingType } from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, Behandling } from '@navikt/fp-types';

import { VarselOmRevurderingProsessIndex } from './VarselOmRevurderingProsessIndex';

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  språkkode: 'NN',
  type: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
} as Behandling;

const aksjonspunkterForPanel = [
  {
    definisjon: AksjonspunktKode.VARSEL_REVURDERING_MANUELL,
    status: AksjonspunktStatus.OPPRETTET,
    begrunnelse: null,
  },
] as Aksjonspunkt[];

const meta = {
  component: VarselOmRevurderingProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    aksjonspunkterForPanel,
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
      type: BehandlingTypeEnum.REVURDERING,
    },
  },
};
