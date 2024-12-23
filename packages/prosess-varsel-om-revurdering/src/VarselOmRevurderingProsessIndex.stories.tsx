import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';

import { AksjonspunktKode,AksjonspunktStatus, BehandlingType } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Aksjonspunkt, Behandling, Fagsak, FamilieHendelse, FamilieHendelseSamling, Soknad } from '@navikt/fp-types';
import { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import VarselOmRevurderingProsessIndex from './VarselOmRevurderingProsessIndex';

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  behandlingÅrsaker: [
    {
      erAutomatiskRevurdering: true,
    },
  ],
  sprakkode: 'NN',
  type: BehandlingType.FORSTEGANGSSOKNAD,
} as Behandling;

const familieHendelse = {
  register: {
    avklartBarn: [
      {
        fodselsdato: '2019-01-10',
        dodsdato: undefined,
      },
    ],
  },
  gjeldende: {
    termindato: '2019-01-01',
    vedtaksDatoSomSvangerskapsuke: 43,
  },
} as FamilieHendelseSamling;

const soknad = {
  fodselsdatoer: { 1: '2019-01-10' } as { [key: number]: string },
  termindato: '2019-01-01',
  utstedtdato: '2019-01-02',
  antallBarn: 1,
} as Soknad;

const soknadOriginalBehandling = {
  ...soknad,
} as Soknad;

const familiehendelseOriginalBehandling = {
  avklartBarn: [
    {
      fodselsdato: '2019-01-10',
    },
  ],
  termindato: '2019-01-01',
  antallBarnTermin: 1,
} as FamilieHendelse;

const aksjonspunkter = [
  {
    definisjon: AksjonspunktKode.VARSEL_REVURDERING_MANUELL,
    status: AksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
  },
] as Aksjonspunkt[];

export default {
  title: 'prosess/prosess-varsel-om-revurdering',
  component: VarselOmRevurderingProsessIndex,
};

const Template: StoryFn<{
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  previewCallback: (data: any) => Promise<any>;
  behandling: Behandling;
}> = ({ submitCallback, previewCallback, behandling }) => (
  <VarselOmRevurderingProsessIndex
    behandling={behandling}
    alleKodeverk={alleKodeverk as any}
    aksjonspunkter={aksjonspunkter}
    submitCallback={submitCallback}
    isReadOnly={false}
    isAksjonspunktOpen
    readOnlySubmitButton
    status=""
    vilkar={[]}
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
    familiehendelse={familieHendelse}
    soknad={soknad}
    soknadOriginalBehandling={soknadOriginalBehandling}
    familiehendelseOriginalBehandling={familiehendelseOriginalBehandling}
    previewCallback={previewCallback}
    fagsak={{} as Fagsak}
  />
);

export const ForFørstegangsbehandling = Template.bind({});
ForFørstegangsbehandling.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  previewCallback: action('button-click') as any,
  behandling: defaultBehandling,
};

export const ForRevurdering = Template.bind({});
ForRevurdering.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  previewCallback: action('button-click') as any,
  behandling: {
    ...defaultBehandling,
    type: BehandlingType.REVURDERING,
  },
};
