import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus } from '@navikt/fp-kodeverk';
import { PanelDataArgs, withFormData, withPanelData } from '@navikt/fp-storybook-utils';

import { BesteberegningFaktaIndex } from './BesteberegningFaktaIndex';
import { beregningsgrunnlag as scenarioBG } from './scenario/BesteberegningScenario';

import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

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

const meta = {
  title: 'fakta/fakta-besteberegning',
  component: BesteberegningFaktaIndex,
  decorators: [withFormData, withPanelData],
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
