import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import { ArbeidOgInntektsmelding } from '@fpsak-frontend/types';
import ArbeidOgInntektFaktaIndex from './ArbeidOgInntektFaktaIndex';

export default {
  title: 'fakta/fakta-arbeid-og-inntekter',
  component: ArbeidOgInntektFaktaIndex,
};

const Template: Story<{
  arbeidOgInntekt: ArbeidOgInntektsmelding;
}> = ({
  arbeidOgInntekt,
}) => (
  <ArbeidOgInntektFaktaIndex
    arbeidOgInntekt={arbeidOgInntekt}
  />
);

export const Default = Template.bind({});
Default.args = {
  arbeidOgInntekt: {
    arbeidsforhold: [],
    inntektsmeldinger: [{
      arbeidsgiverIdent: '910909088',
      eksternArbeidsforholdId: 'ARB001-001',
      innsendingstidspunkt: '2021-12-06T10:52:13.377',
      inntektPrMnd: 30000,
      internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
      kontaktpersonNavn: 'Corpolarsen',
      kontaktpersonNummer: '41925090',
      motattDato: '2021-12-06',
      refusjonPrMnd: null,
    }],
    inntekter: [{
      arbeidsgiverIdent: '910909088',
      inntekter: [{
        beløp: 30000,
        fom: '2020-07-01',
        tom: '2020-07-31',
        type: {
          kode: 'LØNN',
          kodeverk: 'INNTEKTSPOST_TYPE',
        },
      }, {
        beløp: 30000,
        fom: '2020-08-01',
        tom: '2020-08-31',
        type: {
          kode: 'LØNN',
          kodeverk: 'INNTEKTSPOST_TYPE',
        },
      }, {
        beløp: 30000,
        fom: '2020-09-01',
        tom: '2020-09-30',
        type: {
          kode: 'LØNN',
          kodeverk: 'INNTEKTSPOST_TYPE',
        },
      }, {
        beløp: 30000,
        fom: '2020-10-01',
        tom: '2020-10-31',
        type: {
          kode: 'LØNN',
          kodeverk: 'INNTEKTSPOST_TYPE',
        },
      }],
    }],
  },
};
