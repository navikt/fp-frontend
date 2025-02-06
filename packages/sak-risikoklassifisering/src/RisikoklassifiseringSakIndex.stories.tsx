import { useState } from 'react';

import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus, KodeverkType } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt } from '@navikt/fp-types';

import { KontrollresultatKode } from './kodeverk/kontrollresultatKode';
import { RisikoklassifiseringSakIndex } from './RisikoklassifiseringSakIndex';

import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const meta = {
  title: 'sak/sak-risikoklassifisering',
  component: RisikoklassifiseringSakIndex,
  args: {
    faresignalVurderinger: alleKodeverk[KodeverkType.FARESIGNAL_VURDERING],
    submitAksjonspunkt: action('button-click') as () => Promise<any>,
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
      kontrollresultat: KontrollresultatKode.IKKE_HOY,
    },
  },
};

export const HøyRisikoklassifisering: Story = {
  args: {
    aksjonspunkt: {
      definisjon: AksjonspunktKode.VURDER_FARESIGNALER,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
    } as Aksjonspunkt,
    risikoklassifisering: {
      kontrollresultat: KontrollresultatKode.HOY,
      medlFaresignaler: {
        faresignaler: ['Faresignal 1'],
      },
      iayFaresignaler: {
        faresignaler: ['Faresignal 2', 'Faresignal 3', 'Faresignal 4'],
      },
    },
  },
};
