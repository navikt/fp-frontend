import React, { FunctionComponent } from 'react';

import {
  FagsakInfo, BehandlingPaVent, SettPaVentParams, Rettigheter,
} from '@fpsak-frontend/behandling-felles';
import { Behandling, Kodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';

import AnkeProsess from './AnkeProsess';
import FetchedData from '../types/fetchedDataTsType';

interface OwnProps {
  fagsak: FagsakInfo;
  behandling: Behandling;
  fetchedData: FetchedData;
  rettigheter: Rettigheter;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  valgtProsessSteg?: string;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  oppdaterBehandlingVersjon: (versjon: number) => void;
  settPaVent: (params: SettPaVentParams) => Promise<any>;
  hentBehandling: (params: { behandlingId: number }, keepData: boolean) => Promise<any>;
  setBehandling: (behandling: Behandling) => void;
  opneSokeside: () => void;
  alleBehandlinger: {
    id: number;
    type: Kodeverk;
    avsluttet?: string;
  }[];
}

const AnkePaneler: FunctionComponent<OwnProps> = ({
  fagsak,
  behandling,
  fetchedData,
  rettigheter,
  alleKodeverk,
  valgtProsessSteg,
  oppdaterProsessStegOgFaktaPanelIUrl,
  oppdaterBehandlingVersjon,
  settPaVent,
  hentBehandling,
  opneSokeside,
  alleBehandlinger,
  setBehandling,
}) => (
  <>
    <BehandlingPaVent
      behandling={behandling}
      aksjonspunkter={fetchedData.aksjonspunkter}
      kodeverk={alleKodeverk}
      settPaVent={settPaVent}
      hentBehandling={hentBehandling}
    />
    <AnkeProsess
      data={fetchedData}
      fagsak={fagsak}
      behandling={behandling}
      rettigheter={rettigheter}
      valgtProsessSteg={valgtProsessSteg}
      oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
      oppdaterBehandlingVersjon={oppdaterBehandlingVersjon}
      opneSokeside={opneSokeside}
      alleBehandlinger={alleBehandlinger}
      alleKodeverk={alleKodeverk}
      setBehandling={setBehandling}
    />
  </>
);

export default AnkePaneler;
