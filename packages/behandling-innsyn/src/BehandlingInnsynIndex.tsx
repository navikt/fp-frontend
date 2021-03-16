import React, { FunctionComponent } from 'react';

import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  BehandlingContainer, StandardBehandlingProps, StandardPropsProvider, BehandlingPaVent, ReduxFormStateCleaner,
  useInitRequestApi, useLagreAksjonspunkt, useBehandling, useInitBehandlingHandlinger,
} from '@fpsak-frontend/behandling-felles-ny';

import { requestInnsynApi, InnsynBehandlingApiKeys } from './data/innsynBehandlingApi';
import BehandleInnsynProsessStegInitPanel from './prosessPaneler/BehandleInnsynProsessStegInitPanel';
import InnsynVedtakProsessStegInitPanel from './prosessPaneler/InnsynVedtakProsessStegInitPanel';

const BehandlingInnsynIndex: FunctionComponent<StandardBehandlingProps> = ({
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
  setRequestPendingMessage,
}) => {
  useInitRequestApi(requestInnsynApi, setRequestPendingMessage);

  const {
    behandling, behandlingState, hentBehandling, setBehandling,
  } = useBehandling(
    requestInnsynApi, InnsynBehandlingApiKeys.BEHANDLING_INNSYN, behandlingId,
  );

  const { lagreAksjonspunkter } = useLagreAksjonspunkt(
    requestInnsynApi, setBehandling, InnsynBehandlingApiKeys.SAVE_AKSJONSPUNKT,
  );

  useInitBehandlingHandlinger(requestInnsynApi, InnsynBehandlingApiKeys, behandlingEventHandler, hentBehandling, setBehandling);

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
        requestApi={requestInnsynApi}
        oppdaterPaVentKey={InnsynBehandlingApiKeys.UPDATE_ON_HOLD}
        aksjonspunktKey={InnsynBehandlingApiKeys.AKSJONSPUNKTER}
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
          oppdaterBehandlingVersjon={oppdaterBehandlingVersjon}
          hentProsessPaneler={(props, ekstraProps) => (
            <>
              <BehandleInnsynProsessStegInitPanel {...props} fagsak={fagsak} />
              <InnsynVedtakProsessStegInitPanel
                {...props}
                fagsak={fagsak}
                opneSokeside={opneSokeside}
                toggleOppdatereFagsakContext={ekstraProps.toggleOppdatereFagsakContext}
              />
            </>
          )}
        />
      </StandardPropsProvider>
    </>
  );
};

export default BehandlingInnsynIndex;
