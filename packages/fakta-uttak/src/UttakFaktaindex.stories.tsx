import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import { Aksjonspunkt } from '@navikt/ft-types';
import {
  Behandling, UttakKontrollerFaktaPerioderWrapper, Ytelsefordeling,
} from '@fpsak-frontend/types';
import { FaktaAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import aksjonspunkterFarSøkerFørsteSeksUker from '../testdata/far-soker-forste-seks-uker/aksjonspunkter.json';
import behandlingFarSøkerFørsteSeksUker from '../testdata/far-soker-forste-seks-uker/behandling.json';
import uttakKontrollerFaktaPerioderFarSøkerFørsteSeksUker from '../testdata/far-soker-forste-seks-uker/kontrollerFaktaPerioder.json';
import ytelsefordelingFarSøkerFørsteSeksUker from '../testdata/far-soker-forste-seks-uker/ytelsefordeling.json';

import aksjonspunkterOverføringAvPerioder from '../testdata/overforing-av-perioder/aksjonspunkter.json';
import behandlingOverføringAvPerioder from '../testdata/overforing-av-perioder/behandling.json';
import uttakKontrollerFaktaPerioderOverføringAvPerioder from '../testdata/overforing-av-perioder/kontrollerFaktaPerioder.json';
import ytelsefordelingOverføringAvPerioder from '../testdata/overforing-av-perioder/ytelsefordeling.json';

import UttakFaktaIndex from './UttakFaktaIndex';

export default {
  title: 'fakta/fakta-uttak',
  component: UttakFaktaIndex,
};

const Template: Story<{
  aksjonspunkter: Aksjonspunkt[];
  behandling: Behandling;
  uttakKontrollerFaktaPerioder: UttakKontrollerFaktaPerioderWrapper;
  ytelsefordeling: Ytelsefordeling;
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  readOnly?: boolean;
  submittable?: boolean;
  kanOverstyre?: boolean;
}> = ({
  behandling,
  aksjonspunkter,
  uttakKontrollerFaktaPerioder,
  ytelsefordeling,
  submitCallback,
  readOnly = false,
  submittable = true,
  kanOverstyre = false,
}) => (
  <UttakFaktaIndex
    behandling={behandling}
    aksjonspunkter={aksjonspunkter}
    ytelsefordeling={ytelsefordeling}
    uttakKontrollerFaktaPerioder={uttakKontrollerFaktaPerioder}
    alleKodeverk={alleKodeverk as any}
    readOnly={readOnly}
    kanOverstyre={kanOverstyre}
    submitCallback={submitCallback}
    setFormData={() => undefined}
    submittable={submittable}
  />
);

  return (
    <UttakFaktaIndex
      {...standardFaktaProps}
      // @ts-ignore
      behandling={behandlingFarSøkerFørsteSeksUker as Behandling}
      aksjonspunkter={aksjonspunkterFarSøkerFørsteSeksUker}
      ytelsefordeling={ytelsefordelingFarSøkerFørsteSeksUker}
      uttakKontrollerFaktaPerioder={uttakKontrollerFaktaPerioderFarSøkerFørsteSeksUker as UttakKontrollerFaktaPerioderWrapper}
      alleKodeverk={alleKodeverk as any}
      faktaArbeidsforhold={faktaArbeidsforholdFarSøkerFørsteSeksUker as FaktaArbeidsforhold[]}
      personoversikt={personoversiktFarSøkerFørsteSeksUker as Personoversikt}
      familiehendelse={familiehendelseFarSøkerFørsteSeksUker as FamilieHendelseSamling}
      readOnly={readOnly}
      kanOverstyre={false}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />
  );
};

export const IngenAksjonspunkterErOverstyrer = Template.bind({});
IngenAksjonspunkterErOverstyrer.args = {
  behandling: behandlingOverføringAvPerioder,
  aksjonspunkter: [],
  ytelsefordeling: ytelsefordelingOverføringAvPerioder,
  uttakKontrollerFaktaPerioder: uttakKontrollerFaktaPerioderOverføringAvPerioder,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  kanOverstyre: true,
};

export const FarSøkerFørsteSeksUker = Template.bind({});
FarSøkerFørsteSeksUker.args = {
  behandling: behandlingFarSøkerFørsteSeksUker,
  aksjonspunkter: aksjonspunkterFarSøkerFørsteSeksUker,
  ytelsefordeling: ytelsefordelingFarSøkerFørsteSeksUker,
  uttakKontrollerFaktaPerioder: uttakKontrollerFaktaPerioderFarSøkerFørsteSeksUker,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const OverføringAvPerioder = Template.bind({});
OverføringAvPerioder.args = {
  behandling: behandlingOverføringAvPerioder,
  aksjonspunkter: aksjonspunkterOverføringAvPerioder,
  ytelsefordeling: ytelsefordelingOverføringAvPerioder,
  uttakKontrollerFaktaPerioder: uttakKontrollerFaktaPerioderOverføringAvPerioder,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const MedUtsettelse = Template.bind({});
MedUtsettelse.args = {
  behandling: behandlingOverføringAvPerioder,
  aksjonspunkter: [
    {
      definisjon: '5070',
      status: 'OPPR',
      begrunnelse: null,
      vilkarType: null,
      toTrinnsBehandling: false,
      toTrinnsBehandlingGodkjent: null,
      vurderPaNyttArsaker: null,
      besluttersBegrunnelse: null,
      aksjonspunktType: 'MANU',
      kanLoses: true,
      erAktivt: true,
      endretTidspunkt: null,
      endretAv: null,
    },
  ],
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
  uttakKontrollerFaktaPerioder: {
    perioder: [
      {
        tom: '2022-02-18',
        fom: '2022-01-31',
        uttakPeriodeType: 'FORELDREPENGER_FØR_FØDSEL',
        utsettelseÅrsak: '-',
        overføringÅrsak: '-',
        oppholdÅrsak: '-',
        resultat: 'PERIODE_OK',
        arbeidstidsprosent: null,
        begrunnelse: null,
        bekreftet: true,
        arbeidsgiverReferanse: null,
        erArbeidstaker: false,
        erFrilanser: false,
        erSelvstendig: false,
        samtidigUttak: false,
        samtidigUttaksprosent: null,
        flerbarnsdager: false,
        morsAktivitet: '-',
      },
      {
        tom: '2022-03-25',
        fom: '2022-02-21',
        uttakPeriodeType: 'MØDREKVOTE',
        utsettelseÅrsak: '-',
        overføringÅrsak: '-',
        oppholdÅrsak: '-',
        resultat: 'PERIODE_OK',
        arbeidstidsprosent: null,
        begrunnelse: null,
        bekreftet: true,
        arbeidsgiverReferanse: null,
        erArbeidstaker: false,
        erFrilanser: false,
        erSelvstendig: false,
        samtidigUttak: false,
        samtidigUttaksprosent: null,
        flerbarnsdager: false,
        morsAktivitet: '-',
      },
      {
        tom: '2022-04-01',
        fom: '2022-03-28',
        uttakPeriodeType: '-',
        utsettelseÅrsak: 'SYKDOM',
        overføringÅrsak: '-',
        oppholdÅrsak: '-',
        resultat: 'PERIODE_IKKE_VURDERT',
        arbeidstidsprosent: null,
        begrunnelse: null,
        bekreftet: false,
        arbeidsgiverReferanse: null,
        erArbeidstaker: false,
        erFrilanser: false,
        erSelvstendig: false,
        samtidigUttak: false,
        samtidigUttaksprosent: null,
        flerbarnsdager: false,
        morsAktivitet: '-',
      },
      {
        tom: '2022-06-03',
        fom: '2022-04-04',
        uttakPeriodeType: '-',
        utsettelseÅrsak: 'FRI',
        overføringÅrsak: '-',
        oppholdÅrsak: '-',
        resultat: 'PERIODE_IKKE_VURDERT',
        arbeidstidsprosent: null,
        begrunnelse: null,
        bekreftet: true,
        arbeidsgiverReferanse: null,
        erArbeidstaker: false,
        erFrilanser: false,
        erSelvstendig: false,
        samtidigUttak: false,
        samtidigUttaksprosent: null,
        flerbarnsdager: false,
        morsAktivitet: '-',
      },
      {
        tom: '2022-08-05',
        fom: '2022-06-06',
        uttakPeriodeType: 'FELLESPERIODE',
        utsettelseÅrsak: '-',
        overføringÅrsak: '-',
        oppholdÅrsak: '-',
        resultat: 'PERIODE_OK',
        arbeidstidsprosent: null,
        begrunnelse: null,
        bekreftet: true,
        arbeidsgiverReferanse: null,
        erArbeidstaker: false,
        erFrilanser: false,
        erSelvstendig: false,
        samtidigUttak: false,
        samtidigUttaksprosent: null,
        flerbarnsdager: false,
        morsAktivitet: '-',
      },
      {
        tom: '2022-08-26',
        fom: '2022-08-08',
        uttakPeriodeType: 'FELLESPERIODE',
        utsettelseÅrsak: '-',
        overføringÅrsak: '-',
        oppholdÅrsak: '-',
        resultat: 'PERIODE_OK',
        arbeidstidsprosent: null,
        begrunnelse: null,
        bekreftet: true,
        arbeidsgiverReferanse: null,
        erArbeidstaker: false,
        erFrilanser: false,
        erSelvstendig: false,
        samtidigUttak: true,
        flerbarnsdager: false,
        morsAktivitet: '-',
      },
      {
        tom: '2022-09-16',
        fom: '2022-08-29',
        uttakPeriodeType: 'FELLESPERIODE',
        utsettelseÅrsak: '-',
        overføringÅrsak: '-',
        oppholdÅrsak: '-',
        resultat: 'PERIODE_OK',
        arbeidstidsprosent: null,
        begrunnelse: null,
        bekreftet: true,
        arbeidsgiverReferanse: null,
        erArbeidstaker: false,
        erFrilanser: false,
        erSelvstendig: false,
        samtidigUttak: false,
        samtidigUttaksprosent: null,
        flerbarnsdager: false,
        morsAktivitet: '-',
      },
    ],
  },
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
