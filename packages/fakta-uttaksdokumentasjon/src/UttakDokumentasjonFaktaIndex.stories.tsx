import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import {
  Behandling, Aksjonspunkt, DokumentasjonVurderingBehov, UttakType, UttakÅrsak, UttakVurdering,
} from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import { FaktaAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import UttakDokumentasjonFaktaIndex from './UttakDokumentasjonFaktaIndex';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const dokumentasjonVurderingBehovListe = [{
  fom: '2022-11-01',
  tom: '2022-11-07',
  type: UttakType.UTSETTELSE,
  årsak: UttakÅrsak.INNLEGGELSE_SØKER,
  vurdering: UttakVurdering.GODKJENT,
}, {
  fom: '2022-11-08',
  tom: '2022-11-13',
  type: UttakType.OVERFØRING,
  årsak: UttakÅrsak.INNLEGGELSE_BARN,
}, {
  fom: '2022-12-08',
  tom: '2022-12-13',
  type: UttakType.AKTIVITETSKRAV,
  årsak: UttakÅrsak.HV_OVELSE,
}, {
  fom: '2022-11-15',
  tom: '2022-11-20',
  type: UttakType.TIDLIG_OPPSTART_FAR,
  årsak: UttakÅrsak.NAV_TILTAK,
}, {
  fom: '2022-12-15',
  tom: '2022-12-20',
  type: UttakType.OVERFØRING,
  årsak: UttakÅrsak.SYKDOM_SØKER,
}] as DokumentasjonVurderingBehov[];

const merknaderFraBeslutter = {
  notAccepted: true,
};

export default {
  title: 'fakta/fakta-uttaksdokumentasjon',
  component: UttakDokumentasjonFaktaIndex,
};

const Template: Story<{
  aksjonspunkter: Aksjonspunkt[];
  dokumentasjonVurderingBehov: DokumentasjonVurderingBehov[];
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  readOnly: boolean;
  submittable: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}> = ({
  aksjonspunkter,
  dokumentasjonVurderingBehov,
  submitCallback,
  readOnly,
  submittable,
  alleMerknaderFraBeslutter = {},
}) => (
  <UttakDokumentasjonFaktaIndex
    behandling={behandling}
    dokumentasjonVurderingBehov={dokumentasjonVurderingBehov}
    alleKodeverk={alleKodeverk as any}
    aksjonspunkter={aksjonspunkter}
    submitCallback={submitCallback}
    readOnly={readOnly}
    harApneAksjonspunkter={aksjonspunkter.some((ap) => ap.status === aksjonspunktStatus.OPPRETTET)}
    submittable={submittable}
    alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
    setFormData={() => undefined}
  />
);

export const AksjonspunktMedToUavklartePerioder = Template.bind({});
AksjonspunktMedToUavklartePerioder.args = {
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.KONTROLLER_AKTIVITETSKRAV,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
    erAktivt: true,
  }],
  dokumentasjonVurderingBehov: dokumentasjonVurderingBehovListe,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: false,
  submittable: true,
};

export const AksjonspunktSomErBekreftetOgBehandlingAvsluttet = Template.bind({});
AksjonspunktSomErBekreftetOgBehandlingAvsluttet.args = {
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.KONTROLLER_AKTIVITETSKRAV,
    status: aksjonspunktStatus.UTFORT,
    begrunnelse: undefined,
    kanLoses: false,
    erAktivt: false,
  }],
  dokumentasjonVurderingBehov: [dokumentasjonVurderingBehovListe[0]],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: true,
  submittable: false,
};

export const AksjonspunktSomErReåpnetAvBeslutter = Template.bind({});
AksjonspunktSomErReåpnetAvBeslutter.args = {
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.KONTROLLER_AKTIVITETSKRAV,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
    erAktivt: true,
  }],
  dokumentasjonVurderingBehov: dokumentasjonVurderingBehovListe,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: false,
  submittable: true,
  alleMerknaderFraBeslutter: {
    [aksjonspunktCodes.KONTROLLER_AKTIVITETSKRAV]: merknaderFraBeslutter,
  },
};

export const AksjonspunktErBekreftetMenBehandlingErÅpen = Template.bind({});
AksjonspunktErBekreftetMenBehandlingErÅpen.args = {
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.KONTROLLER_AKTIVITETSKRAV,
    status: aksjonspunktStatus.UTFORT,
    begrunnelse: undefined,
    kanLoses: true,
    erAktivt: true,
  }],
  dokumentasjonVurderingBehov: [dokumentasjonVurderingBehovListe[0]],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: false,
  submittable: true,
  alleMerknaderFraBeslutter: {},
};
