import React from 'react';
import { action } from '@storybook/addon-actions';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import arbeidsforholdKilder from '@fpsak-frontend/fakta-arbeidsforhold/src/kodeverk/arbeidsforholdKilder';
import { Behandling, InntektArbeidYtelse } from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import ArbeidsforholdFaktaIndex from './ArbeidsforholdFaktaIndex';
import { iay as flereArbfor, ap as apFlereArbfor } from '../testdata/FlereArbforMedAksjonspunkt';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const arbeidsforhold = {
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
  title: 'fakta/fakta-arbeidsforhold',
  component: ArbeidsforholdFaktaIndex,
};

export const test1OverstyrTom = () => (
  <ArbeidsforholdFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    inntektArbeidYtelse={{
      arbeidsforhold: [{
        ...arbeidsforhold,
        tilVurdering: true,
        mottattDatoInntektsmelding: undefined,
        brukArbeidsforholdet: true,
        brukMedJustertPeriode: true,
      }],
      skalKunneLeggeTilNyeArbeidsforhold: false,
    } as InntektArbeidYtelse}
    aksjonspunkter={[{
      definisjon: aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD,
      status: aksjonspunktStatus.UTFORT,
      begrunnelse: 'Dette er en begrunnelse',
      kanLoses: true,
      erAktivt: true,
    }]}
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD]: merknaderFraBeslutter,
    }}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    readOnly
  />
);

export const test2SokerErIPermisjonTrue = () => (
  <ArbeidsforholdFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    inntektArbeidYtelse={{
      arbeidsforhold: [{
        ...arbeidsforhold,
        tilVurdering: true,
        mottattDatoInntektsmelding: undefined,
        brukArbeidsforholdet: true,
        permisjoner: [{
          permisjonFom: '2020-01-01',
        }],
        brukPermisjon: true,
      }],
      skalKunneLeggeTilNyeArbeidsforhold: false,
    } as InntektArbeidYtelse}
    aksjonspunkter={[{
      definisjon: aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD,
      status: aksjonspunktStatus.UTFORT,
      begrunnelse: 'Dette er en begrunnelse',
      kanLoses: true,
      erAktivt: true,
    }]}
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD]: merknaderFraBeslutter,
    }}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    readOnly
  />
);

export const test3SokerErIPermisjonFalse = () => (
  <ArbeidsforholdFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    inntektArbeidYtelse={{
      arbeidsforhold: [{
        ...arbeidsforhold,
        tilVurdering: true,
        mottattDatoInntektsmelding: undefined,
        brukArbeidsforholdet: true,
        permisjoner: [{
          permisjonFom: '2020-01-01',
        }],
        brukPermisjon: false,
        fortsettBehandlingUtenInntektsmelding: true,
      }],
      skalKunneLeggeTilNyeArbeidsforhold: false,
    } as InntektArbeidYtelse}
    aksjonspunkter={[{
      definisjon: aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD,
      status: aksjonspunktStatus.UTFORT,
      begrunnelse: 'Dette er en begrunnelse',
      kanLoses: true,
      erAktivt: true,
    }]}
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD]: merknaderFraBeslutter,
    }}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    readOnly
  />
);

export const test4AktivtArbeidsforhold = () => (
  <ArbeidsforholdFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    inntektArbeidYtelse={{
      arbeidsforhold: [{
        ...arbeidsforhold,
        tilVurdering: true,
        mottattDatoInntektsmelding: undefined,
        brukArbeidsforholdet: true,
        brukMedJustertPeriode: false,
        fortsettBehandlingUtenInntektsmelding: true,
      }],
      skalKunneLeggeTilNyeArbeidsforhold: false,
    } as InntektArbeidYtelse}
    aksjonspunkter={[{
      definisjon: aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD,
      status: aksjonspunktStatus.UTFORT,
      begrunnelse: 'Dette er en begrunnelse',
      kanLoses: true,
      erAktivt: true,
    }]}
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD]: merknaderFraBeslutter,
    }}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    readOnly
  />
);

export const test5FjernArbeidsforhold = () => (
  <ArbeidsforholdFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    inntektArbeidYtelse={{
      arbeidsforhold: [{
        ...arbeidsforhold,
        tilVurdering: true,
        mottattDatoInntektsmelding: undefined,
        brukArbeidsforholdet: false,
      }],
      skalKunneLeggeTilNyeArbeidsforhold: false,
    } as InntektArbeidYtelse}
    aksjonspunkter={[{
      definisjon: aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD,
      status: aksjonspunktStatus.UTFORT,
      begrunnelse: 'Dette er en begrunnelse',
      kanLoses: true,
      erAktivt: true,
    }]}
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD]: merknaderFraBeslutter,
    }}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    readOnly
  />
);

export const visAksjonspunktForAvklaringAvArbeidsforhold = () => (
  <ArbeidsforholdFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    inntektArbeidYtelse={{
      arbeidsforhold: [{
        ...arbeidsforhold,
        tilVurdering: true,
        mottattDatoInntektsmelding: undefined,
      }, {
        ...arbeidsforhold,
        id: '2',
        arbeidsforholdId: '999999998',
        tilVurdering: true,
        mottattDatoInntektsmelding: undefined,
      }],
      skalKunneLeggeTilNyeArbeidsforhold: false,
    } as InntektArbeidYtelse}
    aksjonspunkter={[{
      definisjon: aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD,
      status: aksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
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

export const visAksjonspunktForIngenArbeidsforholdRegistrert = () => (
  <ArbeidsforholdFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    inntektArbeidYtelse={{
      arbeidsforhold: [],
      skalKunneLeggeTilNyeArbeidsforhold: true,
    }}
    aksjonspunkter={[{
      definisjon: aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD,
      status: aksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
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

export const visPanelUtenAksjonspunkter = () => (
  <ArbeidsforholdFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    inntektArbeidYtelse={{
      arbeidsforhold: [arbeidsforhold],
      skalKunneLeggeTilNyeArbeidsforhold: false,
    } as InntektArbeidYtelse}
    aksjonspunkter={[]}
    alleKodeverk={alleKodeverk as any}
    harApneAksjonspunkter={false}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
  />
);

export const visPanelForPermisjon = () => (
  <ArbeidsforholdFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    inntektArbeidYtelse={{
      arbeidsforhold: [{
        ...arbeidsforhold,
        mottattDatoInntektsmelding: undefined,
        tilVurdering: true,
        permisjoner: [{
          type: 'PERMISJON',
          permisjonFom: '2018-10-10',
          permisjonTom: '2019-10-10',
          permisjonsprosent: 100,
        }],
      }],
      skalKunneLeggeTilNyeArbeidsforhold: false,
    } as InntektArbeidYtelse}
    aksjonspunkter={[{
      definisjon: aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD,
      status: aksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
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

export const visPanelForFlerePermisjoner = () => (
  <ArbeidsforholdFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    inntektArbeidYtelse={{
      arbeidsforhold: [{
        ...arbeidsforhold,
        tilVurdering: true,
        permisjoner: [{
          type: 'PERMISJON',
          permisjonFom: '2015-01-01',
          permisjonTom: undefined,
          permisjonsprosent: 100,
          permisjonsÅrsak: 'aarsak',
        }, {
          type: 'PERMISJON',
          permisjonFom: '2017-01-01',
          permisjonTom: '2019-01-01',
          permisjonsprosent: 100,
        }],
      }],
      skalKunneLeggeTilNyeArbeidsforhold: false,
    } as InntektArbeidYtelse}
    aksjonspunkter={[{
      definisjon: aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD,
      status: aksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
      erAktivt: true,
    }]}
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD]: merknaderFraBeslutter,
    }}
    harApneAksjonspunkter
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
  />
);

export const visPanelForFlereArbeidsforholdMedAksjonspunkt = () => (
  <ArbeidsforholdFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    inntektArbeidYtelse={flereArbfor}
    aksjonspunkter={[apFlereArbfor]}
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD]: merknaderFraBeslutter,
    }}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
  />
);
