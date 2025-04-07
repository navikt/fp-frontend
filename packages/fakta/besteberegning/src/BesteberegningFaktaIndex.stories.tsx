import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus } from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { BesteberegningFaktaIndex } from './BesteberegningFaktaIndex';
import { beregningsgrunnlag as scenarioBG } from './scenario/BesteberegningScenario';

import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId = {
  974652269: {
    erPrivatPerson: false,
    navn: 'BEDRIFT AS',
    identifikator: '974652269',
    referanse: '974652269',
  },
  6823424234232: {
    erPrivatPerson: true,
    navn: 'Testy Test',
    identifikator: '6823424234232',
    referanse: '123',
    fødselsdato: '1943-03-03',
  },
};

const lagAksjonspunkt = (apKode: string, status: string, begrunnelse?: string): Aksjonspunkt => ({
  definisjon: apKode,
  status,
  kanLoses: true,
  begrunnelse: begrunnelse ?? null,
});

const meta = {
  title: 'fakta/fakta-besteberegning',
  component: BesteberegningFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    submittable: true,
    arbeidsgiverOpplysninger,
  },
  render: args => <BesteberegningFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof BesteberegningFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const BesteberegningMedDagpengerOgArbeid: Story = {
  args: {
    aksjonspunkterForPanel: [],
    beregningsgrunnlag: scenarioBG,
  },
};

export const BesteberegningMedDagpengerOgArbeidÅpentAksjonspunkt: Story = {
  args: {
    beregningsgrunnlag: scenarioBG,
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.KONTROLLER_AUTOMATISK_BESTEBEREGNING, AksjonspunktStatus.OPPRETTET),
    ],
  },
};

export const BesteberegningMedDagpengerOgArbeidLukketAksjonspunktPåVent: Story = {
  args: {
    beregningsgrunnlag: scenarioBG,
    aksjonspunkterForPanel: [
      lagAksjonspunkt(
        AksjonspunktKode.KONTROLLER_AUTOMATISK_BESTEBEREGNING,
        AksjonspunktStatus.UTFORT,
        'Min begrunnelse for at besteberegningen er feil',
      ),
    ],
  },
};

export const BesteberegningMedAvvik: Story = {
  args: {
    beregningsgrunnlag: scenarioBG,
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.MANUELL_KONTROLL_AV_BESTEBEREGNING, AksjonspunktStatus.OPPRETTET),
    ],
  },
};
