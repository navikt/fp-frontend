import React from 'react';
import { action } from '@storybook/addon-actions';

import {
  FaktaArbeidsforhold, FamilieHendelseSamling, Personoversikt, UttakKontrollerFaktaPerioderWrapper,
} from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import aksjonspunkterVurderAnnenPartHarRett from '../testdata/vurder-annen-part-har-rett/aksjonspunkter.json';
import behandlingVurderAnnenPartHarRett from '../testdata/vurder-annen-part-har-rett/behandling.json';
import uttakKontrollerFaktaPerioderVurderAnnenPartHarRett from '../testdata/vurder-annen-part-har-rett/kontrollerFaktaPerioder.json';
import ytelsefordelingVurderAnnenPartHarRett from '../testdata/vurder-annen-part-har-rett/ytelsefordeling.json';
import faktaArbeidsforholdVurderAnnenPartHarRett from '../testdata/vurder-annen-part-har-rett/faktaArbeidsforhold.json';
import personoversiktVurderAnnenPartHarRett from '../testdata/vurder-annen-part-har-rett/personopplysninger.json';
import familiehendelseVurderAnnenPartHarRett from '../testdata/vurder-annen-part-har-rett/familiehendelse.json';

import aksjonspunkterFarSøkerFørsteSeksUker from '../testdata/far-soker-forste-seks-uker/aksjonspunkter.json';
import behandlingFarSøkerFørsteSeksUker from '../testdata/far-soker-forste-seks-uker/behandling.json';
import uttakKontrollerFaktaPerioderFarSøkerFørsteSeksUker from '../testdata/far-soker-forste-seks-uker/kontrollerFaktaPerioder.json';
import ytelsefordelingFarSøkerFørsteSeksUker from '../testdata/far-soker-forste-seks-uker/ytelsefordeling.json';
import faktaArbeidsforholdFarSøkerFørsteSeksUker from '../testdata/far-soker-forste-seks-uker/faktaArbeidsforhold.json';
import personoversiktFarSøkerFørsteSeksUker from '../testdata/far-soker-forste-seks-uker/personopplysninger.json';
import familiehendelseFarSøkerFørsteSeksUker from '../testdata/far-soker-forste-seks-uker/familiehendelse.json';

import aksjonspunkterOverføringAvPerioder from '../testdata/overforing-av-perioder/aksjonspunkter.json';
import behandlingOverføringAvPerioder from '../testdata/overforing-av-perioder/behandling.json';
import uttakKontrollerFaktaPerioderOverføringAvPerioder from '../testdata/overforing-av-perioder/kontrollerFaktaPerioder.json';
import ytelsefordelingOverføringAvPerioder from '../testdata/overforing-av-perioder/ytelsefordeling.json';
import faktaArbeidsforholdOverføringAvPerioder from '../testdata/overforing-av-perioder/faktaArbeidsforhold.json';
import personoversiktOverføringAvPerioder from '../testdata/overforing-av-perioder/personopplysninger.json';
import familiehendelseOverføringAvPerioder from '../testdata/overforing-av-perioder/familiehendelse.json';

import UttakFaktaIndex from './UttakFaktaIndex';

const arbeidsgiverOpplysningerPerId = {
  910909088: {
    erPrivatPerson: false,
    identifikator: '910909088',
    navn: 'BEDRIFT AS',
  },
};

const standardFaktaProps = {
  aksjonspunkter: [],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: false,
  harApneAksjonspunkter: true,
  submittable: true,
  alleMerknaderFraBeslutter: {},
  setFormData: () => undefined,
};

export default {
  title: 'fakta/fakta-uttak',
  component: UttakFaktaIndex,
};

export const vurderOmAnnenPartHarRett = () => (
  <UttakFaktaIndex
    {...standardFaktaProps}
    behandling={behandlingVurderAnnenPartHarRett}
    aksjonspunkter={aksjonspunkterVurderAnnenPartHarRett}
    ytelsefordeling={ytelsefordelingVurderAnnenPartHarRett}
    uttakKontrollerFaktaPerioder={uttakKontrollerFaktaPerioderVurderAnnenPartHarRett as UttakKontrollerFaktaPerioderWrapper}
    alleKodeverk={alleKodeverk as any}
    faktaArbeidsforhold={faktaArbeidsforholdVurderAnnenPartHarRett as FaktaArbeidsforhold[]}
    personoversikt={personoversiktVurderAnnenPartHarRett as Personoversikt}
    familiehendelse={familiehendelseVurderAnnenPartHarRett as FamilieHendelseSamling}
    readOnly={false}
    kanOverstyre={false}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
  />
);

export const vurderOmAnnenPartHarRettOgAvklarAnnenForelderMottarUføretrygd = () => (
  <UttakFaktaIndex
    {...standardFaktaProps}
    behandling={behandlingVurderAnnenPartHarRett}
    aksjonspunkter={aksjonspunkterVurderAnnenPartHarRett}
    ytelsefordeling={{
      ...ytelsefordelingVurderAnnenPartHarRett,
      annenforelderHarRettDto: {
        ...ytelsefordelingVurderAnnenPartHarRett.annenforelderHarRettDto,
        avklarAnnenforelderMottarUføretrygd: true,
      },
    }}
    uttakKontrollerFaktaPerioder={uttakKontrollerFaktaPerioderVurderAnnenPartHarRett as UttakKontrollerFaktaPerioderWrapper}
    alleKodeverk={alleKodeverk as any}
    faktaArbeidsforhold={faktaArbeidsforholdVurderAnnenPartHarRett as FaktaArbeidsforhold[]}
    personoversikt={personoversiktVurderAnnenPartHarRett as Personoversikt}
    familiehendelse={familiehendelseVurderAnnenPartHarRett as FamilieHendelseSamling}
    readOnly={false}
    kanOverstyre={false}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
  />
);

export const vurderOmAnnenPartHarRettOgAvklarAnnenForelderMottarUføretrygdReadOnly = () => (
  <UttakFaktaIndex
    {...standardFaktaProps}
    behandling={behandlingVurderAnnenPartHarRett}
    aksjonspunkter={aksjonspunkterVurderAnnenPartHarRett}
    ytelsefordeling={{
      ...ytelsefordelingVurderAnnenPartHarRett,
      annenforelderHarRettDto: {
        ...ytelsefordelingVurderAnnenPartHarRett.annenforelderHarRettDto,
        avklarAnnenforelderMottarUføretrygd: true,
        annenforelderMottarUføretrygd: false,
        begrunnelse: 'Dette er en begrunnelse',
        annenforelderHarRett: false,
      },
    }}
    uttakKontrollerFaktaPerioder={uttakKontrollerFaktaPerioderVurderAnnenPartHarRett as UttakKontrollerFaktaPerioderWrapper}
    alleKodeverk={alleKodeverk as any}
    faktaArbeidsforhold={faktaArbeidsforholdVurderAnnenPartHarRett as FaktaArbeidsforhold[]}
    personoversikt={personoversiktVurderAnnenPartHarRett as Personoversikt}
    familiehendelse={familiehendelseVurderAnnenPartHarRett as FamilieHendelseSamling}
    readOnly
    kanOverstyre={false}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
  />
);

export const farSøkerFørsteSeksUker = () => {
  const readOnly = false;

  return (
    <UttakFaktaIndex
      {...standardFaktaProps}
      behandling={behandlingFarSøkerFørsteSeksUker}
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

export const overføringAvPerioder = () => {
  const readOnly = false;

  return (
    <UttakFaktaIndex
      {...standardFaktaProps}
      behandling={behandlingOverføringAvPerioder}
      aksjonspunkter={aksjonspunkterOverføringAvPerioder}
      ytelsefordeling={ytelsefordelingOverføringAvPerioder}
      uttakKontrollerFaktaPerioder={uttakKontrollerFaktaPerioderOverføringAvPerioder as UttakKontrollerFaktaPerioderWrapper}
      alleKodeverk={alleKodeverk as any}
      faktaArbeidsforhold={faktaArbeidsforholdOverføringAvPerioder as FaktaArbeidsforhold[]}
      personoversikt={personoversiktOverføringAvPerioder as Personoversikt}
      familiehendelse={familiehendelseOverføringAvPerioder as FamilieHendelseSamling}
      readOnly={readOnly}
      kanOverstyre={false}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />
  );
};

export const MedUtsettelse = () => {
  const readOnly = false;

  return (
    <UttakFaktaIndex
      {...standardFaktaProps}
      behandling={behandlingOverføringAvPerioder}
      aksjonspunkter={[
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
      ]}
      ytelsefordeling={{
        ikkeOmsorgPerioder: null,
        aleneOmsorgPerioder: null,
        annenforelderHarRettDto: {
          begrunnelse: null,
          annenforelderHarRett: null,
          annenforelderHarRettPerioder: null,
          annenforelderMottarUføretrygd: null,
          avklarAnnenforelderMottarUføretrygd: false,
        },
        endringsdato: '2022-01-31',
        gjeldendeDekningsgrad: 100,
        førsteUttaksdato: '2022-01-31',
      }}
      uttakKontrollerFaktaPerioder={{
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
      }}
      alleKodeverk={alleKodeverk as any}
      faktaArbeidsforhold={{} as FaktaArbeidsforhold[]}
      personoversikt={{
        bruker: {
          aktoerId: '2722053069180',
          navn: 'Trane Molefonken',
          kjønn: 'K',
          sivilstand: 'GIFT',
          dødsdato: null,
          fødselsdato: '1986-08-24',
          adresser: [
            {
              adresseType: 'BOSTEDSADRESSE',
              adresselinje1: 'Teis Lundegaards Vei 383',
              adresselinje2: null,
              adresselinje3: null,
              postNummer: '4580',
              poststed: 'Lyngdal',
              land: 'NOR',
            },
          ],
        },
        annenPart: {
          aktoerId: '2767275186814',
          navn: 'Tranflaske Lunken',
          kjønn: 'M',
          sivilstand: 'GIFT',
          dødsdato: null,
          fødselsdato: '1979-01-10',
          adresser: [
            {
              adresseType: 'BOSTEDSADRESSE',
              adresselinje1: 'Teis Lundegaards Vei 383',
              adresselinje2: null,
              adresselinje3: null,
              postNummer: '4580',
              poststed: 'Lyngdal',
              land: 'NOR',
            },
          ],
        },
        barn: [],
      }}
      familiehendelse={familiehendelseOverføringAvPerioder as FamilieHendelseSamling}
      readOnly={readOnly}
      kanOverstyre={false}
      arbeidsgiverOpplysningerPerId={{
        896929119: {
          referanse: '896929119',
          identifikator: '896929119',
          navn: 'SAUEFABRIKK',
          fødselsdato: null,
          erPrivatPerson: false,
        },
      }}
    />
  );
};
