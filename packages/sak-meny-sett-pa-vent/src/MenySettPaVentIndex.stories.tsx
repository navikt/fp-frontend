import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import MenySettPaVentIndex from '@fpsak-frontend/sak-meny-sett-pa-vent';
import venteArsakType from '@fpsak-frontend/kodeverk/src/venteArsakType';

export default {
  title: 'sak/sak-meny-sett-pa-vent',
  component: MenySettPaVentIndex,
};

const Template: Story<{
  settBehandlingPaVent: () => void,
  lukkModal: () => void;
}> = ({
  settBehandlingPaVent,
  lukkModal,
}) => (
  <MenySettPaVentIndex
    behandlingVersjon={2}
    settBehandlingPaVent={settBehandlingPaVent}
    ventearsaker={[{
      kode: venteArsakType.AVV_DOK,
      kodeverk: 'VENT_ARSAK_TYPE',
      navn: 'Avvent dokumentasjon',
    }, {
      kode: venteArsakType.AVV_FODSEL,
      kodeverk: 'VENT_ARSAK_TYPE',
      navn: 'Avvent fødsel',
    }]}
    lukkModal={lukkModal}
    erTilbakekreving={false}
  />
);

export const Default = Template.bind({});
Default.args = {
  settBehandlingPaVent: action('button-click'),
  lukkModal: action('button-click'),
};
