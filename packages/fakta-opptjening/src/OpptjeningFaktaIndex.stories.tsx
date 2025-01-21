import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus, OpptjeningAktivitetType } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Behandling, Opptjening } from '@navikt/fp-types';

import { OpptjeningFaktaIndex } from './OpptjeningFaktaIndex';

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

const meta = {
  title: 'fakta/fakta-opptjening',
  component: OpptjeningFaktaIndex,
  args: {
    behandling: behandling as Behandling,
    arbeidsgiverOpplysningerPerId,
    alleKodeverk: alleKodeverk as any,
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.VURDER_PERIODER_MED_OPPTJENING]: merknaderFraBeslutter,
    },
    submitCallback: action('button-click') as (data: any) => Promise<void>,
    readOnly: false,
    harApneAksjonspunkter: true,
    submittable: true,
    setFormData: () => undefined,
  },
} satisfies Meta<typeof OpptjeningFaktaIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const MedAksjonspunkt: Story = {
  args: {
    submitCallback: action('button-click') as (data: any) => Promise<any>,
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.VURDER_PERIODER_MED_OPPTJENING,
        status: AksjonspunktStatus.OPPRETTET,
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
          aktivitetType: OpptjeningAktivitetType.ARBEID,
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
          aktivitetType: OpptjeningAktivitetType.ARBEID,
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
          aktivitetType: OpptjeningAktivitetType.NARING,
          opptjeningFom: '2019-02-11',
          opptjeningTom: '2019-10-24',
          arbeidsgiverReferanse: '1',
          stillingsandel: 100,
          naringRegistreringsdato: '1995-09-14',
          erEndret: false,
        },
        {
          aktivitetType: OpptjeningAktivitetType.AAP,
          opptjeningFom: '2019-02-11',
          opptjeningTom: '2019-06-24',
          arbeidsgiverReferanse: '1',
          stillingsandel: 100,
          naringRegistreringsdato: '1995-09-14',
          erEndret: false,
          erGodkjent: false,
        },
        {
          aktivitetType: OpptjeningAktivitetType.SYKEPENGER,
          opptjeningFom: '2018-12-11',
          opptjeningTom: '2019-04-24',
          arbeidsgiverReferanse: '1',
          stillingsandel: 100,
          naringRegistreringsdato: '1995-09-14',
          erEndret: false,
        },
        {
          aktivitetType: OpptjeningAktivitetType.ARBEID,
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
  },
};

export const UtenAksjonspunkt: Story = {
  args: {
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
          aktivitetType: OpptjeningAktivitetType.ARBEID,
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
          aktivitetType: OpptjeningAktivitetType.DAGPENGER,
          arbeidsgiverReferanse: '1',
          arbeidsforholdRef: 'bf623ff9-6ffb-4a81-b9f1-2648e5530a47',
          erEndret: false,
          erGodkjent: true,
          naringRegistreringsdato: '1995-09-14',
          stillingsandel: 50,
        },
      ],
    } as Opptjening,
  },
};

export const MedToLikePerioderForSammeAktivitetstype: Story = {
  args: {
    submitCallback: action('button-click') as (data: any) => Promise<any>,
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.VURDER_PERIODER_MED_OPPTJENING,
        status: AksjonspunktStatus.OPPRETTET,
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
          aktivitetType: OpptjeningAktivitetType.NARING,
          opptjeningFom: '1995-09-14',
          opptjeningTom: '9999-12-31',
          arbeidsgiverReferanse: '1',
          arbeidsforholdRef: 'e5ec2632-0e31-4c8f-8190-d942053f847b',
          stillingsandel: 100,
          naringRegistreringsdato: '1995-09-14',
          erEndret: false,
        },
        {
          aktivitetType: OpptjeningAktivitetType.NARING,
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
  },
};

export const MedAlleOpptjeningsaktiviteterFiltrertBort: Story = {
  args: {
    submitCallback: action('button-click') as (data: any) => Promise<any>,
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.VURDER_PERIODER_MED_OPPTJENING,
        status: AksjonspunktStatus.OPPRETTET,
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
          aktivitetType: OpptjeningAktivitetType.ARBEID,
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
  },
};
