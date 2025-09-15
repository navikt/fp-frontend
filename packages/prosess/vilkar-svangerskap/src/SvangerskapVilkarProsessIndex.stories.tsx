import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus, Avslagsarsak, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type {
  Aksjonspunkt,
  ArbeidsforholdFodselOgTilrettelegging,
  Behandling,
  FodselOgTilrettelegging,
} from '@navikt/fp-types';

import { SvangerskapVilkarProsessIndex } from './SvangerskapVilkarProsessIndex';

const meta = {
  title: 'prosess/prosess-vilkar-svangerskap',
  component: SvangerskapVilkarProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    svangerskapspengerTilrettelegging: {} as FodselOgTilrettelegging,
  },
  render: args => <SvangerskapVilkarProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof SvangerskapVilkarProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ÅpentAksjonspunktSkalIkkeKunneInnvilge: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.SVANGERSKAPSVILKARET,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: null,
      },
    ] as Aksjonspunkt[],
    isReadOnly: false,
    status: VilkarUtfallType.IKKE_VURDERT,
  },
};

export const ÅpentAksjonspunktSkalKunneInnvilge: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.SVANGERSKAPSVILKARET,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: null,
      },
    ] as Aksjonspunkt[],
    status: VilkarUtfallType.IKKE_VURDERT,
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
      {
        definisjon: AksjonspunktKode.SVANGERSKAPSVILKARET,
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: 'Dette vilkåret er godkjent',
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
        definisjon: AksjonspunktKode.SVANGERSKAPSVILKARET,
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: 'Dette vilkåret er avslått',
      },
    ] as Aksjonspunkt[],
    isReadOnly: true,
    isSubmittable: false,
    status: VilkarUtfallType.IKKE_OPPFYLT,
  },
};
