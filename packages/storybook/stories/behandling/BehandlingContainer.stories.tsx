import React, { useEffect } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { BehandlingContainer } from '@fpsak-frontend/behandling-felles-ny';

type PanelData = {
  leggFaktaPanelTilMeny: (id: string, title: string) => void;
}

const faktaPaneler = [
  (props: PanelData) => {
    useEffect(() => {
      props.leggFaktaPanelTilMeny('test', 'Meny-tittel');
    }, []);
    return (
      <div>
        panel
      </div>
    );
  },
];

export default {
  title: 'behandling/behandling-container',
  component: BehandlingContainer,
  decorators: [withKnobs],
};

export const visKunFaktaPaneler = () => (
  <BehandlingContainer
    faktaPaneler={faktaPaneler}
  />
);
