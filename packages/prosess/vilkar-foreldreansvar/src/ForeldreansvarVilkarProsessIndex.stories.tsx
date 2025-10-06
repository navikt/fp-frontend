import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, Behandling } from '@navikt/fp-types';

import { ForeldreansvarVilkarProsessIndex } from './ForeldreansvarVilkarProsessIndex';

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
        definisjon: '5013',
        status: 'OPPR',
      },
    ] as Aksjonspunkt[],
    status: 'IKKE_VURDERT',
    isForeldreansvar2Ledd: true,
  },
};

export const OppfyltVilkår2Ledd: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: '5013',
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er godkjent',
      },
    ] as Aksjonspunkt[],
    isReadOnly: true,
    isSubmittable: false,
    status: 'OPPFYLT',
    isForeldreansvar2Ledd: true,
  },
};

export const AvslåttVilkår2Ledd: Story = {
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
        definisjon: '5013',
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er avslått',
      },
    ] as Aksjonspunkt[],
    isReadOnly: true,
    isSubmittable: false,
    status: 'IKKE_OPPFYLT',
    isForeldreansvar2Ledd: true,
  },
};

export const ÅpentAksjonspunkt4Ledd: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: '5014',
        status: 'OPPR',
      },
    ] as Aksjonspunkt[],
    isReadOnly: false,
    status: 'IKKE_VURDERT',
    isForeldreansvar2Ledd: false,
  },
};

export const OppfyltVilkår4Ledd: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: '5014',
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er godkjent',
      },
    ] as Aksjonspunkt[],
    isReadOnly: true,
    isSubmittable: false,
    status: 'OPPFYLT',
    isForeldreansvar2Ledd: false,
  },
};

export const AvslåttVilkår4Ledd: Story = {
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
        definisjon: '5014',
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er avslått',
      },
    ] as Aksjonspunkt[],
    isReadOnly: true,
    isSubmittable: false,
    status: 'IKKE_OPPFYLT',
    isForeldreansvar2Ledd: false,
  },
};
