import React, { useEffect } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { useState } from '@storybook/addons';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { Behandling } from '@fpsak-frontend/types';
import { BehandlingContainer } from '@fpsak-frontend/behandling-felles-ny';

type PanelDataFakta = {
  leggFaktaPanelTilMeny: (info: {
    id: string;
    tekst: string;
    erAktiv: boolean;
    harAksjonspunkt: boolean;
  }) => void;
  valgtFaktaSteg?: string;
}
type PanelDataProsess = {
  leggProsessPanelTilMeny: (info: {
    id: string;
    tekst: string;
    erAktiv: boolean;
    status: string;
    harAksjonspunkt: boolean;
    harApentAksjonspunkt: boolean;
  }) => void;
  valgtProsessSteg?: string;
}

const faktaPaneler = [
  (props: PanelDataFakta) => {
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
  (props: PanelDataFakta) => {
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

const prosessPaneler = [
  (props: PanelDataProsess) => {
    useEffect(() => {
      props.leggProsessPanelTilMeny({
        id: '1',
        tekst: 'Adopsjon',
        erAktiv: props.valgtProsessSteg === '1',
        harAksjonspunkt: true,
        harApentAksjonspunkt: false,
        status: vilkarUtfallType.OPPFYLT,
      });
    }, []);

    if (props.valgtProsessSteg !== '1') {
      return null;
    }

    return (
      <div>
        Dette er et testpanel for adopsjon
      </div>
    );
  },
  (props: PanelDataProsess) => {
    useEffect(() => {
      props.leggProsessPanelTilMeny({
        id: '2',
        tekst: 'Fødsel',
        erAktiv: props.valgtProsessSteg === '2',
        harAksjonspunkt: true,
        harApentAksjonspunkt: true,
        status: vilkarUtfallType.IKKE_OPPFYLT,
      });
    }, []);

    if (props.valgtProsessSteg !== '2') {
      return null;
    }

    return (
      <div>
        Dette er et testpanel for fødsel
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
  const [valgtFaktaPanel, setValgtFaktaPanel] = useState('default');
  return (
    <BehandlingContainer
      behandling={{} as Behandling}
      valgtFaktaSteg={valgtFaktaPanel}
      oppdaterProsessStegOgFaktaPanelIUrl={(_prosessPanel, faktaPanel) => setValgtFaktaPanel(faktaPanel)}
      faktaPaneler={faktaPaneler}
      oppdaterBehandlingVersjon={() => undefined}
    />
  );
};

export const visKunProsessPaneler = () => {
  const [valgtProsessPanel, setValgtProsessPanel] = useState('default');
  return (
    <BehandlingContainer
      behandling={{} as Behandling}
      valgtProsessSteg={valgtProsessPanel}
      oppdaterProsessStegOgFaktaPanelIUrl={(prosessPanel) => setValgtProsessPanel(prosessPanel)}
      prosessPaneler={prosessPaneler}
      oppdaterBehandlingVersjon={() => undefined}
    />
  );
};
