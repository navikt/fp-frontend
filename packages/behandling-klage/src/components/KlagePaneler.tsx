import React, { FunctionComponent } from 'react';

import {
  Rettigheter, BehandlingPaVent, SettPaVentParams,
} from '@fpsak-frontend/behandling-felles';
import {
  Behandling, Fagsak, Kodeverk, KodeverkMedNavn,
} from '@fpsak-frontend/types';

import KlageProsess from './KlageProsess';
import FetchedData from '../types/fetchedDataTsType';

interface OwnProps {
  fagsak: Fagsak;
  behandling: Behandling;
  fetchedData: FetchedData;
  kodeverk: {[key: string]: KodeverkMedNavn[]};
  rettigheter: Rettigheter;
  valgtProsessSteg?: string;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  oppdaterBehandlingVersjon: (versjon: number) => void;
  settPaVent: (params: SettPaVentParams) => Promise<any>;
  hentBehandling: (params: { behandlingId: number }, keepData: boolean) => Promise<any>;
  opneSokeside: () => void;
  alleBehandlinger: {
    id: number;
    uuid: string;
    type: Kodeverk;
    status: Kodeverk;
    opprettet: string;
    avsluttet?: string;
  }[];
  setBehandling: (behandling: Behandling) => void;
}

const KlagePaneler: FunctionComponent<OwnProps> = ({
  fagsak,
  behandling,
  fetchedData,
  kodeverk,
  rettigheter,
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
      kodeverk={kodeverk}
      settPaVent={settPaVent}
      hentBehandling={hentBehandling}
    />
    <KlageProsess
      data={fetchedData}
      fagsak={fagsak}
      behandling={behandling}
      rettigheter={rettigheter}
      valgtProsessSteg={valgtProsessSteg}
      oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
      oppdaterBehandlingVersjon={oppdaterBehandlingVersjon}
      opneSokeside={opneSokeside}
      alleBehandlinger={alleBehandlinger}
      alleKodeverk={kodeverk}
      setBehandling={setBehandling}
    />
  </>
);

export default KlagePaneler;
