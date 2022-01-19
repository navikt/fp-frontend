import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import AdopsjonFaktaIndex from '@fpsak-frontend/fakta-adopsjon';
import {
  Behandling, FamilieHendelseSamling, Soknad, Aksjonspunkt,
} from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import { FaktaAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';

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
  soknadType: soknadType.FODSEL,
  farSokerType: 'ADOPTERER_ALENE',
  omsorgsovertakelseDato: '2022-09-14',
  barnetsAnkomstTilNorgeDato: '2022-09-13',
} as Soknad;

const merknaderFraBeslutter = {
  notAccepted: false,
};

export default {
  title: 'fakta/fakta-adopsjon',
  component: AdopsjonFaktaIndex,
};

const Template: Story<{
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  isForeldrepengerFagsak?: boolean;
}> = ({
  aksjonspunkter,
  submitCallback,
  alleMerknaderFraBeslutter,
  isForeldrepengerFagsak = true,
}) => (
  <AdopsjonFaktaIndex
    soknad={soknad}
    familiehendelse={familieHendelse}
    submitCallback={submitCallback}
    readOnly={false}
    harApneAksjonspunkter
    submittable
    alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
    setFormData={() => undefined}
    behandling={behandling}
    aksjonspunkter={aksjonspunkter}
    alleKodeverk={alleKodeverk as any}
    isForeldrepengerFagsak={isForeldrepengerFagsak}
  />
);

export const AksjonspunktForAdopsjonsvilkåret = Template.bind({});
AksjonspunktForAdopsjonsvilkåret.args = {
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.ADOPSJONSDOKUMENTAJON,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
    erAktivt: true,
  }],
  alleMerknaderFraBeslutter: {
    [aksjonspunktCodes.ADOPSJONSDOKUMENTAJON]: merknaderFraBeslutter,
  },
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const AksjonspunktForOmSøkerErMannSomAdoptererAlene = Template.bind({});
AksjonspunktForOmSøkerErMannSomAdoptererAlene.args = {
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
    erAktivt: true,
  }],
  alleMerknaderFraBeslutter: {
    [aksjonspunktCodes.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE]: merknaderFraBeslutter,
  },
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const AksjonspunktForOmAdopsjonGjelderEktefellesBarn = Template.bind({});
AksjonspunktForOmAdopsjonGjelderEktefellesBarn.args = {
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
    erAktivt: true,
  }],
  alleMerknaderFraBeslutter: {
    [aksjonspunktCodes.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN]: merknaderFraBeslutter,
  },
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const IkkeVisBarnetsAnkomstDatoForEngangsstønad = Template.bind({});
IkkeVisBarnetsAnkomstDatoForEngangsstønad.args = {
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
    erAktivt: true,
  }],
  alleMerknaderFraBeslutter: {
    [aksjonspunktCodes.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN]: merknaderFraBeslutter,
  },
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  isForeldrepengerFagsak: false,
};
