import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import { Aksjonspunkt } from '@navikt/ft-types';
import {
  KontrollerFaktaPeriode, Ytelsefordeling,
} from '@fpsak-frontend/types';
import { FaktaAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import uttakPeriodeType from '@fpsak-frontend/kodeverk/src/uttakPeriodeType';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';

import UttakFaktaIndex from './UttakFaktaIndex';
import UtsettelseÅrsak from './kodeverk/utsettelseÅrsak';
import OverføringÅrsak from './kodeverk/overføringÅrsak';

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

const Template: Story<{
  aksjonspunkter: Aksjonspunkt[];
  uttakKontrollerFaktaPerioder: KontrollerFaktaPeriode[];
  ytelsefordeling: Ytelsefordeling;
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  readOnly?: boolean;
  submittable?: boolean;
  kanOverstyre?: boolean;
}> = ({
  aksjonspunkter,
  uttakKontrollerFaktaPerioder,
  ytelsefordeling,
  submitCallback,
  readOnly = false,
  submittable = true,
  kanOverstyre = false,
}) => (
  <UttakFaktaIndex
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
    faktaArbeidsforhold={[{
      arbeidsgiverReferanse: '910909088',
      arbeidType: 'ORDINÆRT_ARBEID',
    }]}
  />
);

export const VisUttaksperiodeUtenAksjonspunkt = Template.bind({});
VisUttaksperiodeUtenAksjonspunkt.args = {
  aksjonspunkter: [],
  ytelsefordeling: {
    ikkeOmsorgPerioder: null,
    rettigheterAnnenforelder: {
      skalAvklareAnnenforelderUføretrygd: false,
      skalAvklareAnnenForelderRettEØS: false,
    },
    endringsdato: '2022-01-31',
    gjeldendeDekningsgrad: 100,
    førsteUttaksdato: '2022-01-31',
  },
  uttakKontrollerFaktaPerioder: [{
    fom: '2022-11-12',
    tom: '2022-12-01',
    uttakPeriodeType: uttakPeriodeType.MODREKVOTE,
    arbeidsforhold: null,
    flerbarnsdager: false,
    periodeKilde: 'SØKNAD',
  }],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  kanOverstyre: false,
};

export const VisUttaksperiodeUtenAksjonspunktKanOverstyre = Template.bind({});
VisUttaksperiodeUtenAksjonspunktKanOverstyre.args = {
  aksjonspunkter: [],
  ytelsefordeling: {
    ikkeOmsorgPerioder: null,
    rettigheterAnnenforelder: {
      skalAvklareAnnenforelderUføretrygd: false,
      skalAvklareAnnenForelderRettEØS: false,
    },
    endringsdato: '2022-01-31',
    gjeldendeDekningsgrad: 100,
    førsteUttaksdato: '2022-01-31',
  },
  uttakKontrollerFaktaPerioder: [{
    fom: '2022-11-12',
    tom: '2022-12-01',
    uttakPeriodeType: uttakPeriodeType.MODREKVOTE,
    arbeidsforhold: null,
    flerbarnsdager: false,
    periodeKilde: 'SØKNAD',
  }],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  kanOverstyre: true,
};

export const VisUttaksperiodeMedAksjonspunkt = Template.bind({});
VisUttaksperiodeMedAksjonspunkt.args = {
  aksjonspunkter: [{
    definisjon: AksjonspunktCode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
    erAktivt: true,
  }],
  ytelsefordeling: {
    ikkeOmsorgPerioder: null,
    rettigheterAnnenforelder: {
      skalAvklareAnnenforelderUføretrygd: false,
      skalAvklareAnnenForelderRettEØS: false,
    },
    endringsdato: '2022-01-31',
    gjeldendeDekningsgrad: 100,
    førsteUttaksdato: '2022-01-31',
  },
  uttakKontrollerFaktaPerioder: [{
    fom: '2022-11-12',
    tom: '2022-12-01',
    uttakPeriodeType: uttakPeriodeType.MODREKVOTE,
    arbeidstidsprosent: 10,
    arbeidsforhold: {
      arbeidsgiverReferanse: '910909088',
      arbeidType: 'ORDINÆRT_ARBEID',
    },
    samtidigUttaksprosent: 80,
    flerbarnsdager: true,
    periodeKilde: 'SØKNAD',
  }, {
    fom: '2022-12-02',
    tom: '2022-12-10',
    uttakPeriodeType: uttakPeriodeType.MODREKVOTE,
    arbeidstidsprosent: 50,
    arbeidsforhold: {
      arbeidsgiverReferanse: '910909088',
      arbeidType: 'ORDINÆRT_ARBEID',
    },
    flerbarnsdager: false,
    periodeKilde: 'SØKNAD',
  }, {
    fom: '2022-12-11',
    tom: '2022-12-20',
    uttakPeriodeType: uttakPeriodeType.MODREKVOTE,
    arbeidstidsprosent: 50,
    arbeidsforhold: {
      arbeidsgiverReferanse: '910909088',
      arbeidType: 'ORDINÆRT_ARBEID',
    },
    flerbarnsdager: false,
    periodeKilde: 'SØKNAD',
  }],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  kanOverstyre: false,
};

export const VisUtsettelseperiodeMedAksjonspunkt = Template.bind({});
VisUtsettelseperiodeMedAksjonspunkt.args = {
  aksjonspunkter: [{
    definisjon: AksjonspunktCode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
    erAktivt: true,
  }],
  ytelsefordeling: {
    ikkeOmsorgPerioder: null,
    rettigheterAnnenforelder: {
      skalAvklareAnnenforelderUføretrygd: false,
      skalAvklareAnnenForelderRettEØS: false,
    },
    endringsdato: '2022-01-31',
    gjeldendeDekningsgrad: 100,
    førsteUttaksdato: '2022-01-31',
  },
  uttakKontrollerFaktaPerioder: [{
    fom: '2022-11-12',
    tom: '2022-12-01',
    utsettelseÅrsak: UtsettelseÅrsak.ARBEID,
    periodeKilde: 'SØKNAD',
  }],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  kanOverstyre: false,
};

export const VisOverføringsperiodeMedAksjonspunkt = Template.bind({});
VisOverføringsperiodeMedAksjonspunkt.args = {
  aksjonspunkter: [{
    definisjon: AksjonspunktCode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
    erAktivt: true,
  }],
  ytelsefordeling: {
    ikkeOmsorgPerioder: null,
    rettigheterAnnenforelder: {
      skalAvklareAnnenforelderUføretrygd: false,
      skalAvklareAnnenForelderRettEØS: false,
    },
    endringsdato: '2022-01-31',
    gjeldendeDekningsgrad: 100,
    førsteUttaksdato: '2022-01-31',
  },
  uttakKontrollerFaktaPerioder: [{
    fom: '2022-11-12',
    tom: '2022-12-01',
    overføringÅrsak: OverføringÅrsak.IKKE_RETT_ANNEN_FORELDER,
    uttakPeriodeType: uttakPeriodeType.MODREKVOTE,
    periodeKilde: 'SØKNAD',
  }],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  kanOverstyre: false,
};

export const VisAksjonspunktDerIngenPerioderFinnes = Template.bind({});
VisAksjonspunktDerIngenPerioderFinnes.args = {
  aksjonspunkter: [{
    definisjon: AksjonspunktCode.FAKTA_UTTAK_INGEN_PERIODER_KODE,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
    erAktivt: true,
  }],
  ytelsefordeling: {
    ikkeOmsorgPerioder: null,
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
  aksjonspunkter: [{
    definisjon: AksjonspunktCode.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
    erAktivt: true,
  }],
  ytelsefordeling: {
    ikkeOmsorgPerioder: null,
    rettigheterAnnenforelder: {
      skalAvklareAnnenforelderUføretrygd: false,
      skalAvklareAnnenForelderRettEØS: false,
    },
    endringsdato: '2022-01-31',
    gjeldendeDekningsgrad: 100,
    førsteUttaksdato: '2022-01-31',
  },
  uttakKontrollerFaktaPerioder: [{
    fom: '2022-11-12',
    tom: '2022-12-01',
    uttakPeriodeType: uttakPeriodeType.MODREKVOTE,
    arbeidstidsprosent: 50,
    arbeidsforhold: {
      arbeidsgiverReferanse: '91090823',
      arbeidType: 'ORDINÆRT_ARBEID',
    },
    flerbarnsdager: false,
    periodeKilde: 'SØKNAD',
  }],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  kanOverstyre: false,
};

export const VisAksjonspunktDerEnIkkeHarBeregningsgrunnlagVedGradering = Template.bind({});
VisAksjonspunktDerEnIkkeHarBeregningsgrunnlagVedGradering.args = {
  aksjonspunkter: [{
    definisjon: AksjonspunktCode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
    erAktivt: true,
  }],
  ytelsefordeling: {
    ikkeOmsorgPerioder: null,
    rettigheterAnnenforelder: {
      skalAvklareAnnenforelderUføretrygd: false,
      skalAvklareAnnenForelderRettEØS: false,
    },
    endringsdato: '2022-01-31',
    gjeldendeDekningsgrad: 100,
    førsteUttaksdato: '2022-01-31',
  },
  uttakKontrollerFaktaPerioder: [{
    fom: '2022-11-12',
    tom: '2022-12-01',
    uttakPeriodeType: uttakPeriodeType.MODREKVOTE,
    arbeidstidsprosent: 50,
    arbeidsforhold: {
      arbeidsgiverReferanse: '910923',
      arbeidType: 'ORDINÆRT_ARBEID',
    },
    flerbarnsdager: false,
    periodeKilde: 'SØKNAD',
  }],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  kanOverstyre: false,
};

export const VisPanelDerAksjonspunktErLøstOgBehandlingAvsluttet = Template.bind({});
VisPanelDerAksjonspunktErLøstOgBehandlingAvsluttet.args = {
  aksjonspunkter: [{
    definisjon: AksjonspunktCode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE,
    status: aksjonspunktStatus.UTFORT,
    begrunnelse: 'Dette er en begrunnelse',
    kanLoses: false,
    erAktivt: false,
  }],
  ytelsefordeling: {
    ikkeOmsorgPerioder: null,
    rettigheterAnnenforelder: {
      skalAvklareAnnenforelderUføretrygd: false,
      skalAvklareAnnenForelderRettEØS: false,
    },
    endringsdato: '2022-01-31',
    gjeldendeDekningsgrad: 100,
    førsteUttaksdato: '2022-01-31',
  },
  uttakKontrollerFaktaPerioder: [{
    fom: '2022-11-12',
    tom: '2022-12-01',
    uttakPeriodeType: uttakPeriodeType.MODREKVOTE,
    arbeidstidsprosent: 50,
    arbeidsforhold: {
      arbeidsgiverReferanse: '910909088',
      arbeidType: 'ORDINÆRT_ARBEID',
    },
    samtidigUttaksprosent: 50,
    morsAktivitet: 'ARBEID',
    flerbarnsdager: true,
    periodeKilde: 'SAKSBEHANDLER',
  }],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  kanOverstyre: false,
  readOnly: true,
};
