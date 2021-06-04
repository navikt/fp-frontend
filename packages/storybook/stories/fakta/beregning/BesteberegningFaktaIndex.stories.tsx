import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import BesteberegningFaktaIndex from '@fpsak-frontend/fakta-besteberegning';
import { action } from '@storybook/addon-actions';
import Behandling from '@fpsak-frontend/types/src/behandlingTsType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import venteArsakType from '@fpsak-frontend/kodeverk/src/venteArsakType';
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

const lagBehandling = (årsak?: string) => ({
  uuid: '1',
  versjon: 1,
  venteArsakKode: årsak,
  type: {
    kode: 'BT-003',
    kodeverk: 'test',
  },
} as Behandling);

const lagAksjonspunkt = (status: string, begrunnelse?: string) => ({
  definisjon: {
    kode: aksjonspunktCodes.KONTROLLER_AUTOMATISK_BESTEBEREGNING,
    kodeverk: 'test',
  },
  status: {
    kode: status,
    kodeverk: 'test',
  },
  kanLoses: true,
  erAktivt: true,
  begrunnelse,
});

export const besteberegningMedDagpengerOgArbeid = () => (
  <BesteberegningFaktaIndex
    beregningsgrunnlag={beregningsgrunnlag}
    alleKodeverk={alleKodeverk as any}
    arbeidsgiverOpplysninger={arbeidsgiverOpplysninger}
    setFormData={() => undefined}
    aksjonspunkter={[]}
    readOnly={false}
    submittable={false}
    submitCallback={action('button-click') as (data: any) => Promise<any>}
    harApneAksjonspunkter={false}
    alleMerknaderFraBeslutter={{}}
    behandling={lagBehandling()}
  />
);

export const besteberegningMedDagpengerOgArbeidÅpentAksjonspunkt = () => (
  <BesteberegningFaktaIndex
    beregningsgrunnlag={beregningsgrunnlag}
    alleKodeverk={alleKodeverk as any}
    arbeidsgiverOpplysninger={arbeidsgiverOpplysninger}
    setFormData={() => undefined}
    aksjonspunkter={[lagAksjonspunkt(aksjonspunktStatus.OPPRETTET)]}
    readOnly={false}
    submittable
    submitCallback={action('button-click') as (data: any) => Promise<any>}
    harApneAksjonspunkter
    alleMerknaderFraBeslutter={{}}
    behandling={lagBehandling()}
  />
);

export const besteberegningMedDagpengerOgArbeidLukketAksjonspunktPåVent = () => (
  <BesteberegningFaktaIndex
    beregningsgrunnlag={beregningsgrunnlag}
    alleKodeverk={alleKodeverk as any}
    arbeidsgiverOpplysninger={arbeidsgiverOpplysninger}
    setFormData={() => undefined}
    aksjonspunkter={[lagAksjonspunkt(aksjonspunktStatus.UTFORT, 'Min begrunnelse for at besteberegningen er feil')]}
    readOnly
    submittable={false}
    submitCallback={action('button-click') as (data: any) => Promise<any>}
    harApneAksjonspunkter={false}
    alleMerknaderFraBeslutter={{}}
    behandling={lagBehandling(venteArsakType.VENT_PÅ_KORRIGERT_BESTEBEREGNING)}
  />
);
