import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus, Avslagsarsak, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Behandling, Vilkar } from '@navikt/fp-types';

import { AdopsjonVilkarProsessIndex } from './AdopsjonVilkarProsessIndex';

const meta = {
  title: 'prosess/prosess-vilkar-adopsjon',
  component: AdopsjonVilkarProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    vilkar: [
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
        definisjon: AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: null,
        kanLoses: true,
      },
    ],
    readOnlySubmitButton: false,
    status: VilkarUtfallType.IKKE_VURDERT,
  },
};

export const OppfyltVilkår: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: 'Dette vilkåret er godkjent',
        kanLoses: false,
      },
    ],
    isReadOnly: true,
    readOnlySubmitButton: true,
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
        definisjon: AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: 'Dette vilkåret er avslått',
        kanLoses: true,
      },
    ],
    isReadOnly: true,
    readOnlySubmitButton: true,
    status: VilkarUtfallType.IKKE_OPPFYLT,
  },
};
