import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import FodselFaktaIndex from '@fpsak-frontend/fakta-fodsel';
import { FaktaAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import {
  Behandling, FamilieHendelse, FamilieHendelseSamling, Soknad, Aksjonspunkt,
} from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

const behandling = {
  uuid: '1',
  versjon: 1,
  type: behandlingType.FORSTEGANGSSOKNAD,
} as Behandling;

const familieHendelse = {
  register: {
    avklartBarn: [{
      fodselsdato: '2019-01-10',
    }],
  },
  gjeldende: {
    avklartBarn: [{
      fodselsdato: '2019-01-01',
    }],
    termindato: '2019-01-01',
    utstedtdato: '2019-01-01',
    antallBarnTermin: 1,
    vedtaksDatoSomSvangerskapsuke: 43,
    erOverstyrt: false,
    morForSykVedFodsel: true,
    dokumentasjonForeligger: true,
    brukAntallBarnFraTps: true,
  },
} as FamilieHendelseSamling;

const soknad = {
  fodselsdatoer: { 1: '2019-01-10' } as { [key: number]: string },
  termindato: '2019-01-01',
  utstedtdato: '2019-01-02',
  antallBarn: 1,
  soknadType: soknadType.FODSEL,
} as Soknad;

const soknadOriginalBehandling = {
  ...soknad,
};

const familiehendelseOriginalBehandling = {
  avklartBarn: [{
    fodselsdato: '2019-01-10',
  }],
  termindato: '2019-01-01',
  antallBarnTermin: 1,
} as FamilieHendelse;

const defaultAksjonspunkter = [{
  definisjon: aksjonspunktCodes.TERMINBEKREFTELSE,
  status: aksjonspunktStatus.OPPRETTET,
  begrunnelse: undefined,
  kanLoses: true,
  erAktivt: true,
}];

const merknaderFraBeslutter = {
  notAccepted: false,
};

export default {
  title: 'fakta/fakta-fodsel',
  component: FodselFaktaIndex,
};

const Template: Story<{
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  readOnly: boolean;
  harApneAksjonspunkter: boolean;
}> = ({
  aksjonspunkter,
  submitCallback,
  alleMerknaderFraBeslutter,
  readOnly = false,
  harApneAksjonspunkter = true,
}) => (
  <FodselFaktaIndex
    submitCallback={submitCallback}
    readOnly={readOnly}
    harApneAksjonspunkter={harApneAksjonspunkter}
    submittable
    alleKodeverk={alleKodeverk as any}
    setFormData={() => undefined}
    behandling={behandling}
    soknad={soknad}
    familiehendelse={familieHendelse}
    soknadOriginalBehandling={soknadOriginalBehandling}
    familiehendelseOriginalBehandling={familiehendelseOriginalBehandling}
    aksjonspunkter={aksjonspunkter}
    alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
  />
);

export const AksjonspunktTerminbekreftelse = Template.bind({});
AksjonspunktTerminbekreftelse.args = {
  aksjonspunkter: defaultAksjonspunkter,
  alleMerknaderFraBeslutter: {
    [aksjonspunktCodes.TERMINBEKREFTELSE]: merknaderFraBeslutter,
  },
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const AksjonspunktSjekkManglendeFødsel = Template.bind({});
AksjonspunktSjekkManglendeFødsel.args = {
  aksjonspunkter: defaultAksjonspunkter.map((a) => ({
    ...a,
    definisjon: aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL,
  })),
  alleMerknaderFraBeslutter: {
    [aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL]: merknaderFraBeslutter,
  },
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ReadonlyPanel = Template.bind({});
ReadonlyPanel.args = {
  readOnly: true,
  harApneAksjonspunkter: false,
  aksjonspunkter: defaultAksjonspunkter.map((a) => ({
    ...a,
    status: aksjonspunktStatus.UTFORT,
    definisjon: aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL,
    begrunnelse: 'Dette er en begrunnelse',
  })),
  alleMerknaderFraBeslutter: {
    [aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL]: merknaderFraBeslutter,
  },
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const AksjonspunktVurderOmVilkårForSykdomErOppfylt = Template.bind({});
AksjonspunktVurderOmVilkårForSykdomErOppfylt.args = {
  aksjonspunkter: defaultAksjonspunkter.map((a) => ({
    ...a,
    definisjon: aksjonspunktCodes.VURDER_OM_VILKAR_FOR_SYKDOM_ER_OPPFYLT,
  })),
  alleMerknaderFraBeslutter: {
    [aksjonspunktCodes.VURDER_OM_VILKAR_FOR_SYKDOM_ER_OPPFYLT]: merknaderFraBeslutter,
  },
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const PanelForFødselssammenligningNårDetIkkeFinnesAksjonspunkter = Template.bind({});
PanelForFødselssammenligningNårDetIkkeFinnesAksjonspunkter.args = {
  aksjonspunkter: [],
  alleMerknaderFraBeslutter: {},
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
