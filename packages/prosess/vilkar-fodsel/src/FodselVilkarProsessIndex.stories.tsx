import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  lagVilkår,
  type PanelDataArgs,
  withMellomlagretFormData,
  withPanelData,
} from '@navikt/fp-storybook-utils';
import type { BehandlingFpSak } from '@navikt/fp-types';

import { FodselVilkarProsessIndex } from './FodselVilkarProsessIndex';

const meta = {
  title: 'prosess/prosess-vilkar-fodsel',
  component: FodselVilkarProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    vilkårForPanel: [lagVilkår('FP_VK_1', { vilkarStatus: 'IKKE_VURDERT' })],
  },
} satisfies Meta<PanelDataArgs>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ÅpentAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE)],
  },
};

export const OppfyltVilkår: Story = {
  args: {
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE, {
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er godkjent',
      }),
    ],
    vilkårForPanel: [lagVilkår('FP_VK_1', { vilkarStatus: 'OPPFYLT' })],
    isReadOnly: true,
    isSubmittable: false,
  },
};

export const AvslåttVilkår: Story = {
  args: {
    behandling: {
      uuid: '1',
      versjon: 1,
      behandlingsresultat: {
        avslagsarsak: '1002',
      },
    } as BehandlingFpSak,
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE, {
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er avslått',
      }),
    ],
    vilkårForPanel: [lagVilkår('FP_VK_1', { vilkarStatus: 'IKKE_OPPFYLT' })],
    isReadOnly: true,
    isSubmittable: false,
  },
};
