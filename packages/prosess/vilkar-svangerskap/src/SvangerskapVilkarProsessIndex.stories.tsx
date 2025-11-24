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
import type { ArbeidsforholdFodselOgTilrettelegging, BehandlingFpSak, FodselOgTilrettelegging } from '@navikt/fp-types';

import { SvangerskapVilkarProsessIndex } from './SvangerskapVilkarProsessIndex';

const meta = {
  title: 'prosess/prosess-vilkar-svangerskap',
  component: SvangerskapVilkarProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    svangerskapspengerTilrettelegging: {
      arbeidsforholdListe: [],
      saksbehandlet: false,
    } satisfies FodselOgTilrettelegging,
  },
  render: args => <SvangerskapVilkarProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof SvangerskapVilkarProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ÅpentAksjonspunktSkalIkkeKunneInnvilge: Story = {
  args: {
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.MANUELL_VURDERING_AV_SVANGERSKAPSPENGERVILKÅRET, {
        kanLoses: false,
      }),
    ],
    isReadOnly: false,
    vilkårForPanel: [lagVilkår('SVP_VK_1', { vilkarStatus: 'IKKE_VURDERT' })],
    status: 'IKKE_VURDERT',
  },
};

export const ÅpentAksjonspunktSkalKunneInnvilge: Story = {
  args: {
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.MANUELL_VURDERING_AV_SVANGERSKAPSPENGERVILKÅRET)],
    status: 'IKKE_VURDERT',
    vilkårForPanel: [lagVilkår('SVP_VK_1', { vilkarStatus: 'IKKE_VURDERT' })],
    svangerskapspengerTilrettelegging: {
      arbeidsforholdListe: [
        {
          tilretteleggingDatoer: [
            {
              type: 'DELVIS_TILRETTELEGGING',
            },
          ],
        } as ArbeidsforholdFodselOgTilrettelegging,
      ],
    } as FodselOgTilrettelegging,
  },
};

export const OppfyltVilkår: Story = {
  args: {
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.MANUELL_VURDERING_AV_SVANGERSKAPSPENGERVILKÅRET, {
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er godkjent',
      }),
    ],
    vilkårForPanel: [lagVilkår('SVP_VK_1', { vilkarStatus: 'OPPFYLT' })],
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
    } as BehandlingFpSak,
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.MANUELL_VURDERING_AV_SVANGERSKAPSPENGERVILKÅRET, {
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er avslått',
      }),
    ],
    vilkårForPanel: [lagVilkår('SVP_VK_1', { vilkarStatus: 'IKKE_OPPFYLT' })],
    isReadOnly: true,
    isSubmittable: false,
    status: 'IKKE_OPPFYLT',
  },
};
