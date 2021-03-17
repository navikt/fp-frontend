import React, { FunctionComponent } from 'react';

import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  BehandlingContainer, StandardBehandlingProps, StandardPropsProvider, BehandlingPaVent, ReduxFormStateCleaner,
  useInitRequestApi, useLagreAksjonspunkt, useBehandling, useInitBehandlingHandlinger,
} from '@fpsak-frontend/behandling-felles-ny';
import { Kodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';

import { restApiTilbakekrevingHooks, requestTilbakekrevingApi, TilbakekrevingBehandlingApiKeys } from './data/tilbakekrevingBehandlingApi';
import FeilutbetalingFaktaInitPanel from './faktaPaneler/FeilutbetalingFaktaInitPanel';
import VergeFaktaInitPanel from './faktaPaneler/VergeFaktaInitPanel';
import ForeldelseProsessStegInitPanel from './prosessPaneler/ForeldelseProsessStegInitPanel';
import TilbakekrevingProsessStegInitPanel from './prosessPaneler/TilbakekrevingProsessStegInitPanel';
import VedtakTilbakekrevingProsessStegInitPanel from './prosessPaneler/VedtakTilbakekrevingProsessStegInitPanel';

interface OwnProps {
  fagsakKjønn: Kodeverk;
  harApenRevurdering: boolean;
}

const BehandlingTilbakekrevingIndex: FunctionComponent<OwnProps & StandardBehandlingProps> = ({
  behandlingEventHandler,
  behandlingId,
  oppdaterBehandlingVersjon,
  kodeverk: fpsakKodeverk,
  fagsak,
  fagsakKjønn,
  rettigheter,
  oppdaterProsessStegOgFaktaPanelIUrl,
  valgtProsessSteg,
  valgtFaktaSteg,
  opneSokeside,
  harApenRevurdering,
  setRequestPendingMessage,
}) => {
  useInitRequestApi(requestTilbakekrevingApi, setRequestPendingMessage);

  const {
    behandling, behandlingState, hentBehandling, setBehandling,
  } = useBehandling(
    requestTilbakekrevingApi, TilbakekrevingBehandlingApiKeys.BEHANDLING_TILBAKE, behandlingId,
  );

  const { lagreAksjonspunkter } = useLagreAksjonspunkt(
    requestTilbakekrevingApi, setBehandling, TilbakekrevingBehandlingApiKeys.SAVE_AKSJONSPUNKT,
  );

  useInitBehandlingHandlinger(requestTilbakekrevingApi, TilbakekrevingBehandlingApiKeys, behandlingEventHandler, hentBehandling, setBehandling);

  const { data: tilbakekrevingKodeverk } = restApiTilbakekrevingHooks
    .useRestApi<{[key: string]: KodeverkMedNavn[]}>(TilbakekrevingBehandlingApiKeys.TILBAKE_KODEVERK);

  if (!behandling || !tilbakekrevingKodeverk) {
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
        kodeverk={tilbakekrevingKodeverk}
        requestApi={requestTilbakekrevingApi}
        oppdaterPaVentKey={TilbakekrevingBehandlingApiKeys.UPDATE_ON_HOLD}
        aksjonspunktKey={TilbakekrevingBehandlingApiKeys.AKSJONSPUNKTER}
      />
      <StandardPropsProvider
        behandling={behandling}
        fagsak={fagsak}
        rettigheter={rettigheter}
        hasFetchError={behandlingState === RestApiState.ERROR}
        alleKodeverk={tilbakekrevingKodeverk}
        lagreAksjonspunkter={lagreAksjonspunkter}
        oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
      >
        <BehandlingContainer
          behandling={behandling}
          valgtProsessSteg={valgtProsessSteg}
          valgtFaktaSteg={valgtFaktaSteg}
          oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
          oppdaterBehandlingVersjon={oppdaterBehandlingVersjon}
          hentFaktaPaneler={(props) => (
            <>
              <FeilutbetalingFaktaInitPanel {...props} fpsakKodeverk={fpsakKodeverk} fagsak={fagsak} />
              <VergeFaktaInitPanel {...props} />
            </>
          )}
          hentProsessPaneler={(props, ekstraProps) => (
            <>
              <ForeldelseProsessStegInitPanel {...props} fagsakKjønn={fagsakKjønn} />
              <TilbakekrevingProsessStegInitPanel {...props} fagsakKjønn={fagsakKjønn} />
              <VedtakTilbakekrevingProsessStegInitPanel
                {...props}
                harApenRevurdering={harApenRevurdering}
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

export default BehandlingTilbakekrevingIndex;
