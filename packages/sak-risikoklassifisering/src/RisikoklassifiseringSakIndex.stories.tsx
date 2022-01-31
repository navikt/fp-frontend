import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import RisikoklassifiseringSakIndex from '@fpsak-frontend/sak-risikoklassifisering';
import kontrollresultatKode from '@fpsak-frontend/sak-risikoklassifisering/src/kodeverk/kontrollresultatKode';
import { Aksjonspunkt, Risikoklassifisering } from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

const withWidthProvider = (story: any) => (
  <div style={{ width: '600px' }}>
    { story() }
  </div>
);

export default {
  title: 'sak/sak-risikoklassifisering',
  component: RisikoklassifiseringSakIndex,
  decorators: [withWidthProvider],
};

const Template: Story<{
  isPanelOpen: boolean;
  risikoklassifisering?: Risikoklassifisering;
  aksjonspunkt?: Aksjonspunkt;
  submitAksjonspunkt: () => Promise<any>;
}> = ({
  isPanelOpen,
  risikoklassifisering,
  aksjonspunkt,
  submitAksjonspunkt,
}) => (
  <RisikoklassifiseringSakIndex
    risikoklassifisering={risikoklassifisering}
    aksjonspunkt={aksjonspunkt}
    isPanelOpen={isPanelOpen}
    readOnly={false}
    submitAksjonspunkt={submitAksjonspunkt}
    toggleRiskPanel={action('button-click')}
    alleKodeverk={alleKodeverk as any}
  />
);

export const IngenRisikoklassifisering = Template.bind({});
IngenRisikoklassifisering.args = {
  isPanelOpen: false,
  submitAksjonspunkt: action('button-click') as () => Promise<any>,
};

export const LavRisikoklassifisering = Template.bind({});
LavRisikoklassifisering.args = {
  isPanelOpen: false,
  risikoklassifisering: {
    kontrollresultat: kontrollresultatKode.IKKE_HOY,
  },
  submitAksjonspunkt: action('button-click') as () => Promise<any>,
};

export const HøyRisikoklassifisering = Template.bind({});
HøyRisikoklassifisering.args = {
  isPanelOpen: true,
  aksjonspunkt: {
    definisjon: aksjonspunktCodes.VURDER_FARESIGNALER,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
  } as Aksjonspunkt,
  risikoklassifisering: {
    kontrollresultat: kontrollresultatKode.HOY,
    medlFaresignaler: {
      faresignaler: ['Faresignal 1'],
    },
    iayFaresignaler: {
      faresignaler: ['Faresignal 2', 'Faresignal 3', 'Faresignal 4'],
    },
  },
  submitAksjonspunkt: action('button-click') as () => Promise<any>,
};
