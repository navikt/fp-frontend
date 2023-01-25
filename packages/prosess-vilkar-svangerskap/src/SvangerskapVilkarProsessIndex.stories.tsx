import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import avslagsarsakCodes from '@navikt/fp-kodeverk/src/avslagsarsakCodes';
import vilkarUtfallType from '@navikt/fp-kodeverk/src/vilkarUtfallType';
import aksjonspunktStatus from '@navikt/fp-kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@navikt/fp-kodeverk/src/aksjonspunktCodes';
import {
  Aksjonspunkt, ArbeidsforholdFodselOgTilrettelegging, Behandling, FodselOgTilrettelegging, Vilkar,
} from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import tilretteleggingType from '@navikt/fp-kodeverk/src/tilretteleggingType';

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

const Template: Story<{
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  behandling: Behandling,
  aksjonspunkter: Aksjonspunkt[],
  isReadOnly: boolean,
  readOnlySubmitButton: boolean,
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
    vilkar={[{
      lovReferanse: '§§Dette er en lovreferanse',
    }] as Vilkar[]}
  />
);

export const ÅpentAksjonspunktSkalIkkeKunneInnvilge = Template.bind({});
ÅpentAksjonspunktSkalIkkeKunneInnvilge.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  behandling: defaultBehandling,
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.SVANGERSKAPSVILKARET,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
  }] as Aksjonspunkt[],
  isReadOnly: false,
  readOnlySubmitButton: false,
  status: vilkarUtfallType.IKKE_VURDERT,
};

export const ÅpentAksjonspunktSkalKunneInnvilge = Template.bind({});
ÅpentAksjonspunktSkalKunneInnvilge.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  behandling: defaultBehandling,
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.SVANGERSKAPSVILKARET,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
  }] as Aksjonspunkt[],
  isReadOnly: false,
  readOnlySubmitButton: false,
  status: vilkarUtfallType.IKKE_VURDERT,
  svangerskapspengerTilrettelegging: {
    arbeidsforholdListe: [{
      tilretteleggingDatoer: [{
        type: tilretteleggingType.DELVIS_TILRETTELEGGING,
      }],
    } as ArbeidsforholdFodselOgTilrettelegging],
  } as FodselOgTilrettelegging,
};

export const OppfyltVilkår = Template.bind({});
OppfyltVilkår.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  behandling: defaultBehandling,
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.SVANGERSKAPSVILKARET,
    status: aksjonspunktStatus.UTFORT,
    begrunnelse: 'Dette vilkåret er godkjent',
  }] as Aksjonspunkt[],
  isReadOnly: true,
  readOnlySubmitButton: true,
  status: vilkarUtfallType.OPPFYLT,
};

export const AvslåttVilkår = Template.bind({});
AvslåttVilkår.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  behandling: {
    uuid: '1',
    versjon: 1,
    behandlingsresultat: {
      avslagsarsak: avslagsarsakCodes.INGEN_BEREGNINGSREGLER,
    },
  } as Behandling,
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.SVANGERSKAPSVILKARET,
    status: aksjonspunktStatus.UTFORT,
    begrunnelse: 'Dette vilkåret er avslått',
  }] as Aksjonspunkt[],
  isReadOnly: true,
  readOnlySubmitButton: true,
  status: vilkarUtfallType.IKKE_OPPFYLT,
};
