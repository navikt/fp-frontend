import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import RisikoklassifiseringSakIndex from '@fpsak-frontend/sak-risikoklassifisering';
import kontrollresultatKode from '@fpsak-frontend/sak-risikoklassifisering/src/kodeverk/kontrollresultatKode';

import { Aksjonspunkt } from '@fpsak-frontend/types';
import alleKodeverk from '../mocks/alleKodeverk.json';

const withWidthProvider = (story: any) => (
  <div style={{ width: '600px' }}>
    { story() }
  </div>
);

export default {
  title: 'sak/sak-risikoklassifisering',
  component: RisikoklassifiseringSakIndex,
  decorators: [withKnobs, withWidthProvider],
};

export const visPanelUtenInformasjon = () => (
  <RisikoklassifiseringSakIndex
    isPanelOpen={boolean('isPanelOpen', false)}
    readOnly={boolean('readOnly', false)}
    submitAksjonspunkt={action('button-click') as () => Promise<any>}
    toggleRiskPanel={action('button-click')}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visPanelForLavRisikoklassifisering = () => (
  <RisikoklassifiseringSakIndex
    risikoklassifisering={{
      kontrollresultat: {
        kode: kontrollresultatKode.IKKE_HOY,
        kodeverk: '',
      },
    }}
    isPanelOpen={boolean('isPanelOpen', false)}
    readOnly={boolean('readOnly', false)}
    submitAksjonspunkt={action('button-click') as () => Promise<any>}
    toggleRiskPanel={action('button-click')}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visPanelForHøyRisikoklassifisering = () => (
  <RisikoklassifiseringSakIndex
    aksjonspunkt={{
      definisjon: {
        kode: aksjonspunktCodes.VURDER_FARESIGNALER,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      begrunnelse: undefined,
    } as Aksjonspunkt}
    risikoklassifisering={{
      kontrollresultat: {
        kode: kontrollresultatKode.HOY,
        kodeverk: '',
      },
      medlFaresignaler: {
        faresignaler: ['Faresignal 1'],
      },
      iayFaresignaler: {
        faresignaler: ['Faresignal 2', 'Faresignal 3', 'Faresignal 4'],
      },
    }}
    readOnly={boolean('readOnly', false)}
    submitAksjonspunkt={action('button-click') as () => Promise<any>}
    isPanelOpen
    toggleRiskPanel={action('button-click')}
    alleKodeverk={alleKodeverk as any}
  />
);
