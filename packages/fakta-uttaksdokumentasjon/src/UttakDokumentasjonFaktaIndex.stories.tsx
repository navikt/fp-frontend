import React from 'react';
import { StoryFn } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import { AksjonspunktCode, aksjonspunktStatus } from '@navikt/fp-kodeverk';
import {
  Behandling,
  Aksjonspunkt,
  DokumentasjonVurderingBehov,
  UttakType,
  UttakÅrsak,
  UttakVurdering,
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

const dokumentasjonVurderingBehovListe = [
  {
    fom: '2022-11-01',
    tom: '2022-11-07',
    type: UttakType.UTSETTELSE,
    årsak: UttakÅrsak.INNLEGGELSE_SØKER,
  },
  {
    fom: '2022-11-08',
    tom: '2022-11-13',
    type: UttakType.OVERFØRING,
    årsak: UttakÅrsak.SYKDOM_ANNEN_FORELDER,
  },
  {
    fom: '2022-12-08',
    tom: '2022-12-13',
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
  dokumentasjonVurderingBehov: dokumentasjonVurderingBehovListe,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: false,
  submittable: true,
};

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
  dokumentasjonVurderingBehov: [
    {
      fom: '2022-12-08',
      tom: '2022-12-13',
      type: UttakType.UTSETTELSE,
      årsak: UttakÅrsak.HV_ØVELSE,
      vurdering: UttakVurdering.GODKJENT,
    },
  ],
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
      begrunnelse: 'Dette er en begrunnelse',
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
  dokumentasjonVurderingBehov: dokumentasjonVurderingBehovListe,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: false,
  submittable: true,
};
