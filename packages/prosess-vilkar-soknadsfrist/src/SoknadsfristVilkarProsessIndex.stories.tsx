import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  Avslagsarsak,
  SoknadType,
  VilkarType,
  VilkarUtfallType,
} from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Aksjonspunkt, Behandling, Fagsak, FamilieHendelseSamling, Soknad, Vilkar } from '@navikt/fp-types';
import { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import SoknadsfristVilkarProsessIndex from './SoknadsfristVilkarProsessIndex';

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  behandlingsresultat: {},
} as Behandling;

const vilkar = [
  {
    vilkarType: VilkarType.SOKNADFRISTVILKARET,
  },
] as Vilkar[];

const soknad = {
  soknadType: SoknadType.FODSEL,
  mottattDato: '2019-01-01',
  fodselsdatoer: { 1: '2019-01-01' } as { [key: number]: string },
  begrunnelseForSenInnsending: 'Dette er en begrunnelse',
  søknadsfrist: {
    mottattDato: '2019-01-01',
    utledetSøknadsfrist: '2019-07-01',
    dagerOversittetFrist: 2,
  },
} as Soknad;

const familiehendelse = {
  gjeldende: {
    avklartBarn: [
      {
        fodselsdato: '2019-01-02',
      },
    ],
  },
} as FamilieHendelseSamling;

export default {
  title: 'prosess/prosess-vilkar-soknadsfrist',
  component: SoknadsfristVilkarProsessIndex,
};

const Template: StoryFn<{
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  behandling: Behandling;
  aksjonspunkter: Aksjonspunkt[];
  isReadOnly: boolean;
  readOnlySubmitButton: boolean;
  status: string;
}> = ({ submitCallback, behandling, aksjonspunkter, isReadOnly, readOnlySubmitButton, status }) => (
  <SoknadsfristVilkarProsessIndex
    behandling={behandling}
    alleKodeverk={alleKodeverk as any}
    submitCallback={submitCallback}
    isReadOnly={isReadOnly}
    isAksjonspunktOpen
    readOnlySubmitButton={readOnlySubmitButton}
    vilkar={vilkar}
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
    soknad={soknad}
    familiehendelse={familiehendelse}
    aksjonspunkter={aksjonspunkter}
    status={status}
    fagsak={{} as Fagsak}
  />
);

export const ÅpentAksjonspunkt = Template.bind({});
ÅpentAksjonspunkt.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  behandling: defaultBehandling,
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.SOKNADSFRISTVILKARET,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      vilkarType: VilkarType.SOKNADFRISTVILKARET,
    },
  ] as Aksjonspunkt[],
  isReadOnly: false,
  readOnlySubmitButton: false,
  status: VilkarUtfallType.IKKE_VURDERT,
};

export const OppfyltVilkår = Template.bind({});
OppfyltVilkår.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  behandling: defaultBehandling,
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.SOKNADSFRISTVILKARET,
      status: AksjonspunktStatus.UTFORT,
      begrunnelse: 'Dette vilkåret er godkjent',
      vilkarType: VilkarType.SOKNADFRISTVILKARET,
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
      definisjon: AksjonspunktKode.SOKNADSFRISTVILKARET,
      status: AksjonspunktStatus.UTFORT,
      begrunnelse: 'Dette vilkåret er avslått',
      vilkarType: VilkarType.SOKNADFRISTVILKARET,
    },
  ] as Aksjonspunkt[],
  isReadOnly: true,
  readOnlySubmitButton: true,
  status: VilkarUtfallType.IKKE_OPPFYLT,
};
