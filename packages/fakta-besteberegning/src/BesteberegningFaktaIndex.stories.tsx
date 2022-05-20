import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import {
  Behandling, Aksjonspunkt, Beregningsgrunnlag,
} from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import venteArsakType from '@fpsak-frontend/kodeverk/src/venteArsakType';
import { FaktaAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import BesteberegningFaktaIndex from './BesteberegningFaktaIndex';
import { beregningsgrunnlag as scenarioBG } from './scenario/BesteberegningScenario';

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
  erAktivt: true,
  begrunnelse,
});

const behandlingMal = {
  uuid: '1',
  versjon: 2,
  status: behandlingStatus.BEHANDLING_UTREDES,
  type: behandlingType.FORSTEGANGSSOKNAD,
  behandlingPaaVent: false,
  behandlingHenlagt: false,
  venteArsakKode: null,
};

export default {
  title: 'fakta/fakta-besteberegning',
  component: BesteberegningFaktaIndex,
};

const Template: Story<{
  aksjonspunkter: Aksjonspunkt[];
  beregningsgrunnlag: Beregningsgrunnlag;
  behandling: Behandling,
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
}> = ({
  aksjonspunkter,
  beregningsgrunnlag,
  behandling,
  submitCallback,
}) => (
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
    harApneAksjonspunkter={aksjonspunkter.some((ap) => ap.status === aksjonspunktStatus.OPPRETTET)}
  />
);

export const BesteberegningMedDagpengerOgArbeid = Template.bind({});
BesteberegningMedDagpengerOgArbeid.args = {
  aksjonspunkter: [],
  beregningsgrunnlag: scenarioBG,
  behandling: behandlingMal as Behandling,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const BesteberegningMedDagpengerOgArbeidÅpentAksjonspunkt = Template.bind({});
BesteberegningMedDagpengerOgArbeidÅpentAksjonspunkt.args = {
  behandling: behandlingMal as Behandling,
  beregningsgrunnlag: scenarioBG,
  aksjonspunkter: [lagAksjonspunkt(aksjonspunktCodes.KONTROLLER_AUTOMATISK_BESTEBEREGNING, aksjonspunktStatus.OPPRETTET)],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const BesteberegningMedDagpengerOgArbeidLukketAksjonspunktPåVent = Template.bind({});
BesteberegningMedDagpengerOgArbeidLukketAksjonspunktPåVent.args = {
  behandling: {
    ...behandlingMal,
    venteArsakKode: venteArsakType.VENT_PÅ_KORRIGERT_BESTEBEREGNING,
  } as Behandling,
  beregningsgrunnlag: scenarioBG,
  aksjonspunkter: [lagAksjonspunkt(aksjonspunktCodes.KONTROLLER_AUTOMATISK_BESTEBEREGNING, aksjonspunktStatus.UTFORT,
    'Min begrunnelse for at besteberegningen er feil')],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const BesteberegningMedAvvik = Template.bind({});
BesteberegningMedAvvik.args = {
  behandling: behandlingMal as Behandling,
  beregningsgrunnlag: scenarioBG,
  aksjonspunkter: [lagAksjonspunkt(aksjonspunktCodes.MANUELL_KONTROLL_AV_BESTEBEREGNING, aksjonspunktStatus.OPPRETTET)],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
