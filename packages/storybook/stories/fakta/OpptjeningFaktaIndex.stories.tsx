import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import opptjeningAktivitetType from '@fpsak-frontend/kodeverk/src/opptjeningAktivitetType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import OpptjeningFaktaIndex from '@fpsak-frontend/fakta-opptjening';
import { Behandling, Opptjening } from '@fpsak-frontend/types';

import withReduxProvider from '../../decorators/withRedux';

import alleKodeverk from '../mocks/alleKodeverk.json';

const behandling = {
  id: 1,
  versjon: 1,
};

const opptjeningNårEnHarAksjonspunkt = {
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
    aktivitetType: {
      kode: opptjeningAktivitetType.NARING,
      kodeverk: '',
    },
    originalFom: null,
    originalTom: null,
    opptjeningFom: '1995-09-14',
    opptjeningTom: '9999-12-31',
    arbeidsgiverReferanse: '1',
    oppdragsgiverOrg: '973861778',
    arbeidsforholdRef: null,
    stillingsandel: 100,
    naringRegistreringsdato: '1995-09-14',
    erManueltOpprettet: false,
    erGodkjent: null,
    erEndret: false,
    begrunnelse: null,
    erPeriodeEndret: false,
  }, {
    aktivitetType: {
      kode: opptjeningAktivitetType.ARBEID,
      kodeverk: '',
    },
    originalFom: null,
    originalTom: null,
    opptjeningFom: '2018-01-01',
    opptjeningTom: '2018-11-01',
    arbeidsgiverReferanse: '1',
    oppdragsgiverOrg: '973861778',
    arbeidsforholdRef: 'e5ec2632-0e31-4c8f-8190-d942053f847b',
    stillingsandel: 100,
    naringRegistreringsdato: '1995-09-14',
    erManueltOpprettet: false,
    erGodkjent: true,
    erEndret: false,
    begrunnelse: null,
    erPeriodeEndret: false,
  }],
};

const opptjeningUtenAksjonspunkt = {
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
    aktivitetType: {
      kode: opptjeningAktivitetType.ARBEID,
      kodeverk: '',
    },
    arbeidsgiverReferanse: '1',
    arbeidsforholdRef: 'bf623ff9-6ffb-4a81-b9f1-2648e5530a47',
    erEndret: false,
    erGodkjent: true,
    erManueltOpprettet: false,
    erPeriodeEndret: false,
    naringRegistreringsdato: '1995-09-14',
    oppdragsgiverOrg: '973861778',
    stillingsandel: 50,
  }, {
    opptjeningFom: '2017-01-01',
    opptjeningTom: '9999-12-31',
    aktivitetType: {
      kode: opptjeningAktivitetType.DAGPENGER,
      kodeverk: '',
    },
    arbeidsgiverReferanse: '1',
    arbeidsforholdRef: 'bf623ff9-6ffb-4a81-b9f1-2648e5530a47',
    erEndret: false,
    erGodkjent: true,
    erManueltOpprettet: false,
    erPeriodeEndret: false,
    aringRegistreringsdato: '1995-09-14',
    oppdragsgiverOrg: '973861778',
    stillingsandel: 50,
  }],
} as Opptjening;

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

const standardFaktaProps = {
  aksjonspunkter: [],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: boolean('readOnly', false),
  harApneAksjonspunkter: boolean('harApneAksjonspunkter', true),
  submittable: boolean('submittable', true),
  alleMerknaderFraBeslutter: {},
};

export default {
  title: 'fakta/fakta-opptjening',
  component: OpptjeningFaktaIndex,
  decorators: [withKnobs, withReduxProvider],
};

export const visAksjonspunktForOpptjeningsvilkåret = () => (
  <OpptjeningFaktaIndex
    {...standardFaktaProps}
    behandling={behandling as Behandling}
    opptjening={object('opptjening', opptjeningNårEnHarAksjonspunkt)}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.VURDER_PERIODER_MED_OPPTJENING,
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
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.VURDER_PERIODER_MED_OPPTJENING]: object('merknaderFraBeslutter', merknaderFraBeslutter),
    }}
  />
);

export const visPanelUtenAksjonpunkt = () => (
  <OpptjeningFaktaIndex
    {...standardFaktaProps}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    behandling={behandling as Behandling}
    opptjening={object('opptjening', opptjeningUtenAksjonspunkt)}
    alleKodeverk={alleKodeverk as any}
  />
);
