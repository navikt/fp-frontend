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
}, {
  fom: '2022-11-08',
  tom: '2022-11-13',
  type: UttakType.OVERFØRING,
  årsak: UttakÅrsak.SYKDOM_ANNEN_FORELDER,
}, {
  fom: '2022-12-08',
  tom: '2022-12-13',
  type: UttakType.UTTAK,
  årsak: UttakÅrsak.AKTIVITETSKRAV,
}, {
  fom: '2022-11-15',
  tom: '2022-11-20',
  type: UttakType.UTTAK,
  årsak: UttakÅrsak.TIDLIG_OPPSTART_FAR,
}] as DokumentasjonVurderingBehov[];

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

export const AksjonspunktMedUavklartePerioder = Template.bind({});
AksjonspunktMedUavklartePerioder.args = {
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
    begrunnelse: 'Dette er en begrunnelse',
    kanLoses: false,
    erAktivt: false,
  }],
  dokumentasjonVurderingBehov: [{
    fom: '2022-12-08',
    tom: '2022-12-13',
    type: UttakType.UTSETTELSE,
    årsak: UttakÅrsak.HV_OVELSE,
    vurdering: UttakVurdering.GODKJENT,
  }],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: true,
  submittable: false,
};

export const AksjonspunktErBekreftetMenBehandlingErÅpen = Template.bind({});
AksjonspunktErBekreftetMenBehandlingErÅpen.args = {
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.KONTROLLER_AKTIVITETSKRAV,
    status: aksjonspunktStatus.UTFORT,
    begrunnelse: 'Dette er en begrunnelse',
    kanLoses: true,
    erAktivt: true,
  }],
  dokumentasjonVurderingBehov: [{
    fom: '2022-12-08',
    tom: '2022-12-13',
    type: UttakType.UTTAK,
    årsak: UttakÅrsak.HV_OVELSE,
    vurdering: UttakVurdering.GODKJENT,
  }],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: false,
  submittable: true,
  alleMerknaderFraBeslutter: {},
};
