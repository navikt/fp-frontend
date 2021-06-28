import React from 'react';
import { action } from '@storybook/addon-actions';

import MenySettPaVentIndex from '@fpsak-frontend/sak-meny-sett-pa-vent';
import venteArsakType from '@fpsak-frontend/kodeverk/src/venteArsakType';

export default {
  title: 'sak/sak-meny-sett-pa-vent',
  component: MenySettPaVentIndex,
};

export const visMenyForÅSetteBehandlingPåVent = () => (
  <MenySettPaVentIndex
    behandlingVersjon={2}
    settBehandlingPaVent={action('button-click')}
    ventearsaker={[{
      kode: venteArsakType.AVV_DOK,
      kodeverk: 'VENT_ARSAK_TYPE',
      navn: 'Avvent dokumentasjon',
    }, {
      kode: venteArsakType.AVV_FODSEL,
      kodeverk: 'VENT_ARSAK_TYPE',
      navn: 'Avvent fødsel',
    }]}
    lukkModal={action('button-click')}
    erTilbakekreving={false}
  />
);
