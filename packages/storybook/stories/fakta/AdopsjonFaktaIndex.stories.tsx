import React from 'react';
import { action } from '@storybook/addon-actions';

import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import AdopsjonFaktaIndex from '@fpsak-frontend/fakta-adopsjon';
import {
  Behandling, FamilieHendelseSamling, Soknad,
} from '@fpsak-frontend/types';

import alleKodeverk from '../mocks/alleKodeverk.json';

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
  soknadType: {
    kode: soknadType.FODSEL,
    kodeverk: '',
  },
  farSokerType: {
    kode: 'ADOPTERER_ALENE',
    kodeverk: 'FAR_SOEKER_TYPE',
  },
} as Soknad;

const merknaderFraBeslutter = {
  notAccepted: false,
};

const standardFaktaProps = {
  aksjonspunkter: [],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: false,
  harApneAksjonspunkter: true,
  submittable: true,
  alleMerknaderFraBeslutter: {},
  setFormData: () => undefined,
};

export default {
  title: 'fakta/fakta-adopsjon',
  component: AdopsjonFaktaIndex,
};

export const visAksjonspunktForAdopsjonsvilkåret = (args) => (
  <AdopsjonFaktaIndex
    {...standardFaktaProps}
    {...args}
    behandling={behandling}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.ADOPSJONSDOKUMENTAJON,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      begrunnelse: undefined,
      kanLoses: true,
      erAktivt: true,
    }]}
    alleKodeverk={alleKodeverk as any}
    isForeldrepengerFagsak
  />
);

visAksjonspunktForAdopsjonsvilkåret.args = {
  soknad,
  familiehendelse: familieHendelse,
  alleMerknaderFraBeslutter: {
    [aksjonspunktCodes.ADOPSJONSDOKUMENTAJON]: merknaderFraBeslutter,
  },
};

export const visAksjonspunktForOmSøkerErMannSomAdoptererAlene = (args) => (
  <AdopsjonFaktaIndex
    {...standardFaktaProps}
    {...args}
    behandling={behandling}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      begrunnelse: undefined,
      kanLoses: true,
      erAktivt: true,
    }]}
    alleKodeverk={alleKodeverk as any}
    isForeldrepengerFagsak
  />
);

visAksjonspunktForOmSøkerErMannSomAdoptererAlene.args = {
  soknad,
  familiehendelse: familieHendelse,
  alleMerknaderFraBeslutter: {
    [aksjonspunktCodes.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE]: merknaderFraBeslutter,
  },
};

export const visAksjonspunktForOmAdopsjonGjelderEktefellesBarn = (args) => (
  <AdopsjonFaktaIndex
    {...standardFaktaProps}
    {...args}
    behandling={behandling}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      begrunnelse: undefined,
      kanLoses: true,
      erAktivt: true,
    }]}
    alleKodeverk={alleKodeverk as any}
  />
);

visAksjonspunktForOmSøkerErMannSomAdoptererAlene.args = {
  soknad,
  familiehendelse: familieHendelse,
  alleMerknaderFraBeslutter: {
    [aksjonspunktCodes.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN]: merknaderFraBeslutter,
  },
  isForeldrepengerFagsak: true,
};
