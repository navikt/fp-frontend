import React, { FunctionComponent } from 'react';

import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  BehandlingContainer, StandardBehandlingProps, StandardPropsProvider, BehandlingPaVent, ReduxFormStateCleaner,
  useInitRequestApi, useLagreAksjonspunkt, useBehandling, useInitBehandlingHandlinger,
} from '@fpsak-frontend/behandling-felles';
import { Kodeverk } from '@fpsak-frontend/types';

import { requestAnkeApi, AnkeBehandlingApiKeys } from './data/ankeBehandlingApi';
import AnkeBehandlingProsessStegInitPanel from './prosessPaneler/AnkeBehandlingProsessStegInitPanel';
import AnkeResultatProsessStegInitPanel from './prosessPaneler/AnkeResultatProsessStegInitPanel';
import AnkeTrygderettsbehandlingProsessStegInitPanel from './prosessPaneler/AnkeTrygderettsbehandlingProsessStegInitPanel';

interface OwnProps {
  alleBehandlinger: {
    id: number;
    type: Kodeverk;
    avsluttet?: string;
  }[];
}

const BehandlingAnkeIndex: FunctionComponent<OwnProps & StandardBehandlingProps> = ({
  behandlingEventHandler,
  behandlingId,
  oppdaterBehandlingVersjon,
  kodeverk,
  fagsak,
  rettigheter,
  oppdaterProsessStegOgFaktaPanelIUrl,
  valgtProsessSteg,
  valgtFaktaSteg,
  opneSokeside,
  alleBehandlinger,
  setRequestPendingMessage,
}) => {
  useInitRequestApi(requestAnkeApi, setRequestPendingMessage);

  const {
    behandling, behandlingState, hentBehandling, setBehandling,
  } = useBehandling(
    requestAnkeApi, AnkeBehandlingApiKeys.BEHANDLING_ANKE, behandlingId,
  );

  const { lagreAksjonspunkter, toggleOppdateringAvFagsakOgBehandling } = useLagreAksjonspunkt(
    requestAnkeApi, setBehandling, AnkeBehandlingApiKeys.SAVE_AKSJONSPUNKT, oppdaterBehandlingVersjon,
  );

  useInitBehandlingHandlinger(requestAnkeApi, AnkeBehandlingApiKeys, behandlingEventHandler, hentBehandling, setBehandling);

  if (!behandling) {
    return <LoadingPanel />;
  }

  return (
    <>
      <ReduxFormStateCleaner
        behandlingId={behandling.id}
        behandlingVersjon={behandling.versjon}
      />
      <BehandlingPaVent
        behandling={behandling}
        hentBehandling={hentBehandling}
        kodeverk={kodeverk}
        requestApi={requestAnkeApi}
        oppdaterPaVentKey={AnkeBehandlingApiKeys.UPDATE_ON_HOLD}
        aksjonspunktKey={AnkeBehandlingApiKeys.AKSJONSPUNKTER}
      />
      <StandardPropsProvider
        behandling={behandling}
        fagsak={fagsak}
        rettigheter={rettigheter}
        hasFetchError={behandlingState === RestApiState.ERROR}
        alleKodeverk={kodeverk}
        lagreAksjonspunkter={lagreAksjonspunkter}
        oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
      >
        <BehandlingContainer
          behandling={behandling}
          valgtProsessSteg={valgtProsessSteg}
          valgtFaktaSteg={valgtFaktaSteg}
          oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
          hentProsessPaneler={(props) => (
            <>
              <AnkeBehandlingProsessStegInitPanel {...props} fagsak={fagsak} alleBehandlinger={alleBehandlinger} />
              <AnkeResultatProsessStegInitPanel
                {...props}
                fagsak={fagsak}
                opneSokeside={opneSokeside}
                toggleSkalOppdatereFagsakContext={toggleOppdateringAvFagsakOgBehandling}
              />
              <AnkeTrygderettsbehandlingProsessStegInitPanel
                {...props}
                fagsak={fagsak}
                opneSokeside={opneSokeside}
                toggleSkalOppdatereFagsakContext={toggleOppdateringAvFagsakOgBehandling}
                oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
              />
            </>
          )}
        />
      </StandardPropsProvider>
    </>
  );
};

export default BehandlingAnkeIndex;
