import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, Behandling, Vilkar } from '@navikt/fp-types';

import { AdopsjonVilkarProsessIndex } from './AdopsjonVilkarProsessIndex';

const aksjonspunktDefault = {
  definisjon: AksjonspunktKode.VURDER_INNSYN,
  status: 'OPPR',
  kanLoses: true,
  toTrinnsBehandling: false,
  aksjonspunktType: 'AUTO',
  vilkarType: 'FP_VK_5',
  erAktivt: true,
} satisfies Aksjonspunkt;

const meta = {
  title: 'prosess/prosess-vilkar-adopsjon',
  component: AdopsjonVilkarProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    vilkår: [
      {
        lovReferanse: '§§Dette er en lovreferanse',
      },
    ] as Vilkar[],
  },
  render: args => <AdopsjonVilkarProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof AdopsjonVilkarProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ÅpentAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
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
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er godkjent',
        kanLoses: false,
      },
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
        avslagsarsak: '1099',
      },
    } as Behandling,
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er avslått',
        kanLoses: true,
      },
    ],
    isReadOnly: true,
    isSubmittable: false,
    status: 'IKKE_OPPFYLT',
  },
};
