import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import ArbeidsforholdFaktaIndex from '@fpsak-frontend/fakta-arbeidsforhold';
import arbeidsforholdKilder from '@fpsak-frontend/fakta-arbeidsforhold/src/kodeverk/arbeidsforholdKilder';
import { Behandling, InntektArbeidYtelse } from '@fpsak-frontend/types';

import { iay as flereArbfor, ap as apFlereArbfor } from './scenario/FlereArbforMedAksjonspunkt';
import withReduxProvider from '../../../decorators/withRedux';

import alleKodeverk from '../../mocks/alleKodeverk.json';

const behandling = {
  id: 1,
  versjon: 1,
} as Behandling;

const arbeidsforhold = {
  navn: 'Vy',
  kilde: {
    navn: arbeidsforholdKilder.INNTEKTSMELDING,
    kodeverk: '',
  },
  id: '1',
  arbeidsgiverIdentifikator: '11212',
  tilVurdering: false,
  erEndret: false,
  mottattDatoInntektsmelding: '2019-01-01',
  fomDato: '2018-01-01',
  tomDato: '2019-01-01',
  stillingsprosent: 100,
  arbeidsforholdId: '1234',
  arbeidsgiverIdentifiktorGUI: '23232',
  kanOppretteNyttArbforFraIM: false,
};

const merknaderFraBeslutter = {
  notAccepted: false,
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
  title: 'fakta/fakta-arbeidsforhold',
  component: ArbeidsforholdFaktaIndex,
  decorators: [withKnobs, withReduxProvider],
};

export const visAksjonspunktForAvklaringAvArbeidsforhold = () => (
  <ArbeidsforholdFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    inntektArbeidYtelse={object('inntektArbeidYtelse', {
      arbeidsforhold: [{
        ...arbeidsforhold,
        tilVurdering: true,
        mottattDatoInntektsmelding: undefined,
      }, {
        ...arbeidsforhold,
        navn: 'NSB',
        id: '2',
        tilVurdering: true,
        mottattDatoInntektsmelding: undefined,
      }],
      skalKunneLeggeTilNyeArbeidsforhold: false,
    } as InntektArbeidYtelse)}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      begrunnelse: undefined,
      kanLoses: true,
      erAktivt: true,
    }]}
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD]: object('merknaderFraBeslutter', merknaderFraBeslutter),
    }}
  />
);

export const visAksjonspunktForIngenArbeidsforholdRegistrert = () => (
  <ArbeidsforholdFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    inntektArbeidYtelse={object('inntektArbeidYtelse', {
      arbeidsforhold: [],
      skalKunneLeggeTilNyeArbeidsforhold: true,
    })}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      begrunnelse: undefined,
      kanLoses: true,
      erAktivt: true,
    }]}
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD]: object('merknaderFraBeslutter', merknaderFraBeslutter),
    }}
  />
);

export const visPanelUtenAksjonspunkter = () => (
  <ArbeidsforholdFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    inntektArbeidYtelse={object('inntektArbeidYtelse', {
      arbeidsforhold: [arbeidsforhold],
      skalKunneLeggeTilNyeArbeidsforhold: false,
    } as InntektArbeidYtelse)}
    aksjonspunkter={[]}
    alleKodeverk={alleKodeverk as any}
    harApneAksjonspunkter={boolean('harApneAksjonspunkter', false)}
  />
);

export const visPanelForPermisjon = () => (
  <ArbeidsforholdFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    inntektArbeidYtelse={object('inntektArbeidYtelse', {
      arbeidsforhold: [{
        ...arbeidsforhold,
        mottattDatoInntektsmelding: undefined,
        tilVurdering: true,
        permisjoner: [{
          type: {
            kode: 'PERMISJON',
            kodeverk: '',
          },
          permisjonFom: '2018-10-10',
          permisjonTom: '2019-10-10',
          permisjonsprosent: 100,
        }],
      }],
      skalKunneLeggeTilNyeArbeidsforhold: false,
    } as InntektArbeidYtelse)}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      begrunnelse: undefined,
      kanLoses: true,
      erAktivt: true,
    }]}
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD]: object('merknaderFraBeslutter', merknaderFraBeslutter),
    }}
  />
);

export const visPanelForFlerePermisjoner = () => (
  <ArbeidsforholdFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    inntektArbeidYtelse={object('inntektArbeidYtelse', {
      arbeidsforhold: [{
        ...arbeidsforhold,
        tilVurdering: true,
        permisjoner: [{
          type: {
            kode: 'PERMISJON',
            kodeverk: '',
          },
          permisjonFom: '2015-01-01',
          permisjonTom: undefined,
          permisjonsprosent: 100,
          permisjonsÅrsak: 'aarsak',
        }, {
          type: {
            kode: 'PERMISJON',
            kodeverk: '',
          },
          permisjonFom: '2017-01-01',
          permisjonTom: '2019-01-01',
          permisjonsprosent: 100,
        }],
      }],
      skalKunneLeggeTilNyeArbeidsforhold: false,
    } as InntektArbeidYtelse)}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      begrunnelse: undefined,
      kanLoses: true,
      erAktivt: true,
    }]}
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD]: object('merknaderFraBeslutter', merknaderFraBeslutter),
    }}
    harApneAksjonspunkter={boolean('harApneAksjonspunkter', true)}
  />
);

export const visPanelForFlereArbeidsforholdMedAksjonspunkt = () => (
  <ArbeidsforholdFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    inntektArbeidYtelse={object('inntektArbeidYtelse', flereArbfor)}
    aksjonspunkter={[apFlereArbfor]}
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD]: object('merknaderFraBeslutter', merknaderFraBeslutter),
    }}
  />
);
