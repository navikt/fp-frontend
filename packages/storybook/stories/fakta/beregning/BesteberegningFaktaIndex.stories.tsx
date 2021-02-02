import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import BesteberegningFaktaIndex from '@fpsak-frontend/fakta-besteberegning';
import alleKodeverk from '../../mocks/alleKodeverk.json';
import { beregningsgrunnlag } from './scenario/BesteberegningScenario';

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
  title: 'fakta/fakta-besteberegning',
  component: BesteberegningFaktaIndex,
  decorators: [withKnobs],
};

export const besteberegningMedDagpengerOgArbeid = () => (
  <BesteberegningFaktaIndex
    beregningsgrunnlag={beregningsgrunnlag}
    alleKodeverk={alleKodeverk as any}
    arbeidsgiverOpplysninger={arbeidsgiverOpplysninger}
  />
);
