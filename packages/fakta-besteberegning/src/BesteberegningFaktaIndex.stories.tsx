import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { aksjonspunktStatus, AksjonspunktCode } from '@navikt/fp-kodeverk';
import { Behandling, Aksjonspunkt, Beregningsgrunnlag } from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import BesteberegningFaktaIndex from './BesteberegningFaktaIndex';
import { beregningsgrunnlag as scenarioBG } from './scenario/BesteberegningScenario';

import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';

const arbeidsgiverOpplysninger = {
  974652269: {
    identifikator: '974652269',
    navn: 'BEDRIFT AS',
    erPrivatPerson: false,
  },
  6823424234232: {
    identifikator: '6823424234232',
    navn: 'Testy Test',
    erPrivatPerson: true,
    fødselsdato: '1943-03-03',
  },
};

const lagAksjonspunkt = (apKode: string, status: string, begrunnelse?: string) => ({
  definisjon: apKode,
  status,
  kanLoses: true,
  begrunnelse,
});

export default {
  title: 'fakta/fakta-besteberegning',
  component: BesteberegningFaktaIndex,
};

const Template: StoryFn<{
  aksjonspunkter: Aksjonspunkt[];
  beregningsgrunnlag: Beregningsgrunnlag;
  behandling: Behandling;
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
}> = ({ aksjonspunkter, beregningsgrunnlag, behandling, submitCallback }) => (
  <BesteberegningFaktaIndex
    aksjonspunkter={aksjonspunkter}
    submitCallback={submitCallback}
    readOnly={false}
    submittable
    alleMerknaderFraBeslutter={{}}
    alleKodeverk={alleKodeverk as any}
    setFormData={() => undefined}
    behandling={behandling}
    beregningsgrunnlag={beregningsgrunnlag}
    arbeidsgiverOpplysninger={arbeidsgiverOpplysninger}
    harApneAksjonspunkter={aksjonspunkter.some(ap => ap.status === aksjonspunktStatus.OPPRETTET)}
  />
);

export const BesteberegningMedDagpengerOgArbeid = Template.bind({});
BesteberegningMedDagpengerOgArbeid.args = {
  aksjonspunkter: [],
  beregningsgrunnlag: scenarioBG,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const BesteberegningMedDagpengerOgArbeidÅpentAksjonspunkt = Template.bind({});
BesteberegningMedDagpengerOgArbeidÅpentAksjonspunkt.args = {
  beregningsgrunnlag: scenarioBG,
  aksjonspunkter: [
    lagAksjonspunkt(AksjonspunktCode.KONTROLLER_AUTOMATISK_BESTEBEREGNING, aksjonspunktStatus.OPPRETTET),
  ],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const BesteberegningMedDagpengerOgArbeidLukketAksjonspunktPåVent = Template.bind({});
BesteberegningMedDagpengerOgArbeidLukketAksjonspunktPåVent.args = {
  beregningsgrunnlag: scenarioBG,
  aksjonspunkter: [
    lagAksjonspunkt(
      AksjonspunktCode.KONTROLLER_AUTOMATISK_BESTEBEREGNING,
      aksjonspunktStatus.UTFORT,
      'Min begrunnelse for at besteberegningen er feil',
    ),
  ],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const BesteberegningMedAvvik = Template.bind({});
BesteberegningMedAvvik.args = {
  beregningsgrunnlag: scenarioBG,
  aksjonspunkter: [lagAksjonspunkt(AksjonspunktCode.MANUELL_KONTROLL_AV_BESTEBEREGNING, aksjonspunktStatus.OPPRETTET)],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
