import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { venteArsak } from '@navikt/fp-kodeverk';

import MenySettPaVentIndex from './MenySettPaVentIndex';

export default {
  title: 'sak/sak-meny-sett-pa-vent',
  component: MenySettPaVentIndex,
};

const Template: StoryFn<{
  settBehandlingPaVent: () => void;
  lukkModal: () => void;
}> = ({ settBehandlingPaVent, lukkModal }) => (
  <MenySettPaVentIndex
    behandlingVersjon={2}
    settBehandlingPaVent={settBehandlingPaVent}
    ventearsaker={[
      {
        kode: venteArsak.AVV_DOK,
        kodeverk: 'VENT_ARSAK_TYPE',
        navn: 'Avvent dokumentasjon',
      },
      {
        kode: venteArsak.AVV_FODSEL,
        kodeverk: 'VENT_ARSAK_TYPE',
        navn: 'Avvent fødsel',
      },
    ]}
    lukkModal={lukkModal}
    erTilbakekreving={false}
  />
);

export const Default = Template.bind({});
Default.args = {
  settBehandlingPaVent: action('button-click'),
  lukkModal: action('button-click'),
};
