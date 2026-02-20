import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  lagVilkår,
  type PanelDataArgs,
  withMellomlagretFormData,
  withPanelData,
} from '@navikt/fp-storybook-utils';
import type { BehandlingFpSak, Vilkår } from '@navikt/fp-types';

import { FodselVilkarProsessIndex } from './FodselVilkarProsessIndex';

const meta = {
  title: 'prosess/prosess-vilkar-fodsel',
  component: FodselVilkarProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    vilkårForPanel: [lagVilkår('FP_VK_1')] as Vilkår[],
  },
  render: args => <FodselVilkarProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof FodselVilkarProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ÅpentAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE)],
    status: 'IKKE_VURDERT',
  },
};

export const OppfyltVilkår: Story = {
  args: {
    aksjonspunkterForPanel: [
      lagAksjonspunkt(
        AksjonspunktKode.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE,

        {
          status: 'UTFO',
          begrunnelse: 'Dette vilkåret er godkjent',
        },
      ),
    ],
    isReadOnly: true,
    isSubmittable: false,
    status: 'OPPFYLT',
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
    isReadOnly: true,
    isSubmittable: false,
    status: 'IKKE_OPPFYLT',
  },
};
