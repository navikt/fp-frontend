import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  FordelingPeriodeKilde,
  RelasjonsRolleType,
  UtsettelseÅrsak,
  UttakArbeidType,
  UttakPeriodeType,
} from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { ArbeidsgiverOpplysningerPerId, Fagsak } from '@navikt/fp-types';

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

const meta = {
  title: 'fakta/fakta-uttak',
  component: UttakFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    arbeidsgiverOpplysningerPerId,
    kanOverstyre: false,
    submittable: true,
    faktaArbeidsforhold: [
      {
        arbeidsgiverReferanse: '910909088',
        arbeidType: UttakArbeidType.ORDINÆRT_ARBEID,
      },
      {
        arbeidType: UttakArbeidType.SELVSTENDIG_NÆRINGSDRIVENDE,
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
      overstyrtOmsorg: null,
      førsteUttaksdato: '2022-01-31',
    },
    uttakKontrollerFaktaPerioder: [
      {
        fom: '2022-11-12',
        tom: '2022-12-01',
        uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
        arbeidsforhold: undefined,
        flerbarnsdager: false,
        periodeKilde: FordelingPeriodeKilde.SØKNAD,
      },
    ],
    kanOverstyre: false,
  },
};

export const VisUttaksperiodeUtenAksjonspunktKanOverstyre: Story = {
  args: {
    aksjonspunkterForPanel: [],
    ytelsefordeling: {
      overstyrtOmsorg: null,
      førsteUttaksdato: '2022-01-31',
    },
    uttakKontrollerFaktaPerioder: [
      {
        fom: '2022-11-12',
        tom: '2022-12-01',
        uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
        arbeidsforhold: undefined,
        flerbarnsdager: false,
        periodeKilde: FordelingPeriodeKilde.SØKNAD,
      },
    ],
    kanOverstyre: true,
  },
};

export const VisUttaksperiodeMedAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: null,
        kanLoses: true,
      },
    ],
    ytelsefordeling: {
      overstyrtOmsorg: null,
      førsteUttaksdato: '2022-01-31',
    },
    uttakKontrollerFaktaPerioder: [
      {
        fom: '2022-11-12',
        tom: '2022-12-01',
        uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
        arbeidstidsprosent: 10,
        arbeidsforhold: {
          arbeidsgiverReferanse: '910909088',
          arbeidType: UttakArbeidType.ORDINÆRT_ARBEID,
        },
        samtidigUttaksprosent: 80,
        flerbarnsdager: true,
        periodeKilde: FordelingPeriodeKilde.SØKNAD,
      },
      {
        fom: '2022-12-02',
        tom: '2022-12-10',
        uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
        arbeidstidsprosent: 50,
        arbeidsforhold: {
          arbeidsgiverReferanse: '910909088',
          arbeidType: UttakArbeidType.ORDINÆRT_ARBEID,
        },
        flerbarnsdager: false,
        periodeKilde: FordelingPeriodeKilde.SØKNAD,
      },
      {
        fom: '2022-12-11',
        tom: '2022-12-20',
        uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
        arbeidstidsprosent: 50,
        arbeidsforhold: {
          arbeidsgiverReferanse: '910909088',
          arbeidType: UttakArbeidType.ORDINÆRT_ARBEID,
        },
        flerbarnsdager: false,
        periodeKilde: FordelingPeriodeKilde.SØKNAD,
      },
    ],
    kanOverstyre: false,
  },
};

export const VisUtsettelseperiodeMedAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: null,
        kanLoses: true,
      },
    ],
    ytelsefordeling: {
      overstyrtOmsorg: null,
      førsteUttaksdato: '2022-01-31',
    },
    uttakKontrollerFaktaPerioder: [
      {
        fom: '2022-11-12',
        tom: '2022-12-01',
        utsettelseÅrsak: UtsettelseÅrsak.ARBEID,
        periodeKilde: FordelingPeriodeKilde.SØKNAD,
      },
    ],
    kanOverstyre: false,
  },
};

export const VisOverføringsperiodeMedAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: null,
        kanLoses: true,
      },
    ],
    ytelsefordeling: {
      overstyrtOmsorg: null,
      førsteUttaksdato: '2022-01-31',
    },
    uttakKontrollerFaktaPerioder: [
      {
        fom: '2022-11-12',
        tom: '2022-12-01',
        overføringÅrsak: OverføringÅrsak.IKKE_RETT_ANNEN_FORELDER,
        uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
        periodeKilde: FordelingPeriodeKilde.SØKNAD,
      },
    ],
    kanOverstyre: false,
  },
};

export const VisAksjonspunktDerIngenPerioderFinnes: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.FAKTA_UTTAK_INGEN_PERIODER_KODE,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: null,
        kanLoses: true,
      },
    ],
    ytelsefordeling: {
      overstyrtOmsorg: null,
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
        definisjon: AksjonspunktKode.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: null,
        kanLoses: true,
      },
    ],
    ytelsefordeling: {
      overstyrtOmsorg: null,
      førsteUttaksdato: '2022-01-31',
    },
    uttakKontrollerFaktaPerioder: [
      {
        fom: '2022-11-12',
        tom: '2022-12-01',
        uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
        arbeidstidsprosent: 50,
        arbeidsforhold: {
          arbeidsgiverReferanse: '91090823',
          arbeidType: UttakArbeidType.ORDINÆRT_ARBEID,
        },
        flerbarnsdager: false,
        periodeKilde: FordelingPeriodeKilde.SØKNAD,
      },
    ],
    kanOverstyre: false,
  },
};

export const VisAksjonspunktDerEnIkkeHarBeregningsgrunnlagVedGradering: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: null,
        kanLoses: true,
      },
    ],
    ytelsefordeling: {
      overstyrtOmsorg: null,
      førsteUttaksdato: '2022-01-31',
    },
    uttakKontrollerFaktaPerioder: [
      {
        fom: '2022-11-12',
        tom: '2022-12-01',
        uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
        arbeidstidsprosent: 50,
        arbeidsforhold: {
          arbeidsgiverReferanse: '910923',
          arbeidType: UttakArbeidType.ORDINÆRT_ARBEID,
        },
        flerbarnsdager: false,
        periodeKilde: FordelingPeriodeKilde.SØKNAD,
      },
    ],
    kanOverstyre: false,
  },
};

export const VisPanelDerAksjonspunktErLøstOgBehandlingAvsluttet: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE,
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: 'Dette er en begrunnelse',
        kanLoses: false,
      },
    ],
    ytelsefordeling: {
      overstyrtOmsorg: null,
      førsteUttaksdato: '2022-01-31',
    },
    uttakKontrollerFaktaPerioder: [
      {
        fom: '2022-11-12',
        tom: '2022-12-01',
        uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
        arbeidstidsprosent: 50,
        arbeidsforhold: {
          arbeidsgiverReferanse: '910909088',
          arbeidType: UttakArbeidType.ORDINÆRT_ARBEID,
        },
        samtidigUttaksprosent: 50,
        morsAktivitet: 'ARBEID',
        flerbarnsdager: true,
        periodeKilde: FordelingPeriodeKilde.SØKNAD,
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
        definisjon: AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE,
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: 'Dette er en begrunnelse',
        kanLoses: false,
      },
    ],
    ytelsefordeling: {
      overstyrtOmsorg: null,
      førsteUttaksdato: '2022-01-31',
    },
    uttakKontrollerFaktaPerioder: [
      {
        fom: '2022-11-12',
        tom: '2022-12-01',
        uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
        arbeidstidsprosent: 50,
        arbeidsforhold: {
          arbeidsgiverReferanse: '910909088',
          arbeidType: UttakArbeidType.ORDINÆRT_ARBEID,
        },
        samtidigUttaksprosent: 50,
        morsAktivitet: 'ARBEID',
        flerbarnsdager: true,
        periodeKilde: FordelingPeriodeKilde.SØKNAD,
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
        definisjon: AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: null,
        kanLoses: true,
      },
    ],
    ytelsefordeling: {
      overstyrtOmsorg: null,
      førsteUttaksdato: '2022-01-31',
    },
    uttakKontrollerFaktaPerioder: [
      {
        fom: '2022-11-12',
        tom: '2022-12-01',
        uttakPeriodeType: UttakPeriodeType.FELLESPERIODE,
        arbeidstidsprosent: 10,
        arbeidsforhold: {
          arbeidsgiverReferanse: '910909088',
          arbeidType: UttakArbeidType.ORDINÆRT_ARBEID,
        },
        samtidigUttaksprosent: 80,
        flerbarnsdager: true,
        periodeKilde: FordelingPeriodeKilde.SØKNAD,
      },
      {
        fom: '2022-12-02',
        tom: '2022-12-10',
        uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
        arbeidstidsprosent: 50,
        arbeidsforhold: {
          arbeidsgiverReferanse: '910909088',
          arbeidType: UttakArbeidType.ORDINÆRT_ARBEID,
        },
        flerbarnsdager: false,
        periodeKilde: FordelingPeriodeKilde.SØKNAD,
      },
      {
        fom: '2022-12-11',
        tom: '2022-12-20',
        uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
        arbeidstidsprosent: 50,
        arbeidsforhold: {
          arbeidsgiverReferanse: '910909088',
          arbeidType: UttakArbeidType.ORDINÆRT_ARBEID,
        },
        flerbarnsdager: false,
        periodeKilde: FordelingPeriodeKilde.SØKNAD,
      },
    ],
    kanOverstyre: false,
    fagsak: { relasjonsRolleType: RelasjonsRolleType.FAR } as Fagsak,
  },
};
