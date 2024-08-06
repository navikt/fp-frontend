import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { AksjonspunktCode, aksjonspunktStatus } from '@navikt/fp-kodeverk';
import {
  Aksjonspunkt,
  Behandling,
  DokumentasjonVurderingBehov,
  UttakType,
  UttakVurdering,
  UttakÅrsak,
} from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import UttakDokumentasjonFaktaIndex from './UttakDokumentasjonFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const opprettetDokumentasjonVurderingBehovListe = [
  {
    fom: '2022-11-01',
    tom: '2023-01-07',
    type: UttakType.UTSETTELSE,
    årsak: UttakÅrsak.INNLEGGELSE_SØKER,
  },
  {
    fom: '2022-01-08',
    tom: '2022-02-13',
    type: UttakType.OVERFØRING,
    årsak: UttakÅrsak.SYKDOM_ANNEN_FORELDER,
  },
  {
    fom: '2022-11-18',
    tom: '2022-12-03',
    type: UttakType.UTTAK,
    årsak: UttakÅrsak.AKTIVITETSKRAV_ARBEID,
  },
  {
    fom: '2022-11-15',
    tom: '2022-11-20',
    type: UttakType.UTTAK,
    årsak: UttakÅrsak.TIDLIG_OPPSTART_FAR,
  },
] as DokumentasjonVurderingBehov[];

export default {
  title: 'fakta/fakta-uttaksdokumentasjon',
  component: UttakDokumentasjonFaktaIndex,
};

const Template: StoryFn<{
  aksjonspunkter: Aksjonspunkt[];
  dokumentasjonVurderingBehov: DokumentasjonVurderingBehov[];
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  readOnly: boolean;
  submittable: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
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
    harApneAksjonspunkter={aksjonspunkter.some(ap => ap.status === aksjonspunktStatus.OPPRETTET)}
    submittable={submittable}
    alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
    setFormData={() => undefined}
  />
);

export const AksjonspunktMedUavklartePerioder = Template.bind({});
AksjonspunktMedUavklartePerioder.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.VURDER_UTTAK_DOKUMENTASJON,
      status: aksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ],
  dokumentasjonVurderingBehov: opprettetDokumentasjonVurderingBehovListe,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: false,
  submittable: true,
};

const utfortDokumentasjonVurderingBehovListe = [
  {
    fom: '2024-07-30',
    tom: '2024-08-02',
    type: UttakType.UTSETTELSE,
    årsak: UttakÅrsak.INNLEGGELSE_SØKER,
    vurdering: UttakVurdering.IKKE_GODKJENT,
  },
  {
    fom: '2024-02-08',
    tom: '2024-02-13',
    type: UttakType.OVERFØRING,
    årsak: UttakÅrsak.SYKDOM_ANNEN_FORELDER,
    vurdering: UttakVurdering.GODKJENT,
  },
  {
    fom: '2024-05-30',
    tom: '2024-06-11',
    type: UttakType.UTTAK,
    årsak: UttakÅrsak.AKTIVITETSKRAV_ARBEID,
    vurdering: UttakVurdering.GODKJENT,
    morsStillingsprosent: 60,
  },
  {
    fom: '2024-08-07',
    tom: '2024-08-23',
    type: UttakType.UTTAK,
    årsak: UttakÅrsak.TIDLIG_OPPSTART_FAR,
    vurdering: UttakVurdering.IKKE_DOKUMENTERT,
  },
] as DokumentasjonVurderingBehov[];

export const AksjonspunktSomErBekreftetOgBehandlingAvsluttet = Template.bind({});
AksjonspunktSomErBekreftetOgBehandlingAvsluttet.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.VURDER_UTTAK_DOKUMENTASJON,
      status: aksjonspunktStatus.UTFORT,
      begrunnelse: 'Dette er en begrunnelse',
      kanLoses: false,
    },
  ],
  dokumentasjonVurderingBehov: utfortDokumentasjonVurderingBehovListe,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: true,
  submittable: false,
};

export const AksjonspunktErBekreftetMenBehandlingErÅpen = Template.bind({});
AksjonspunktErBekreftetMenBehandlingErÅpen.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.VURDER_UTTAK_DOKUMENTASJON,
      status: aksjonspunktStatus.UTFORT,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ],
  dokumentasjonVurderingBehov: [
    {
      fom: '2022-12-08',
      tom: '2022-12-13',
      type: UttakType.UTTAK,
      årsak: UttakÅrsak.HV_ØVELSE,
      vurdering: UttakVurdering.GODKJENT,
    },
  ],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: false,
  submittable: true,
  alleMerknaderFraBeslutter: {},
};

export const UavklartePerioderMenIkkeAksjonspunktEnnå = Template.bind({});
UavklartePerioderMenIkkeAksjonspunktEnnå.args = {
  aksjonspunkter: [],
  dokumentasjonVurderingBehov: opprettetDokumentasjonVurderingBehovListe,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: false,
  submittable: true,
};
