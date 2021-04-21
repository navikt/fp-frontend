import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import MenyEndreBehandlendeEnhetIndex from '@fpsak-frontend/sak-meny-endre-enhet';

export default {
  title: 'sak/sak-meny-endre-enhet',
  component: MenyEndreBehandlendeEnhetIndex,
  decorators: [withKnobs],
};

export const visMenyForÅEndreBehandlendeEnhet = () => (
  <MenyEndreBehandlendeEnhetIndex
    behandlingId={1}
    behandlingVersjon={2}
    behandlendeEnhetId="4292"
    behandlendeEnhetNavn="NAV Klageinstans Midt-Norge"
    nyBehandlendeEnhet={action('button-click')}
    behandlendeEnheter={[{
      enhetId: '4292',
      enhetNavn: 'NAV Klageinstans Midt-Norge',
    }, {
      enhetId: '1000',
      enhetNavn: 'NAV Viken',
    }]}
    lukkModal={action('button-click')}
  />
);
