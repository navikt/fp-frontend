import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  Avslagsarsak,
  TilretteleggingType,
  VilkarUtfallType,
} from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import {
  Aksjonspunkt,
  ArbeidsforholdFodselOgTilrettelegging,
  Behandling,
  Fagsak,
  FodselOgTilrettelegging,
  Vilkar,
} from '@navikt/fp-types';

import { SvangerskapVilkarProsessIndex } from './SvangerskapVilkarProsessIndex';

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  behandlingsresultat: {},
} as Behandling;

const meta = {
  title: 'prosess/prosess-vilkar-svangerskap',
  component: SvangerskapVilkarProsessIndex,
  args: {
    submitCallback: action('button-click') as (data: any) => Promise<void>,
    alleKodeverk: alleKodeverk as any,
    isAksjonspunktOpen: true,
    alleMerknaderFraBeslutter: {},
    setFormData: () => undefined,
    svangerskapspengerTilrettelegging: {} as FodselOgTilrettelegging,
    vilkar: [
      {
        lovReferanse: '§§Dette er en lovreferanse',
      },
    ] as Vilkar[],
    fagsak: {} as Fagsak,
  },
} satisfies Meta<typeof SvangerskapVilkarProsessIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ÅpentAksjonspunktSkalIkkeKunneInnvilge: Story = {
  args: {
    behandling: defaultBehandling,
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.SVANGERSKAPSVILKARET,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
      },
    ] as Aksjonspunkt[],
    isReadOnly: false,
    readOnlySubmitButton: false,
    status: VilkarUtfallType.IKKE_VURDERT,
  },
};

export const ÅpentAksjonspunktSkalKunneInnvilge: Story = {
  args: {
    behandling: defaultBehandling,
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.SVANGERSKAPSVILKARET,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
      },
    ] as Aksjonspunkt[],
    isReadOnly: false,
    readOnlySubmitButton: false,
    status: VilkarUtfallType.IKKE_VURDERT,
    svangerskapspengerTilrettelegging: {
      arbeidsforholdListe: [
        {
          tilretteleggingDatoer: [
            {
              type: TilretteleggingType.DELVIS_TILRETTELEGGING,
            },
          ],
        } as ArbeidsforholdFodselOgTilrettelegging,
      ],
    } as FodselOgTilrettelegging,
  },
};

export const OppfyltVilkår: Story = {
  args: {
    behandling: defaultBehandling,
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.SVANGERSKAPSVILKARET,
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: 'Dette vilkåret er godkjent',
      },
    ] as Aksjonspunkt[],
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
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.SVANGERSKAPSVILKARET,
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: 'Dette vilkåret er avslått',
      },
    ] as Aksjonspunkt[],
    isReadOnly: true,
    readOnlySubmitButton: true,
    status: VilkarUtfallType.IKKE_OPPFYLT,
  },
};
