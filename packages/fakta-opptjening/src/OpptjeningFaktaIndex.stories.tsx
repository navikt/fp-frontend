import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import opptjeningAktivitetType from '@fpsak-frontend/kodeverk/src/opptjeningAktivitetType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import OpptjeningFaktaIndex from '@fpsak-frontend/fakta-opptjening';
import { Behandling, Aksjonspunkt, Opptjening } from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

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

const Template: Story<{
  aksjonspunkter: Aksjonspunkt[],
  opptjening: Opptjening,
  submitCallback: (data: any) => Promise<void>;
}> = ({
  aksjonspunkter,
  opptjening,
  submitCallback,
}) => (
  <OpptjeningFaktaIndex
    behandling={behandling as Behandling}
    opptjening={opptjening}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    aksjonspunkter={aksjonspunkter}
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.VURDER_PERIODER_MED_OPPTJENING]: merknaderFraBeslutter,
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
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.VURDER_PERIODER_MED_OPPTJENING,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
    erAktivt: true,
  }],
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
    opptjeningAktivitetList: [{
      aktivitetType: opptjeningAktivitetType.ARBEID,
      opptjeningFom: '1995-09-14',
      opptjeningTom: '9999-12-31',
      arbeidsgiverReferanse: '3',
      arbeidsforholdRef: 'e5ec2632-0e31-4c8f-8190-d942053f8474',
      stillingsandel: 100,
      naringRegistreringsdato: '1995-09-14',
      erGodkjent: true,
      erEndret: false,
    }, {
      aktivitetType: opptjeningAktivitetType.NARING,
      opptjeningFom: '1995-09-14',
      opptjeningTom: '9999-12-31',
      arbeidsgiverReferanse: '1',
      stillingsandel: 100,
      naringRegistreringsdato: '1995-09-14',
      erEndret: false,
    }, {
      aktivitetType: opptjeningAktivitetType.ARBEID,
      opptjeningFom: '2018-01-01',
      opptjeningTom: '2018-11-01',
      arbeidsgiverReferanse: '1',
      arbeidsforholdRef: 'e5ec2632-0e31-4c8f-8190-d942053f847b',
      stillingsandel: 100,
      naringRegistreringsdato: '1995-09-14',
      erGodkjent: true,
      erEndret: false,
    }],
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
    opptjeningAktivitetList: [{
      opptjeningFom: '2017-01-01',
      opptjeningTom: '9999-12-31',
      aktivitetType: opptjeningAktivitetType.ARBEID,
      arbeidsgiverReferanse: '1',
      arbeidsforholdRef: 'bf623ff9-6ffb-4a81-b9f1-2648e5530a47',
      erEndret: false,
      erGodkjent: true,
      naringRegistreringsdato: '1995-09-14',
      stillingsandel: 50,
    }, {
      opptjeningFom: '2017-01-01',
      opptjeningTom: '9999-12-31',
      aktivitetType: opptjeningAktivitetType.DAGPENGER,
      arbeidsgiverReferanse: '1',
      arbeidsforholdRef: 'bf623ff9-6ffb-4a81-b9f1-2648e5530a47',
      erEndret: false,
      erGodkjent: true,
      naringRegistreringsdato: '1995-09-14',
      stillingsandel: 50,
    }],
  } as Opptjening,
};

export const MedToLikePerioderForSammeAktivitetstype = Template.bind({});
MedToLikePerioderForSammeAktivitetstype.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.VURDER_PERIODER_MED_OPPTJENING,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
    erAktivt: true,
  }],
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
    opptjeningAktivitetList: [{
      aktivitetType: opptjeningAktivitetType.NARING,
      opptjeningFom: '1995-09-14',
      opptjeningTom: '9999-12-31',
      arbeidsgiverReferanse: '1',
      arbeidsforholdRef: 'e5ec2632-0e31-4c8f-8190-d942053f847b',
      stillingsandel: 100,
      naringRegistreringsdato: '1995-09-14',
      erEndret: false,
    }, {
      aktivitetType: opptjeningAktivitetType.NARING,
      opptjeningFom: '1995-09-14',
      opptjeningTom: '9999-12-31',
      arbeidsgiverReferanse: '2',
      arbeidsforholdRef: 'e5ec2632-0e31-4c8f-8190-d942053f847b',
      stillingsandel: 100,
      naringRegistreringsdato: '1995-09-14',
      erGodkjent: true,
      erEndret: false,
    }],
  } as Opptjening,
};

export const MedAlleOpptjeningsaktiviteterFiltrertBort = Template.bind({});
MedAlleOpptjeningsaktiviteterFiltrertBort.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.VURDER_PERIODER_MED_OPPTJENING,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
    erAktivt: true,
  }],
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
    opptjeningAktivitetList: [{
      aktivitetType: opptjeningAktivitetType.ARBEID,
      opptjeningFom: '2020-12-25',
      opptjeningTom: '2021-10-24',
      arbeidsgiverReferanse: '3',
      arbeidsforholdRef: 'e5ec2632-0e31-4c8f-8190-d942053f8474',
      stillingsandel: 100,
      naringRegistreringsdato: '1995-09-14',
      erGodkjent: true,
      erEndret: false,
    }],
  } as Opptjening,
};
