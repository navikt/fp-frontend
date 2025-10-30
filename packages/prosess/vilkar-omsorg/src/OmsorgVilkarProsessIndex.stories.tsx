import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { lagVilkår, type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, BehandlingFpSak } from '@navikt/fp-types';

import { OmsorgVilkarProsessIndex } from './OmsorgVilkarProsessIndex';

const meta = {
  title: 'prosess/prosess-vilkar-omsorg',
  component: OmsorgVilkarProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  render: args => <OmsorgVilkarProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof OmsorgVilkarProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

const aksjonspunktDefault = {
  definisjon: AksjonspunktKode.VURDER_INNSYN,
  status: 'OPPR',

  kanLoses: true,
  toTrinnsBehandling: false,

  aksjonspunktType: 'AUTO',
  vilkarType: 'FP_VK_5',
  erAktivt: true,
} satisfies Aksjonspunkt;

export const ÅpentAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.MANUELL_VURDERING_AV_OMSORGSVILKÅRET,
        status: 'OPPR',
      },
    ],
    vilkårForPanel: [lagVilkår('FP_VK_5', { vilkarStatus: 'IKKE_VURDERT' })],
    status: 'IKKE_VURDERT',
  },
};

export const OppfyltVilkår: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.MANUELL_VURDERING_AV_OMSORGSVILKÅRET,
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er godkjent',
        kanLoses: false,
      },
    ] as Aksjonspunkt[],
    vilkårForPanel: [lagVilkår('FP_VK_5', { vilkarStatus: 'OPPFYLT' })],
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
        avslagsarsak: '1010',
      },
    } as BehandlingFpSak,
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.MANUELL_VURDERING_AV_OMSORGSVILKÅRET,
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er avslått',
        kanLoses: false,
      },
    ],
    vilkårForPanel: [lagVilkår('FP_VK_5', { vilkarStatus: 'IKKE_OPPFYLT' })],
    isReadOnly: true,
    isSubmittable: false,
    status: 'IKKE_OPPFYLT',
  },
};
