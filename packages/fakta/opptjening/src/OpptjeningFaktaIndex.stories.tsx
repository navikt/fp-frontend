import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Opptjening } from '@navikt/fp-types';

import { OpptjeningFaktaIndex } from './OpptjeningFaktaIndex';

const merknaderFraBeslutter = {
  notAccepted: false,
};

const arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId = {
  1: {
    erPrivatPerson: false,
    identifikator: '973861778',
    referanse: '973861778',
    navn: 'EQUINOR ASA AVD STATOIL SOKKELVIRKSOMHET',
  },
};

const meta = {
  title: 'fakta/fakta-opptjening',
  component: OpptjeningFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    arbeidsgiverOpplysningerPerId,
    alleMerknaderFraBeslutter: {
      ['5051']: merknaderFraBeslutter,
    },
  },
  render: args => <OpptjeningFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof OpptjeningFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

const aksjonspunktDefault = {
  definisjon: '5008',
  status: 'OPPR',

  kanLoses: true,
  toTrinnsBehandling: false,

  aksjonspunktType: 'AUTO',
  vilkarType: 'FP_VK_5',
  erAktivt: true,
} satisfies Aksjonspunkt;

export const MedAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: '5051',
        status: 'OPPR',

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
          aktivitetType: 'ARBEID',
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
          aktivitetType: 'ARBEID',
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
          aktivitetType: 'NÆRING',
          opptjeningFom: '2019-02-11',
          opptjeningTom: '2019-10-24',
          arbeidsgiverReferanse: '1',
          stillingsandel: 100,
          naringRegistreringsdato: '1995-09-14',
          erEndret: false,
        },
        {
          aktivitetType: 'AAP',
          opptjeningFom: '2019-02-11',
          opptjeningTom: '2019-06-24',
          arbeidsgiverReferanse: '1',
          stillingsandel: 100,
          naringRegistreringsdato: '1995-09-14',
          erEndret: false,
          erGodkjent: false,
        },
        {
          aktivitetType: 'SYKEPENGER',
          opptjeningFom: '2018-12-11',
          opptjeningTom: '2019-04-24',
          arbeidsgiverReferanse: '1',
          stillingsandel: 100,
          naringRegistreringsdato: '1995-09-14',
          erEndret: false,
        },
        {
          aktivitetType: 'ARBEID',
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
    } satisfies Opptjening,
  },
};

export const UtenAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [],
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
          aktivitetType: 'ARBEID',
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
          aktivitetType: 'DAGPENGER',
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
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: '5051',
        status: 'OPPR',

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
          aktivitetType: 'NÆRING',
          opptjeningFom: '1995-09-14',
          opptjeningTom: '9999-12-31',
          arbeidsgiverReferanse: '1',
          arbeidsforholdRef: 'e5ec2632-0e31-4c8f-8190-d942053f847b',
          stillingsandel: 100,
          naringRegistreringsdato: '1995-09-14',
          erEndret: false,
        },
        {
          aktivitetType: 'NÆRING',
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
    } satisfies Opptjening,
  },
};

export const MedAlleOpptjeningsaktiviteterFiltrertBort: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,

        definisjon: '5051',
        status: 'OPPR',

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
          aktivitetType: 'ARBEID',
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
      ferdiglignetNæring: [],
    } satisfies Opptjening,
  },
};
