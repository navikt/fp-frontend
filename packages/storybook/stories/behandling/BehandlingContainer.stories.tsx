import React, { useEffect } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { useState } from '@storybook/addons';

import { BehandlingContainer } from '@fpsak-frontend/behandling-felles-ny';

type PanelData = {
  leggFaktaPanelTilMeny: (info: {
    id: string;
    tekst: string;
    erAktiv: boolean;
    harAksjonspunkt: boolean;
  }) => void;
  valgtFaktaSteg?: string;
}

const faktaPaneler = [
  (props: PanelData) => {
    useEffect(() => {
      props.leggFaktaPanelTilMeny({
        id: '1',
        tekst: 'Dette er en paneltittel',
        erAktiv: props.valgtFaktaSteg === '1',
        harAksjonspunkt: true,
      });
    }, []);

    if (props.valgtFaktaSteg !== '1') {
      return null;
    }

    return (
      <div>
        Dette er et testpanel
      </div>
    );
  },
  (props: PanelData) => {
    useEffect(() => {
      props.leggFaktaPanelTilMeny({
        id: '2',
        tekst: 'Annet panel',
        erAktiv: props.valgtFaktaSteg === '2',
        harAksjonspunkt: false,
      });
    }, [props.valgtFaktaSteg]);

    if (props.valgtFaktaSteg !== '2') {
      return null;
    }

    return (
      <div>
        Dette er et annet panel
      </div>
    );
  },
];

export default {
  title: 'behandling/behandling-container',
  component: BehandlingContainer,
  decorators: [withKnobs],
};

export const visKunFaktaPaneler = () => {
  const [valgtFaktaPanel, setValgtFaktaPanel] = useState('');
  return (
    <BehandlingContainer
      valgtFaktaSteg={valgtFaktaPanel}
      oppdaterProsessStegOgFaktaPanelIUrl={(_prosessPanel, faktaPanel) => setValgtFaktaPanel(faktaPanel)}
      faktaPaneler={faktaPaneler}
    />
  );
};
