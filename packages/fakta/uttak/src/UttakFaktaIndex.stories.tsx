import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Fagsak } from '@navikt/fp-types';

import { OverføringÅrsak } from './kodeverk/overføringÅrsak';
import { UttakFaktaIndex } from './UttakFaktaIndex';

const arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId = {
  910909088: {
    erPrivatPerson: false,
    identifikator: '910909088',
    referanse: '910909088',
    navn: 'BEDRIFT AS',
  },
};

const aksjonspunktDefault = {
  definisjon: AksjonspunktKode.AVKLAR_VILKÅR_FOR_OMSORGSOVERTAKELSE,
  status: 'OPPR',

  kanLoses: true,
  toTrinnsBehandling: false,

  aksjonspunktType: 'AUTO',
  vilkarType: 'FP_VK_5',
  erAktivt: true,
} satisfies Aksjonspunkt;

const meta = {
  title: 'fakta/fakta-uttak',
  component: UttakFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    arbeidsgiverOpplysningerPerId,
    kanOverstyre: false,
    faktaArbeidsforhold: [
      {
        arbeidsgiverReferanse: '910909088',
        arbeidType: 'ORDINÆRT_ARBEID',
      },
      {
        arbeidType: 'SELVSTENDIG_NÆRINGSDRIVENDE',
        arbeidsgiverReferanse: 'null',
      },
    ],
  },
  render: args => <UttakFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof UttakFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const VisUttaksperiodeUtenAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [],
    ytelsefordeling: {
      førsteUttaksdato: '2022-01-31',
    },
    uttakKontrollerFaktaPerioder: [
      {
        fom: '2022-11-12',
        tom: '2022-12-01',
        uttakPeriodeType: 'MØDREKVOTE',
        flerbarnsdager: false,
        periodeKilde: 'SØKNAD',
      },
    ],
    kanOverstyre: false,
  },
};

export const VisUttaksperiodeUtenAksjonspunktKanOverstyre: Story = {
  args: {
    aksjonspunkterForPanel: [],
    ytelsefordeling: {
      førsteUttaksdato: '2022-01-31',
    },
    uttakKontrollerFaktaPerioder: [
      {
        fom: '2022-11-12',
        tom: '2022-12-01',
        uttakPeriodeType: 'MØDREKVOTE',
        flerbarnsdager: false,
        periodeKilde: 'SØKNAD',
      },
    ],
    kanOverstyre: true,
  },
};

export const VisUttaksperiodeMedAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO,
        status: 'OPPR',

        kanLoses: true,
      },
    ],
    ytelsefordeling: {
      førsteUttaksdato: '2022-01-31',
    },
    uttakKontrollerFaktaPerioder: [
      {
        fom: '2022-11-12',
        tom: '2022-12-01',
        uttakPeriodeType: 'MØDREKVOTE',
        arbeidstidsprosent: 10,
        arbeidsforhold: {
          arbeidsgiverReferanse: '910909088',
          arbeidType: 'ORDINÆRT_ARBEID',
        },
        samtidigUttaksprosent: 80,
        flerbarnsdager: true,
        periodeKilde: 'SØKNAD',
      },
      {
        fom: '2022-12-02',
        tom: '2022-12-10',
        uttakPeriodeType: 'MØDREKVOTE',
        arbeidstidsprosent: 50,
        arbeidsforhold: {
          arbeidsgiverReferanse: '910909088',
          arbeidType: 'ORDINÆRT_ARBEID',
        },
        flerbarnsdager: false,
        periodeKilde: 'SØKNAD',
      },
      {
        fom: '2022-12-11',
        tom: '2022-12-20',
        uttakPeriodeType: 'MØDREKVOTE',
        arbeidstidsprosent: 50,
        arbeidsforhold: {
          arbeidsgiverReferanse: '910909088',
          arbeidType: 'ORDINÆRT_ARBEID',
        },
        flerbarnsdager: false,
        periodeKilde: 'SØKNAD',
      },
    ],
    kanOverstyre: false,
  },
};

export const VisUtsettelseperiodeMedAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO,
        status: 'OPPR',

        kanLoses: true,
      },
    ],
    ytelsefordeling: {
      førsteUttaksdato: '2022-01-31',
    },
    uttakKontrollerFaktaPerioder: [
      {
        fom: '2022-11-12',
        tom: '2022-12-01',
        utsettelseÅrsak: 'ARBEID',
        periodeKilde: 'SØKNAD',
      },
    ],
    kanOverstyre: false,
  },
};

export const VisOverføringsperiodeMedAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO,
        status: 'OPPR',

        kanLoses: true,
      },
    ],
    ytelsefordeling: {
      førsteUttaksdato: '2022-01-31',
    },
    uttakKontrollerFaktaPerioder: [
      {
        fom: '2022-11-12',
        tom: '2022-12-01',
        overføringÅrsak: OverføringÅrsak.IKKE_RETT_ANNEN_FORELDER,
        uttakPeriodeType: 'MØDREKVOTE',
        periodeKilde: 'SØKNAD',
      },
    ],
    kanOverstyre: false,
  },
};

export const VisAksjonspunktDerIngenPerioderFinnes: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.FAKTA_UTTAK_INGEN_PERIODER,
        status: 'OPPR',

        kanLoses: true,
      },
    ],
    ytelsefordeling: {
      førsteUttaksdato: '2022-01-31',
    },
    uttakKontrollerFaktaPerioder: [],
    kanOverstyre: false,
  },
};

export const VisAksjonspunktDerArbeidsfoholdErUkjentVedGradering: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET,
        status: 'OPPR',

        kanLoses: true,
      },
    ],
    ytelsefordeling: {
      førsteUttaksdato: '2022-01-31',
    },
    uttakKontrollerFaktaPerioder: [
      {
        fom: '2022-11-12',
        tom: '2022-12-01',
        uttakPeriodeType: 'MØDREKVOTE',
        arbeidstidsprosent: 50,
        arbeidsforhold: {
          arbeidsgiverReferanse: '91090823',
          arbeidType: 'ORDINÆRT_ARBEID',
        },
        flerbarnsdager: false,
        periodeKilde: 'SØKNAD',
      },
    ],
    kanOverstyre: false,
  },
};

export const VisAksjonspunktDerEnIkkeHarBeregningsgrunnlagVedGradering: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG,
        status: 'OPPR',

        kanLoses: true,
      },
    ],
    ytelsefordeling: {
      førsteUttaksdato: '2022-01-31',
    },
    uttakKontrollerFaktaPerioder: [
      {
        fom: '2022-11-12',
        tom: '2022-12-01',
        uttakPeriodeType: 'MØDREKVOTE',
        arbeidstidsprosent: 50,
        arbeidsforhold: {
          arbeidsgiverReferanse: '910923',
          arbeidType: 'ORDINÆRT_ARBEID',
        },
        flerbarnsdager: false,
        periodeKilde: 'SØKNAD',
      },
    ],
    kanOverstyre: false,
  },
};

export const VisPanelDerAksjonspunktErLøstOgBehandlingAvsluttet: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG,
        status: 'UTFO',
        begrunnelse: 'Dette er en begrunnelse',
        kanLoses: false,
      },
    ],
    ytelsefordeling: {
      førsteUttaksdato: '2022-01-31',
    },
    uttakKontrollerFaktaPerioder: [
      {
        fom: '2022-11-12',
        tom: '2022-12-01',
        uttakPeriodeType: 'MØDREKVOTE',
        arbeidstidsprosent: 50,
        arbeidsforhold: {
          arbeidsgiverReferanse: '910909088',
          arbeidType: 'ORDINÆRT_ARBEID',
        },
        samtidigUttaksprosent: 50,
        morsAktivitet: 'ARBEID',
        flerbarnsdager: true,
        periodeKilde: 'SØKNAD',
      },
    ],
    kanOverstyre: false,
    isReadOnly: true,
  },
};

export const VisBegrunnelseFraTidligereUtgaveAvPanel: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG,
        status: 'UTFO',
        begrunnelse: 'Dette er en begrunnelse',
        kanLoses: false,
      },
    ],
    ytelsefordeling: {
      førsteUttaksdato: '2022-01-31',
    },
    uttakKontrollerFaktaPerioder: [
      {
        fom: '2022-11-12',
        tom: '2022-12-01',
        uttakPeriodeType: 'MØDREKVOTE',
        arbeidstidsprosent: 50,
        arbeidsforhold: {
          arbeidsgiverReferanse: '910909088',
          arbeidType: 'ORDINÆRT_ARBEID',
        },
        samtidigUttaksprosent: 50,
        morsAktivitet: 'ARBEID',
        flerbarnsdager: true,
        periodeKilde: 'SØKNAD',
        begrunnelse: 'Dette er en gammel begrunnelse',
      },
    ],
    kanOverstyre: false,
    isReadOnly: true,
  },
};

export const VisUttaksperiodeMedAksjonspunktForFar: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO,
        status: 'OPPR',
        kanLoses: true,
      },
    ],
    ytelsefordeling: {
      førsteUttaksdato: '2022-01-31',
    },
    uttakKontrollerFaktaPerioder: [
      {
        fom: '2022-11-12',
        tom: '2022-12-01',
        uttakPeriodeType: 'FELLESPERIODE',
        arbeidstidsprosent: 10,
        arbeidsforhold: {
          arbeidsgiverReferanse: '910909088',
          arbeidType: 'ORDINÆRT_ARBEID',
        },
        samtidigUttaksprosent: 80,
        flerbarnsdager: true,
        periodeKilde: 'SØKNAD',
      },
      {
        fom: '2022-12-02',
        tom: '2022-12-10',
        uttakPeriodeType: 'MØDREKVOTE',
        arbeidstidsprosent: 50,
        arbeidsforhold: {
          arbeidsgiverReferanse: '910909088',
          arbeidType: 'ORDINÆRT_ARBEID',
        },
        flerbarnsdager: false,
        periodeKilde: 'SØKNAD',
      },
      {
        fom: '2022-12-11',
        tom: '2022-12-20',
        uttakPeriodeType: 'MØDREKVOTE',
        arbeidstidsprosent: 50,
        arbeidsforhold: {
          arbeidsgiverReferanse: '910909088',
          arbeidType: 'ORDINÆRT_ARBEID',
        },
        flerbarnsdager: false,
        periodeKilde: 'SØKNAD',
      },
    ],
    kanOverstyre: false,
    fagsak: { relasjonsRolleType: 'FARA' } as Fagsak,
  },
};
