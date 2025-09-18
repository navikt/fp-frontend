import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { AksjonspunktKode, AksjonspunktStatus } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt } from '@navikt/fp-types';

import { RisikoklassifiseringSakIndex } from './RisikoklassifiseringSakIndex';
import type { AvklartRisikoklassifiseringAp } from './types/AvklartRisikoklassifiseringAp';

const meta = {
  title: 'sak/sak-risikoklassifisering',
  component: RisikoklassifiseringSakIndex,
  args: {
    faresignalVurderinger: alleKodeverk['FaresignalVurdering'],
    submitAksjonspunkt: action('button-click') as () => Promise<AvklartRisikoklassifiseringAp>,
    toggleRiskPanel: action('button-click'),
    isPanelOpen: false,
    readOnly: false,
  },
  render: storyArgs => {
    const [args, setArgs] = useState(storyArgs);

    const toggleRiskPanel = () => {
      args.toggleRiskPanel?.();
      setArgs(oldArgs => ({ ...oldArgs, isPanelOpen: true }));
    };

    return (
      <div style={{ width: '600px' }}>
        <RisikoklassifiseringSakIndex {...args} toggleRiskPanel={toggleRiskPanel} />
      </div>
    );
  },
} satisfies Meta<typeof RisikoklassifiseringSakIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const IngenRisikoklassifisering: Story = {};

export const LavRisikoklassifisering: Story = {
  args: {
    risikoklassifisering: {
      kontrollresultat: 'IKKE_HOY',
    },
  },
};

export const HøyRisikoklassifisering: Story = {
  args: {
    aksjonspunkt: {
      definisjon: AksjonspunktKode.VURDER_FARESIGNALER,
      status: AksjonspunktStatus.OPPRETTET,
    } as Aksjonspunkt,
    risikoklassifisering: {
      kontrollresultat: 'HOY',
      medlFaresignaler: {
        faresignaler: ['Faresignal 1'],
      },
      iayFaresignaler: {
        faresignaler: ['Faresignal 2', 'Faresignal 3', 'Faresignal 4'],
      },
    },
  },
};
