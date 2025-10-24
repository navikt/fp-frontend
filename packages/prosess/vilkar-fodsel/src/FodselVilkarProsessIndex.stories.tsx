import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagVilkår,
  type PanelDataArgs,
  withMellomlagretFormData,
  withPanelData,
} from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, BehandlingFpSak, Vilkar } from '@navikt/fp-types';

import { FodselVilkarProsessIndex } from './FodselVilkarProsessIndex';

const meta = {
  title: 'prosess/prosess-vilkar-fodsel',
  component: FodselVilkarProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    vilkårForPanel: [
      lagVilkår({
        vilkarType: 'FP_VK_1',
        lovReferanse: '§§Dette er en lovreferanse',
      }),
    ] as Vilkar[],
  },
  render: args => <FodselVilkarProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof FodselVilkarProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ÅpentAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE,
        status: 'OPPR',
      },
    ] as Aksjonspunkt[],
    status: 'IKKE_VURDERT',
  },
};

export const OppfyltVilkår: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE,
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er godkjent',
      },
    ] as Aksjonspunkt[],
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
      {
        definisjon: AksjonspunktKode.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE,
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er avslått',
      },
    ] as Aksjonspunkt[],
    isReadOnly: true,
    isSubmittable: false,
    status: 'IKKE_OPPFYLT',
  },
};
