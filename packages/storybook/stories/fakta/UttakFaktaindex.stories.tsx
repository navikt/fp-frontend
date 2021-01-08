import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { FaktaArbeidsforhold, FamilieHendelseSamling, UttakKontrollerFaktaPerioderWrapper } from '@fpsak-frontend/types';
import UttakFaktaIndex from '@fpsak-frontend/fakta-uttak';

import withReduxProvider from '../../decorators/withRedux';
import alleKodeverk from '../mocks/alleKodeverk.json';

import aksjonspunkterVurderAnnenPartHarRett from './mocks/uttak/vurder-annen-part-har-rett/aksjonspunkter.json';
import behandlingVurderAnnenPartHarRett from './mocks/uttak/vurder-annen-part-har-rett/behandling.json';
import uttakKontrollerFaktaPerioderVurderAnnenPartHarRett from './mocks/uttak/vurder-annen-part-har-rett/kontrollerFaktaPerioder.json';
import ytelsefordelingVurderAnnenPartHarRett from './mocks/uttak/vurder-annen-part-har-rett/ytelsefordeling.json';
import faktaArbeidsforholdVurderAnnenPartHarRett from './mocks/uttak/vurder-annen-part-har-rett/faktaArbeidsforhold.json';
import personopplysningerVurderAnnenPartHarRett from './mocks/uttak/vurder-annen-part-har-rett/personopplysninger.json';
import familiehendelseVurderAnnenPartHarRett from './mocks/uttak/vurder-annen-part-har-rett/familiehendelse.json';

import aksjonspunkterFarSøkerFørsteSeksUker from './mocks/uttak/far-soker-forste-seks-uker/aksjonspunkter.json';
import behandlingFarSøkerFørsteSeksUker from './mocks/uttak/far-soker-forste-seks-uker/behandling.json';
import uttakKontrollerFaktaPerioderFarSøkerFørsteSeksUker from './mocks/uttak/far-soker-forste-seks-uker/kontrollerFaktaPerioder.json';
import ytelsefordelingFarSøkerFørsteSeksUker from './mocks/uttak/far-soker-forste-seks-uker/ytelsefordeling.json';
import faktaArbeidsforholdFarSøkerFørsteSeksUker from './mocks/uttak/far-soker-forste-seks-uker/faktaArbeidsforhold.json';
import personopplysningerFarSøkerFørsteSeksUker from './mocks/uttak/far-soker-forste-seks-uker/personopplysninger.json';
import familiehendelseFarSøkerFørsteSeksUker from './mocks/uttak/far-soker-forste-seks-uker/familiehendelse.json';

import aksjonspunkterOverføringAvPerioder from './mocks/uttak/overforing-av-perioder/aksjonspunkter.json';
import behandlingOverføringAvPerioder from './mocks/uttak/overforing-av-perioder/behandling.json';
import uttakKontrollerFaktaPerioderOverføringAvPerioder from './mocks/uttak/overforing-av-perioder/kontrollerFaktaPerioder.json';
import ytelsefordelingOverføringAvPerioder from './mocks/uttak/overforing-av-perioder/ytelsefordeling.json';
import faktaArbeidsforholdOverføringAvPerioder from './mocks/uttak/overforing-av-perioder/faktaArbeidsforhold.json';
import personopplysningerOverføringAvPerioder from './mocks/uttak/overforing-av-perioder/personopplysninger.json';
import familiehendelseOverføringAvPerioder from './mocks/uttak/overforing-av-perioder/familiehendelse.json';

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
  readOnly: boolean('readOnly', false),
  harApneAksjonspunkter: boolean('harApneAksjonspunkter', true),
  submittable: boolean('submittable', true),
  alleMerknaderFraBeslutter: {},
};

export default {
  title: 'fakta/fakta-uttak',
  component: UttakFaktaIndex,
  decorators: [withKnobs, withReduxProvider],
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
      personopplysninger={personopplysningerVurderAnnenPartHarRett}
      familiehendelse={familiehendelseVurderAnnenPartHarRett as FamilieHendelseSamling}
      readOnly={boolean('readOnly', readOnly)}
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
      personopplysninger={personopplysningerFarSøkerFørsteSeksUker}
      familiehendelse={familiehendelseFarSøkerFørsteSeksUker as FamilieHendelseSamling}
      readOnly={boolean('readOnly', readOnly)}
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
      personopplysninger={personopplysningerOverføringAvPerioder}
      familiehendelse={familiehendelseOverføringAvPerioder as FamilieHendelseSamling}
      readOnly={boolean('readOnly', readOnly)}
      kanOverstyre={false}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />
  );
};
