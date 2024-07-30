import React from 'react';
import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';

import { AksjonspunktCode, aksjonspunktStatus, opptjeningAktivitetType } from '@navikt/fp-kodeverk';
import { Behandling, Aksjonspunkt, Opptjening } from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';

import OpptjeningFaktaIndex from './OpptjeningFaktaIndex';

const behandling = {
  uuid: '1',
  versjon: 1,
};

const merknaderFraBeslutter = {
  notAccepted: false,
};

const arbeidsgiverOpplysningerPerId = {
  1: {
    erPrivatPerson: false,
    identifikator: '973861778',
    navn: 'EQUINOR ASA AVD STATOIL SOKKELVIRKSOMHET',
  },
};

export default {
  title: 'fakta/fakta-opptjening',
  component: OpptjeningFaktaIndex,
};

const Template: StoryFn<{
  aksjonspunkter: Aksjonspunkt[];
  opptjening: Opptjening;
  submitCallback: (data: any) => Promise<void>;
}> = ({ aksjonspunkter, opptjening, submitCallback }) => (
  <OpptjeningFaktaIndex
    behandling={behandling as Behandling}
    opptjening={opptjening}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    aksjonspunkter={aksjonspunkter}
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={{
      [AksjonspunktCode.VURDER_PERIODER_MED_OPPTJENING]: merknaderFraBeslutter,
    }}
    submitCallback={submitCallback}
    readOnly={false}
    harApneAksjonspunkter
    submittable
    setFormData={() => undefined}
  />
);

export const MedAksjonspunkt = Template.bind({});
MedAksjonspunkt.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.VURDER_PERIODER_MED_OPPTJENING,
      status: aksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ],
  opptjening: {
    fastsattOpptjening: {
      opptjeningFom: '2018-12-25',
      opptjeningTom: '2019-10-24',
      opptjeningperiode: {
        måneder: 0,
        dager: 0,
      },
      fastsattOpptjeningAktivitetList: [],
    },
    opptjeningAktivitetList: [
      {
        aktivitetType: opptjeningAktivitetType.ARBEID,
        opptjeningFom: '2019-02-11',
        opptjeningTom: '2019-03-24',
        arbeidsgiverReferanse: '3',
        arbeidsforholdRef: 'e5ec2632-0e31-4c8f-8190-d942053f8474',
        stillingsandel: 100,
        naringRegistreringsdato: '1995-09-14',
        erGodkjent: true,
        erEndret: false,
      },
      {
        aktivitetType: opptjeningAktivitetType.ARBEID,
        opptjeningFom: '2019-05-11',
        opptjeningTom: '2019-07-24',
        arbeidsgiverReferanse: '3',
        arbeidsforholdRef: 'e5ec2632-0e31-4c8f-8190-d942053f8474',
        stillingsandel: 100,
        naringRegistreringsdato: '1995-09-14',
        erGodkjent: true,
        erEndret: false,
      },
      {
        aktivitetType: opptjeningAktivitetType.NARING,
        opptjeningFom: '2019-02-11',
        opptjeningTom: '2019-10-24',
        arbeidsgiverReferanse: '1',
        stillingsandel: 100,
        naringRegistreringsdato: '1995-09-14',
        erEndret: false,
      },
      {
        aktivitetType: opptjeningAktivitetType.AAP,
        opptjeningFom: '2019-02-11',
        opptjeningTom: '2019-06-24',
        arbeidsgiverReferanse: '1',
        stillingsandel: 100,
        naringRegistreringsdato: '1995-09-14',
        erEndret: false,
        erGodkjent: false,
      },
      {
        aktivitetType: opptjeningAktivitetType.SYKEPENGER,
        opptjeningFom: '2018-12-11',
        opptjeningTom: '2019-04-24',
        arbeidsgiverReferanse: '1',
        stillingsandel: 100,
        naringRegistreringsdato: '1995-09-14',
        erEndret: false,
      },
      {
        aktivitetType: opptjeningAktivitetType.ARBEID,
        opptjeningFom: '2018-01-01',
        opptjeningTom: '2018-11-01',
        arbeidsgiverReferanse: '1',
        arbeidsforholdRef: 'e5ec2632-0e31-4c8f-8190-d942053f847b',
        stillingsandel: 100,
        naringRegistreringsdato: '1995-09-14',
        erGodkjent: true,
        erEndret: false,
      },
    ],
    ferdiglignetNæring: [
      {
        år: '2016',
        beløp: 100000,
      },
      {
        år: '2017',
        beløp: 150000,
      },
      {
        år: '2018',
        beløp: 200000,
      },
    ],
  } as Opptjening,
};

export const UtenAksjonspunkt = Template.bind({});
UtenAksjonspunkt.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [],
  opptjening: {
    fastsattOpptjening: {
      opptjeningFom: '2018-11-30',
      opptjeningTom: '2019-09-29',
      opptjeningperiode: {
        dager: 4,
        måneder: 10,
      },
    },
    opptjeningAktivitetList: [
      {
        opptjeningFom: '2017-01-01',
        opptjeningTom: '9999-12-31',
        aktivitetType: opptjeningAktivitetType.ARBEID,
        arbeidsgiverReferanse: '1',
        arbeidsforholdRef: 'bf623ff9-6ffb-4a81-b9f1-2648e5530a47',
        erEndret: false,
        erGodkjent: true,
        naringRegistreringsdato: '1995-09-14',
        stillingsandel: 50,
      },
      {
        opptjeningFom: '2017-01-01',
        opptjeningTom: '9999-12-31',
        aktivitetType: opptjeningAktivitetType.DAGPENGER,
        arbeidsgiverReferanse: '1',
        arbeidsforholdRef: 'bf623ff9-6ffb-4a81-b9f1-2648e5530a47',
        erEndret: false,
        erGodkjent: true,
        naringRegistreringsdato: '1995-09-14',
        stillingsandel: 50,
      },
    ],
  } as Opptjening,
};

export const MedToLikePerioderForSammeAktivitetstype = Template.bind({});
MedToLikePerioderForSammeAktivitetstype.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.VURDER_PERIODER_MED_OPPTJENING,
      status: aksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ],
  opptjening: {
    fastsattOpptjening: {
      opptjeningFom: '2018-12-25',
      opptjeningTom: '2019-10-24',
      opptjeningperiode: {
        måneder: 0,
        dager: 0,
      },
      fastsattOpptjeningAktivitetList: [],
    },
    opptjeningAktivitetList: [
      {
        aktivitetType: opptjeningAktivitetType.NARING,
        opptjeningFom: '1995-09-14',
        opptjeningTom: '9999-12-31',
        arbeidsgiverReferanse: '1',
        arbeidsforholdRef: 'e5ec2632-0e31-4c8f-8190-d942053f847b',
        stillingsandel: 100,
        naringRegistreringsdato: '1995-09-14',
        erEndret: false,
      },
      {
        aktivitetType: opptjeningAktivitetType.NARING,
        opptjeningFom: '1995-09-14',
        opptjeningTom: '9999-12-31',
        arbeidsgiverReferanse: '2',
        arbeidsforholdRef: 'e5ec2632-0e31-4c8f-8190-d942053f847b',
        stillingsandel: 100,
        naringRegistreringsdato: '1995-09-14',
        erGodkjent: true,
        erEndret: false,
      },
    ],
    ferdiglignetNæring: [
      {
        år: '2016',
        beløp: 100000,
      },
      {
        år: '2017',
        beløp: 150000,
      },
      {
        år: '2018',
        beløp: 200000,
      },
    ],
  } as Opptjening,
};

export const MedAlleOpptjeningsaktiviteterFiltrertBort = Template.bind({});
MedAlleOpptjeningsaktiviteterFiltrertBort.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.VURDER_PERIODER_MED_OPPTJENING,
      status: aksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ],
  opptjening: {
    fastsattOpptjening: {
      opptjeningFom: '2018-12-25',
      opptjeningTom: '2019-10-24',
      opptjeningperiode: {
        måneder: 0,
        dager: 0,
      },
      fastsattOpptjeningAktivitetList: [],
    },
    opptjeningAktivitetList: [
      {
        aktivitetType: opptjeningAktivitetType.ARBEID,
        opptjeningFom: '2020-12-25',
        opptjeningTom: '2021-10-24',
        arbeidsgiverReferanse: '3',
        arbeidsforholdRef: 'e5ec2632-0e31-4c8f-8190-d942053f8474',
        stillingsandel: 100,
        naringRegistreringsdato: '1995-09-14',
        erGodkjent: true,
        erEndret: false,
      },
    ],
  } as Opptjening,
};
