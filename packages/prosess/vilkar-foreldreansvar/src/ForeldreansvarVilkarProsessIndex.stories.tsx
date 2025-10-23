import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { avslagsårsakerPerVilkår, type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, BehandlingFpSak, Vilkar, VilkårType } from '@navikt/fp-types';

import { ForeldreansvarVilkarProsessIndex } from './ForeldreansvarVilkarProsessIndex';

const lagVilkår = (vilkårType: VilkårType): Vilkar => {
  return {
    vilkarType: vilkårType,
    aktuelleAvslagsårsaker: avslagsårsakerPerVilkår[vilkårType],
    lovReferanse: '§§Dette er en lovreferanse',
    overstyrbar: true,
    vilkarStatus: 'IKKE_VURDERT',
  };
};

const meta = {
  title: 'prosess/prosess-vilkar-foreldreansvar',
  component: ForeldreansvarVilkarProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    isEngangsstonad: false,
  },
  render: args => <ForeldreansvarVilkarProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof ForeldreansvarVilkarProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ÅpentAksjonspunkt2Ledd: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_2_LEDD,
        status: 'OPPR',
      },
    ] as Aksjonspunkt[],
    status: 'IKKE_VURDERT',
    vilkårForPanel: [lagVilkår('FP_VK_8')],
  },
};

export const OppfyltVilkår2Ledd: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_2_LEDD,
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er godkjent',
      },
    ] as Aksjonspunkt[],
    isReadOnly: true,
    isSubmittable: false,
    status: 'OPPFYLT',
    vilkårForPanel: [lagVilkår('FP_VK_8')],
  },
};

export const AvslåttVilkår2Ledd: Story = {
  args: {
    behandling: {
      uuid: '1',
      versjon: 1,
      behandlingsresultat: {
        avslagsarsak: '1034',
      },
    } as BehandlingFpSak,
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_2_LEDD,
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er avslått',
      },
    ] as Aksjonspunkt[],
    isReadOnly: true,
    isSubmittable: false,
    status: 'IKKE_OPPFYLT',
    vilkårForPanel: [lagVilkår('FP_VK_8')],
  },
};

export const ÅpentAksjonspunkt4Ledd: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_4_LEDD,
        status: 'OPPR',
      },
    ] as Aksjonspunkt[],
    isReadOnly: false,
    status: 'IKKE_VURDERT',
    vilkårForPanel: [lagVilkår('FP_VK_33')],
  },
};

export const OppfyltVilkår4Ledd: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_4_LEDD,
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er godkjent',
      },
    ] as Aksjonspunkt[],
    isReadOnly: true,
    isSubmittable: false,
    status: 'OPPFYLT',
    vilkårForPanel: [lagVilkår('FP_VK_33')],
  },
};

export const AvslåttVilkår4Ledd: Story = {
  args: {
    behandling: {
      uuid: '1',
      versjon: 1,
      behandlingsresultat: {
        avslagsarsak: '1034',
      },
    } as BehandlingFpSak,
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_4_LEDD,
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er avslått',
      },
    ] as Aksjonspunkt[],
    vilkårForPanel: [lagVilkår('FP_VK_33')],
    isReadOnly: true,
    isSubmittable: false,
    status: 'IKKE_OPPFYLT',
  },
};
