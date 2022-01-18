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

export const vurderOmAnnenPartHarRett = () => {
  const readOnly = false;

  return (
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
      readOnly={readOnly}
      kanOverstyre={false}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />
  );
};

export const vurderOmAnnenPartHarRettOgHar = () => {
  const readOnly = false;

  return (
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
      readOnly={readOnly}
      kanOverstyre={false}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />
  );
};

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
