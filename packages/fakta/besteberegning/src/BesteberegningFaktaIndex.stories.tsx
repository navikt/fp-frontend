import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  type PanelDataArgs,
  withMellomlagretFormData,
  withPanelData,
} from '@navikt/fp-storybook-utils';
import type { ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { BesteberegningFaktaIndex } from './BesteberegningFaktaIndex';
import { beregningsgrunnlag as scenarioBG } from './scenario/BesteberegningScenario';

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

const meta = {
  title: 'fakta/fakta-besteberegning',
  component: BesteberegningFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
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
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5048)],
  },
};

export const BesteberegningMedDagpengerOgArbeidLukketAksjonspunktPåVent: Story = {
  args: {
    beregningsgrunnlag: scenarioBG,
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5048, {
        status: 'UTFO',
        begrunnelse: 'Min begrunnelse for at besteberegningen er feil',
      }),
    ],
  },
};

export const BesteberegningMedAvvik: Story = {
  args: {
    beregningsgrunnlag: scenarioBG,
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5048)],
  },
};
