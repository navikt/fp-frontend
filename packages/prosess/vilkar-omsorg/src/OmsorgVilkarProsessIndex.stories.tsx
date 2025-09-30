import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktType, Avslagsarsak, VilkarType, VilkarUtfallType } from '@navikt/fp-kodeverk';
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
  definisjon: AksjonspunktKode.VURDER_INNSYN,
  status: 'OPPR',

  kanLoses: true,
  toTrinnsBehandling: false,

  aksjonspunktType: AksjonspunktType.AUTOPUNKT,
  vilkarType: VilkarType.OMSORGSVILKARET,
  erAktivt: true,
} satisfies Aksjonspunkt;

export const ÅpentAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.MANUELL_VURDERING_AV_OMSORGSVILKARET,
        status: 'OPPR',
      },
    ],
    status: VilkarUtfallType.IKKE_VURDERT,
  },
};

export const OppfyltVilkår: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.MANUELL_VURDERING_AV_OMSORGSVILKARET,
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er godkjent',
        kanLoses: false,
      },
    ] as Aksjonspunkt[],
    isReadOnly: true,
    isSubmittable: false,
    status: VilkarUtfallType.OPPFYLT,
  },
};

export const AvslåttVilkår: Story = {
  args: {
    behandling: {
      uuid: '1',
      versjon: 1,
      behandlingsresultat: {
        avslagsarsak: Avslagsarsak.INGEN_BEREGNINGSREGLER,
      },
    } as Behandling,
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.MANUELL_VURDERING_AV_OMSORGSVILKARET,
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er avslått',
        kanLoses: false,
      },
    ],
    isReadOnly: true,
    isSubmittable: false,
    status: VilkarUtfallType.IKKE_OPPFYLT,
  },
};
