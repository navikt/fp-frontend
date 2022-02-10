import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import {
  Aksjonspunkt, AksjonspunktÅrsak, ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId, Behandling,
} from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { FaktaAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import PermisjonFaktaIndex from './PermisjonFaktaIndex';

export default {
  title: 'fakta/fakta-permisjon',
  component: PermisjonFaktaIndex,
};

const Template: Story<{
  aksjonspunkter?: Aksjonspunkt[];
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  readOnly?: boolean;
}> = ({
  aksjonspunkter = [],
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
  submitCallback,
  readOnly = false,
}) => (
  <PermisjonFaktaIndex
    saksnummer="1234567"
    behandling={{
      uuid: '1223-2323-2323-22332',
    } as Behandling}
    aksjonspunkter={aksjonspunkter}
    submittable
    harApneAksjonspunkter
    alleMerknaderFraBeslutter={{}}
    readOnly={readOnly}
    alleKodeverk={alleKodeverk as any}
    setFormData={() => undefined}
    arbeidOgInntekt={arbeidOgInntekt}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    submitCallback={submitCallback}
  />
);

export const EttArbeidsforholdUtenSluttdatoForPermisjon = Template.bind({});
EttArbeidsforholdUtenSluttdatoForPermisjon.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [{
    definisjon: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_PERMISJON,
    status: aksjonspunktStatus.OPPRETTET,
  } as Aksjonspunkt],
  arbeidsgiverOpplysningerPerId: {
    910909088: {
      erPrivatPerson: false,
      fødselsdato: undefined,
      identifikator: '910909088',
      navn: 'BEDRIFT AS',
      referanse: '910909088',
    },
  },
  arbeidOgInntekt: {
    arbeidsforhold: [{
      arbeidsgiverIdent: '910909088',
      internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
      eksternArbeidsforholdId: 'ARB001-001',
      fom: '2019-12-06',
      tom: '9999-12-31',
      stillingsprosent: 100,
      årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
      permisjonUtenSluttdatoDto: {
        permisjonFom: '2022-10-01',
      },
    }],
    inntektsmeldinger: [],
    inntekter: [{
      arbeidsgiverIdent: '910909088',
      inntekter: [{
        beløp: 40000,
        fom: '2020-06-01',
        tom: '2020-06-30',
        type: 'LØNN',
      }, {
        beløp: 41000,
        fom: '2021-07-01',
        tom: '2021-07-31',
        type: 'LØNN',
      }, {
        beløp: 40000,
        fom: '2020-08-01',
        tom: '2020-08-31',
        type: 'LØNN',
      }, {
        beløp: 40000,
        fom: '2020-09-01',
        tom: '2020-09-30',
        type: 'LØNN',
      }, {
        beløp: 40000,
        fom: '2021-11-01',
        tom: '2021-11-30',
        type: 'LØNN',
      }],
    }],
    skjæringstidspunkt: '2021-11-10',
  },
};

export const FlereArbeidsforhold = Template.bind({});
FlereArbeidsforhold.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [{
    definisjon: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING_KODE,
    status: aksjonspunktStatus.OPPRETTET,
  }] as Aksjonspunkt[],
  arbeidsgiverOpplysningerPerId: {
    910909088: {
      erPrivatPerson: false,
      fødselsdato: undefined,
      identifikator: '910909088',
      navn: 'BEDRIFT AS',
      referanse: '910909088',
    },
    910909090: {
      erPrivatPerson: false,
      fødselsdato: undefined,
      identifikator: '910909090',
      navn: 'Autoservice AS',
      referanse: '910909090',
    },
    910909092: {
      erPrivatPerson: false,
      fødselsdato: undefined,
      identifikator: '910909092',
      navn: 'DNB',
      referanse: '910909092',
    },
  },
  arbeidOgInntekt: {
    arbeidsforhold: [{
      arbeidsgiverIdent: '910909088',
      eksternArbeidsforholdId: 'ARB001-001',
      fom: '2019-12-06',
      internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
      stillingsprosent: 100,
      tom: '9999-12-31',
      permisjonUtenSluttdatoDto: {
        permisjonFom: '2022-10-02',
      },
    }, {
      arbeidsgiverIdent: '910909090',
      eksternArbeidsforholdId: 'ARB001-002',
      fom: '2019-06-06',
      internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
      stillingsprosent: 80,
      tom: '2021-12-31',
      årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
      permisjonUtenSluttdatoDto: {
        permisjonFom: '2021-11-07',
      },
    }],
    inntektsmeldinger: [{
      arbeidsgiverIdent: '910909088',
      eksternArbeidsforholdId: 'ARB001-001',
      innsendingstidspunkt: '2021-12-06T10:52:13.377',
      inntektPrMnd: 30000,
      internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
      kontaktpersonNavn: 'Corpolarsen',
      kontaktpersonNummer: '41925090',
      motattDato: '2021-12-06',
      refusjonPrMnd: 20000,
      journalpostId: '1',
      dokumentId: '2',
    }],
    inntekter: [{
      arbeidsgiverIdent: '910909088',
      inntekter: [{
        beløp: 40000,
        fom: '2020-06-01',
        tom: '2020-06-30',
        type: 'LØNN',
      }, {
        beløp: 40000,
        fom: '2020-07-01',
        tom: '2020-07-31',
        type: 'LØNN',
      }, {
        beløp: 40000,
        fom: '2020-08-01',
        tom: '2020-08-31',
        type: 'LØNN',
      }, {
        beløp: 40000,
        fom: '2020-09-01',
        tom: '2020-09-30',
        type: 'LØNN',
      }, {
        beløp: 40000,
        fom: '2021-11-01',
        tom: '2021-11-30',
        type: 'LØNN',
      }],
    }, {
      arbeidsgiverIdent: '910909090',
      inntekter: [{
        beløp: 30000,
        fom: '2020-06-01',
        tom: '2020-06-30',
        type: 'LØNN',
      }, {
        beløp: 31000,
        fom: '2021-07-01',
        tom: '2021-07-31',
        type: 'LØNN',
      }, {
        beløp: 30000,
        fom: '2020-08-01',
        tom: '2020-08-31',
        type: 'LØNN',
      }, {
        beløp: 30000,
        fom: '2020-09-01',
        tom: '2020-09-30',
        type: 'LØNN',
      }, {
        beløp: 30000,
        fom: '2021-11-01',
        tom: '2021-11-30',
        type: 'LØNN',
      }],
    }],
    skjæringstidspunkt: '2021-11-10',
  },
};
