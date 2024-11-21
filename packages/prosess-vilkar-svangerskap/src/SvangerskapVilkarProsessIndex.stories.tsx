import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  AksjonspunktKode,
  Avslagsarsak,
  AksjonspunktStatus,
  VilkarUtfallType,
  TilretteleggingType,
} from '@navikt/fp-kodeverk';
import {
  Aksjonspunkt,
  ArbeidsforholdFodselOgTilrettelegging,
  Behandling,
  Fagsak,
  FodselOgTilrettelegging,
  Vilkar,
} from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import SvangerskapVilkarProsessIndex from './SvangerskapVilkarProsessIndex';

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  behandlingsresultat: {},
} as Behandling;

export default {
  title: 'prosess/prosess-vilkar-svangerskap',
  component: SvangerskapVilkarProsessIndex,
};

const Template: StoryFn<{
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  behandling: Behandling;
  aksjonspunkter: Aksjonspunkt[];
  isReadOnly: boolean;
  readOnlySubmitButton: boolean;
  status: string;
  svangerskapspengerTilrettelegging?: FodselOgTilrettelegging;
}> = ({
  submitCallback,
  behandling,
  aksjonspunkter,
  isReadOnly,
  readOnlySubmitButton,
  status,
  svangerskapspengerTilrettelegging = {} as FodselOgTilrettelegging,
}) => (
  <SvangerskapVilkarProsessIndex
    alleKodeverk={alleKodeverk as any}
    submitCallback={submitCallback}
    isReadOnly={isReadOnly}
    isAksjonspunktOpen
    readOnlySubmitButton={readOnlySubmitButton}
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
    behandling={behandling}
    aksjonspunkter={aksjonspunkter}
    status={status}
    svangerskapspengerTilrettelegging={svangerskapspengerTilrettelegging}
    vilkar={
      [
        {
          lovReferanse: '§§Dette er en lovreferanse',
        },
      ] as Vilkar[]
    }
    fagsak={{} as Fagsak}
  />
);

export const ÅpentAksjonspunktSkalIkkeKunneInnvilge = Template.bind({});
ÅpentAksjonspunktSkalIkkeKunneInnvilge.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
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
};

export const ÅpentAksjonspunktSkalKunneInnvilge = Template.bind({});
ÅpentAksjonspunktSkalKunneInnvilge.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
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
};

export const OppfyltVilkår = Template.bind({});
OppfyltVilkår.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
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
};

export const AvslåttVilkår = Template.bind({});
AvslåttVilkår.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
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
};
