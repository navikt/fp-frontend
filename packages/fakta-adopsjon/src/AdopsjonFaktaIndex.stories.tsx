import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';

import { AksjonspunktKode,AksjonspunktStatus, SoknadType } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Aksjonspunkt,Behandling, FamilieHendelseSamling, Soknad } from '@navikt/fp-types';
import { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import AdopsjonFaktaIndex from './AdopsjonFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const familieHendelse = {
  gjeldende: {
    adopsjonFodelsedatoer: {
      1: '2018-01-01',
      2: '2000-01-02',
    } as Record<number, string>,
  },
} as FamilieHendelseSamling;

const soknad = {
  fodselsdatoer: { 1: '2019-01-10' } as Record<number, string>,
  termindato: '2019-01-01',
  utstedtdato: '2019-01-02',
  antallBarn: 1,
  soknadType: SoknadType.FODSEL,
  farSokerType: 'ADOPTERER_ALENE',
  omsorgsovertakelseDato: '2022-09-14',
  barnetsAnkomstTilNorgeDato: '2022-09-13',
} as Soknad;

const merknaderFraBeslutter = {
  notAccepted: false,
};

const setFormData = () => undefined;

export default {
  title: 'fakta/fakta-adopsjon',
  component: AdopsjonFaktaIndex,
};

const Template: StoryFn<{
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  isForeldrepengerFagsak?: boolean;
}> = ({ aksjonspunkter, submitCallback, alleMerknaderFraBeslutter, isForeldrepengerFagsak = true }) => (
  <AdopsjonFaktaIndex
    soknad={soknad}
    familiehendelse={familieHendelse}
    submitCallback={submitCallback}
    readOnly={false}
    harApneAksjonspunkter
    submittable
    alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
    setFormData={setFormData}
    behandling={behandling}
    aksjonspunkter={aksjonspunkter}
    alleKodeverk={alleKodeverk as any}
    isForeldrepengerFagsak={isForeldrepengerFagsak}
  />
);

export const AksjonspunktForAdopsjonsvilkåret = Template.bind({});
AksjonspunktForAdopsjonsvilkåret.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.ADOPSJONSDOKUMENTAJON,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ],
  alleMerknaderFraBeslutter: {
    [AksjonspunktKode.ADOPSJONSDOKUMENTAJON]: merknaderFraBeslutter,
  },
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const AksjonspunktForOmSøkerErMannSomAdoptererAlene = Template.bind({});
AksjonspunktForOmSøkerErMannSomAdoptererAlene.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ],
  alleMerknaderFraBeslutter: {
    [AksjonspunktKode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE]: merknaderFraBeslutter,
  },
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const AksjonspunktForOmAdopsjonGjelderEktefellesBarn = Template.bind({});
AksjonspunktForOmAdopsjonGjelderEktefellesBarn.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ],
  alleMerknaderFraBeslutter: {
    [AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN]: merknaderFraBeslutter,
  },
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const IkkeVisBarnetsAnkomstDatoForEngangsstønad = Template.bind({});
IkkeVisBarnetsAnkomstDatoForEngangsstønad.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ],
  alleMerknaderFraBeslutter: {
    [AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN]: merknaderFraBeslutter,
  },
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  isForeldrepengerFagsak: false,
};
