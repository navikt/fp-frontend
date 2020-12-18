import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import BesteberegningProsessIndex from '@fpsak-frontend/prosess-besteberegning';
import withReduxProvider from '../../../decorators/withRedux';
import alleKodeverk from '../../mocks/alleKodeverk.json';
import { beregningsgrunnlag } from './scenario/ArbeidMedDagpengerIOpptjeningsperioden';

const arbeidsgiverOpplysninger = {
  910909088: {
    identifikator: '910909088',
    navn: 'BEDRIFT AS',
    erPrivatPerson: false,
  },
  6823424234232: {
    identifikator: '6823424234232',
    navn: 'Jan Bertheussen Johansen',
    erPrivatPerson: true,
    fødselsdato: '1943-03-03',
  },
};

export default {
  title: 'prosess/prosess-besteberegning',
  component: BesteberegningProsessIndex,
  decorators: [withKnobs, withReduxProvider],
};

export const besteberegningMedDagpengerOgArbeid = () => (
  <BesteberegningProsessIndex
    beregningsgrunnlag={beregningsgrunnlag}
    alleKodeverk={alleKodeverk as any}
    arbeidsgiverOpplysninger={arbeidsgiverOpplysninger}
  />
);
