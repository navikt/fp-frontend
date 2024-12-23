import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';

import { AksjonspunktKode,AksjonspunktStatus, RelasjonsRolleType, UttakPeriodeType } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Aksjonspunkt, Fagsak, KontrollerFaktaPeriode, Ytelsefordeling } from '@navikt/fp-types';
import { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import OverføringÅrsak from './kodeverk/overføringÅrsak';
import UtsettelseÅrsak from './kodeverk/utsettelseÅrsak';
import UttakFaktaIndex from './UttakFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';

const arbeidsgiverOpplysningerPerId = {
  910909088: {
    erPrivatPerson: false,
    identifikator: '910909088',
    navn: 'BEDRIFT AS',
  },
};

export default {
  title: 'fakta/fakta-uttak',
  component: UttakFaktaIndex,
};

const Template: StoryFn<{
  aksjonspunkter: Aksjonspunkt[];
  uttakKontrollerFaktaPerioder: KontrollerFaktaPeriode[];
  ytelsefordeling: Ytelsefordeling;
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  readOnly?: boolean;
  submittable?: boolean;
  kanOverstyre?: boolean;
  fagsak: Fagsak;
}> = ({
  aksjonspunkter,
  uttakKontrollerFaktaPerioder,
  ytelsefordeling,
  submitCallback,
  readOnly = false,
  submittable = true,
  kanOverstyre = false,
  fagsak = { relasjonsRolleType: RelasjonsRolleType.MOR } as Fagsak,
}) => (
  <UttakFaktaIndex
    fagsak={fagsak}
    aksjonspunkter={aksjonspunkter}
    ytelsefordeling={ytelsefordeling}
    uttakKontrollerFaktaPerioder={uttakKontrollerFaktaPerioder}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    alleKodeverk={alleKodeverk as any}
    readOnly={readOnly}
    kanOverstyre={kanOverstyre}
    submitCallback={submitCallback}
    setFormData={() => undefined}
    submittable={submittable}
    faktaArbeidsforhold={[
      {
        arbeidsgiverReferanse: '910909088',
        arbeidType: 'ORDINÆRT_ARBEID',
      },
      {
        arbeidType: 'SELVSTENDIG_NÆRINGSDRIVENDE',
        arbeidsgiverReferanse: 'null',
      },
    ]}
  />
);

export const VisUttaksperiodeUtenAksjonspunkt = Template.bind({});
VisUttaksperiodeUtenAksjonspunkt.args = {
  aksjonspunkter: [],
  ytelsefordeling: {
    overstyrtOmsorg: undefined,
    rettigheterAnnenforelder: {
      skalAvklareAnnenforelderUføretrygd: false,
      skalAvklareAnnenForelderRettEØS: false,
    },
    endringsdato: '2022-01-31',
    gjeldendeDekningsgrad: 100,
    førsteUttaksdato: '2022-01-31',
  },
  uttakKontrollerFaktaPerioder: [
    {
      fom: '2022-11-12',
      tom: '2022-12-01',
      uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
      arbeidsforhold: undefined,
      flerbarnsdager: false,
      periodeKilde: 'SØKNAD',
    },
  ],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  kanOverstyre: false,
};

export const VisUttaksperiodeUtenAksjonspunktKanOverstyre = Template.bind({});
VisUttaksperiodeUtenAksjonspunktKanOverstyre.args = {
  aksjonspunkter: [],
  ytelsefordeling: {
    overstyrtOmsorg: undefined,
    rettigheterAnnenforelder: {
      skalAvklareAnnenforelderUføretrygd: false,
      skalAvklareAnnenForelderRettEØS: false,
    },
    endringsdato: '2022-01-31',
    gjeldendeDekningsgrad: 100,
    førsteUttaksdato: '2022-01-31',
  },
  uttakKontrollerFaktaPerioder: [
    {
      fom: '2022-11-12',
      tom: '2022-12-01',
      uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
      arbeidsforhold: undefined,
      flerbarnsdager: false,
      periodeKilde: 'SØKNAD',
    },
  ],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  kanOverstyre: true,
};

export const VisUttaksperiodeMedAksjonspunkt = Template.bind({});
VisUttaksperiodeMedAksjonspunkt.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ],
  ytelsefordeling: {
    overstyrtOmsorg: undefined,
    rettigheterAnnenforelder: {
      skalAvklareAnnenforelderUføretrygd: false,
      skalAvklareAnnenForelderRettEØS: false,
    },
    endringsdato: '2022-01-31',
    gjeldendeDekningsgrad: 100,
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
        arbeidType: 'ORDINÆRT_ARBEID',
      },
      samtidigUttaksprosent: 80,
      flerbarnsdager: true,
      periodeKilde: 'SØKNAD',
    },
    {
      fom: '2022-12-02',
      tom: '2022-12-10',
      uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
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
      uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
      arbeidstidsprosent: 50,
      arbeidsforhold: {
        arbeidsgiverReferanse: '910909088',
        arbeidType: 'ORDINÆRT_ARBEID',
      },
      flerbarnsdager: false,
      periodeKilde: 'SØKNAD',
    },
  ],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  kanOverstyre: false,
};

export const VisUtsettelseperiodeMedAksjonspunkt = Template.bind({});
VisUtsettelseperiodeMedAksjonspunkt.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ],
  ytelsefordeling: {
    overstyrtOmsorg: undefined,
    rettigheterAnnenforelder: {
      skalAvklareAnnenforelderUføretrygd: false,
      skalAvklareAnnenForelderRettEØS: false,
    },
    endringsdato: '2022-01-31',
    gjeldendeDekningsgrad: 100,
    førsteUttaksdato: '2022-01-31',
  },
  uttakKontrollerFaktaPerioder: [
    {
      fom: '2022-11-12',
      tom: '2022-12-01',
      utsettelseÅrsak: UtsettelseÅrsak.ARBEID,
      periodeKilde: 'SØKNAD',
    },
  ],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  kanOverstyre: false,
};

export const VisOverføringsperiodeMedAksjonspunkt = Template.bind({});
VisOverføringsperiodeMedAksjonspunkt.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ],
  ytelsefordeling: {
    overstyrtOmsorg: undefined,
    rettigheterAnnenforelder: {
      skalAvklareAnnenforelderUføretrygd: false,
      skalAvklareAnnenForelderRettEØS: false,
    },
    endringsdato: '2022-01-31',
    gjeldendeDekningsgrad: 100,
    førsteUttaksdato: '2022-01-31',
  },
  uttakKontrollerFaktaPerioder: [
    {
      fom: '2022-11-12',
      tom: '2022-12-01',
      overføringÅrsak: OverføringÅrsak.IKKE_RETT_ANNEN_FORELDER,
      uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
      periodeKilde: 'SØKNAD',
    },
  ],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  kanOverstyre: false,
};

export const VisAksjonspunktDerIngenPerioderFinnes = Template.bind({});
VisAksjonspunktDerIngenPerioderFinnes.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.FAKTA_UTTAK_INGEN_PERIODER_KODE,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ],
  ytelsefordeling: {
    overstyrtOmsorg: undefined,
    rettigheterAnnenforelder: {
      skalAvklareAnnenforelderUføretrygd: false,
      skalAvklareAnnenForelderRettEØS: false,
    },
    endringsdato: '2022-01-31',
    gjeldendeDekningsgrad: 100,
    førsteUttaksdato: '2022-01-31',
  },
  uttakKontrollerFaktaPerioder: [],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  kanOverstyre: false,
};

export const VisAksjonspunktDerArbeidsfoholdErUkjentVedGradering = Template.bind({});
VisAksjonspunktDerArbeidsfoholdErUkjentVedGradering.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ],
  ytelsefordeling: {
    overstyrtOmsorg: undefined,
    rettigheterAnnenforelder: {
      skalAvklareAnnenforelderUføretrygd: false,
      skalAvklareAnnenForelderRettEØS: false,
    },
    endringsdato: '2022-01-31',
    gjeldendeDekningsgrad: 100,
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
        arbeidType: 'ORDINÆRT_ARBEID',
      },
      flerbarnsdager: false,
      periodeKilde: 'SØKNAD',
    },
  ],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  kanOverstyre: false,
};

export const VisAksjonspunktDerEnIkkeHarBeregningsgrunnlagVedGradering = Template.bind({});
VisAksjonspunktDerEnIkkeHarBeregningsgrunnlagVedGradering.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ],
  ytelsefordeling: {
    overstyrtOmsorg: undefined,
    rettigheterAnnenforelder: {
      skalAvklareAnnenforelderUføretrygd: false,
      skalAvklareAnnenForelderRettEØS: false,
    },
    endringsdato: '2022-01-31',
    gjeldendeDekningsgrad: 100,
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
        arbeidType: 'ORDINÆRT_ARBEID',
      },
      flerbarnsdager: false,
      periodeKilde: 'SØKNAD',
    },
  ],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  kanOverstyre: false,
};

export const VisPanelDerAksjonspunktErLøstOgBehandlingAvsluttet = Template.bind({});
VisPanelDerAksjonspunktErLøstOgBehandlingAvsluttet.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE,
      status: AksjonspunktStatus.UTFORT,
      begrunnelse: 'Dette er en begrunnelse',
      kanLoses: false,
    },
  ],
  ytelsefordeling: {
    overstyrtOmsorg: undefined,
    rettigheterAnnenforelder: {
      skalAvklareAnnenforelderUføretrygd: false,
      skalAvklareAnnenForelderRettEØS: false,
    },
    endringsdato: '2022-01-31',
    gjeldendeDekningsgrad: 100,
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
        arbeidType: 'ORDINÆRT_ARBEID',
      },
      samtidigUttaksprosent: 50,
      morsAktivitet: 'ARBEID',
      flerbarnsdager: true,
      periodeKilde: 'SØKNAD',
    },
  ],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  kanOverstyre: false,
  readOnly: true,
};

export const VisBegrunnelseFraTidligereUtgaveAvPanel = Template.bind({});
VisBegrunnelseFraTidligereUtgaveAvPanel.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE,
      status: AksjonspunktStatus.UTFORT,
      begrunnelse: 'Dette er en begrunnelse',
      kanLoses: false,
    },
  ],
  ytelsefordeling: {
    overstyrtOmsorg: undefined,
    rettigheterAnnenforelder: {
      skalAvklareAnnenforelderUføretrygd: false,
      skalAvklareAnnenForelderRettEØS: false,
    },
    endringsdato: '2022-01-31',
    gjeldendeDekningsgrad: 100,
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
        arbeidType: 'ORDINÆRT_ARBEID',
      },
      samtidigUttaksprosent: 50,
      morsAktivitet: 'ARBEID',
      flerbarnsdager: true,
      periodeKilde: 'SØKNAD',
      begrunnelse: 'Dette er en gammel begrunnelse',
    },
  ],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  kanOverstyre: false,
  readOnly: true,
};

export const VisUttaksperiodeMedAksjonspunktForFar = Template.bind({});
VisUttaksperiodeMedAksjonspunktForFar.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ],
  ytelsefordeling: {
    overstyrtOmsorg: undefined,
    rettigheterAnnenforelder: {
      skalAvklareAnnenforelderUføretrygd: false,
      skalAvklareAnnenForelderRettEØS: false,
    },
    endringsdato: '2022-01-31',
    gjeldendeDekningsgrad: 100,
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
        arbeidType: 'ORDINÆRT_ARBEID',
      },
      samtidigUttaksprosent: 80,
      flerbarnsdager: true,
      periodeKilde: 'SØKNAD',
    },
    {
      fom: '2022-12-02',
      tom: '2022-12-10',
      uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
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
      uttakPeriodeType: UttakPeriodeType.MODREKVOTE,
      arbeidstidsprosent: 50,
      arbeidsforhold: {
        arbeidsgiverReferanse: '910909088',
        arbeidType: 'ORDINÆRT_ARBEID',
      },
      flerbarnsdager: false,
      periodeKilde: 'SØKNAD',
    },
  ],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  kanOverstyre: false,
  fagsak: { relasjonsRolleType: 'FAR' } as Fagsak,
};
