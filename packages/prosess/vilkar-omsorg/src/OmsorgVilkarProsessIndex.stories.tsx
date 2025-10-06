import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, Behandling } from '@navikt/fp-types';

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
  definisjon: '5037',
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
        definisjon: '5011',
        status: 'OPPR',
      },
    ],
    status: 'IKKE_VURDERT',
  },
};

export const OppfyltVilkår: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: '5011',
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er godkjent',
        kanLoses: false,
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
        avslagsarsak: '1099',
      },
    } as Behandling,
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: '5011',
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er avslått',
        kanLoses: false,
      },
    ],
    isReadOnly: true,
    isSubmittable: false,
    status: 'IKKE_OPPFYLT',
  },
};
