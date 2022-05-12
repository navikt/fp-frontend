import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import arbeidsforholdKilder from '@fpsak-frontend/fakta-arbeidsforhold/src/kodeverk/arbeidsforholdKilder';
import { Arbeidsforhold, Behandling, InntektArbeidYtelse } from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import ArbeidsforholdFaktaIndex from './ArbeidsforholdFaktaIndex';
import { iay as flereArbfor } from '../testdata/FlereArbforMedAksjonspunkt';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const defaultArbeidsforhold = {
  kilde: {
    navn: arbeidsforholdKilder.INNTEKTSMELDING,
  },
  id: '1',
  arbeidsgiverReferanse: '11212',
  tilVurdering: false,
  erEndret: false,
  mottattDatoInntektsmelding: '2019-01-01',
  fomDato: '2018-01-01',
  tomDato: '2019-01-01',
  stillingsprosent: 100,
  arbeidsforholdId: '1234',
  kanOppretteNyttArbforFraIM: false,
};

const merknaderFraBeslutter = {
  notAccepted: false,
};

const arbeidsgiverOpplysningerPerId = {
  11212: {
    erPrivatPerson: false,
    identifikator: '23232',
    navn: 'Vy',
  },
  999999999: {
    erPrivatPerson: false,
    identifikator: '999999999',
    navn: 'KIWI',
  },
  999999998: {
    erPrivatPerson: false,
    identifikator: '999999998',
    navn: 'REMA 1000',
  },
};

export default {
  title: 'fakta/fakta-arbeidsforhold',
  component: ArbeidsforholdFaktaIndex,
};

const Template: Story<{
  arbeidsforhold?: Arbeidsforhold[];
  inntektArbeidYtelse?: InntektArbeidYtelse;
}> = ({
  arbeidsforhold,
  inntektArbeidYtelse,
}) => (
  <ArbeidsforholdFaktaIndex
    submitCallback={() => Promise.resolve()}
    readOnly
    harApneAksjonspunkter={false}
    submittable={false}
    setFormData={() => undefined}
    behandling={behandling}
    inntektArbeidYtelse={inntektArbeidYtelse || {
      arbeidsforhold,
      skalKunneLeggeTilNyeArbeidsforhold: false,
    } as InntektArbeidYtelse}
    aksjonspunkter={[{
      definisjon: aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD,
      status: aksjonspunktStatus.UTFORT,
      kanLoses: true,
      erAktivt: true,
    }]}
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD]: merknaderFraBeslutter,
    }}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
  />
);

export const ArbeidsforholdetErIkkeAktivt = Template.bind({});
ArbeidsforholdetErIkkeAktivt.args = {
  arbeidsforhold: [{
    ...defaultArbeidsforhold,
    tilVurdering: true,
    mottattDatoInntektsmelding: undefined,
    brukArbeidsforholdet: true,
    brukMedJustertPeriode: true,
    begrunnelse: 'Dette er en begrunnelse',
  }],
};

export const SokerErIPermisjon = Template.bind({});
SokerErIPermisjon.args = {
  arbeidsforhold: [{
    ...defaultArbeidsforhold,
    tilVurdering: true,
    mottattDatoInntektsmelding: undefined,
    brukArbeidsforholdet: true,
    permisjoner: [{
      permisjonFom: '2020-01-01',
    }],
    brukPermisjon: true,
    begrunnelse: 'Dette er en begrunnelse',
  }],
};

export const SokerErIkkeIPermisjon = Template.bind({});
SokerErIkkeIPermisjon.args = {
  arbeidsforhold: [{
    ...defaultArbeidsforhold,
    tilVurdering: true,
    mottattDatoInntektsmelding: undefined,
    brukArbeidsforholdet: true,
    permisjoner: [{
      type: 'PERMISJON',
      permisjonFom: '2015-01-01',
      permisjonTom: undefined,
      permisjonsprosent: 100,
    }, {
      type: 'PERMISJON',
      permisjonFom: '2017-01-01',
      permisjonTom: '2019-01-01',
      permisjonsprosent: 100,
    }],
    brukPermisjon: false,
    fortsettBehandlingUtenInntektsmelding: true,
    begrunnelse: 'Dette er en begrunnelse',
  }],
};

export const OppdaterArbeidsforholdOgFortsettUtenIM = Template.bind({});
OppdaterArbeidsforholdOgFortsettUtenIM.args = {
  arbeidsforhold: [{
    ...defaultArbeidsforhold,
    tilVurdering: true,
    mottattDatoInntektsmelding: undefined,
    brukArbeidsforholdet: true,
    brukMedJustertPeriode: false,
    fortsettBehandlingUtenInntektsmelding: true,
    begrunnelse: 'Dette er en begrunnelse',
  }],
};

export const OppdaterArbeidsforholdOgAvslaGrunnetManglendeOpplysninger = Template.bind({});
OppdaterArbeidsforholdOgAvslaGrunnetManglendeOpplysninger.args = {
  arbeidsforhold: [{
    ...defaultArbeidsforhold,
    tilVurdering: true,
    mottattDatoInntektsmelding: undefined,
    brukArbeidsforholdet: true,
    brukMedJustertPeriode: false,
    fortsettBehandlingUtenInntektsmelding: false,
    begrunnelse: 'Dette er en begrunnelse',
  }],
};

export const FjernArbeidsforholdet = Template.bind({});
FjernArbeidsforholdet.args = {
  arbeidsforhold: [{
    ...defaultArbeidsforhold,
    tilVurdering: true,
    mottattDatoInntektsmelding: undefined,
    brukArbeidsforholdet: false,
    begrunnelse: 'Dette er en begrunnelse',
  }],
};

export const IngenArbeidsforholdRegistrert = Template.bind({});
IngenArbeidsforholdRegistrert.args = {
  arbeidsforhold: [],
};

export const FlereArbeidsforholdITabell = Template.bind({});
FlereArbeidsforholdITabell.args = {
  inntektArbeidYtelse: flereArbfor,
};
