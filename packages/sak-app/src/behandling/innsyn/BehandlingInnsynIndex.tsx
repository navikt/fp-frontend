import React, { FunctionComponent } from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import BehandlingContainer from '../felles/components/BehandlingContainer';
import StandardBehandlingProps from '../felles/types/standardBehandlingProps';
import BehandlingPaVent from '../felles/components/modaler/paVent/BehandlingPaVent';
import StandardPropsProvider from '../felles/utils/standardPropsStateContext';
import {
  useBehandling, useInitBehandlingHandlinger, useInitRequestApi, useLagreAksjonspunkt,
} from '../felles/utils/indexHooks';
import { requestInnsynApi } from './data/innsynBehandlingApi';
import BehandleInnsynProsessStegInitPanel from './prosessPaneler/BehandleInnsynProsessStegInitPanel';
import InnsynVedtakProsessStegInitPanel from './prosessPaneler/InnsynVedtakProsessStegInitPanel';

const BehandlingInnsynIndex: FunctionComponent<StandardBehandlingProps> = ({
  behandlingEventHandler,
  behandlingUuid,
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
    behandling, behandlingState, hentBehandling, setBehandling, toggleOppdateringAvFagsakOgBehandling,
  } = useBehandling(
    requestInnsynApi, behandlingUuid, oppdaterBehandlingVersjon,
  );

  const { lagreAksjonspunkter } = useLagreAksjonspunkt(requestInnsynApi, setBehandling);

  useInitBehandlingHandlinger(requestInnsynApi, behandlingEventHandler, hentBehandling, setBehandling, behandling);

  if (!behandling) {
    return <LoadingPanel />;
  }

  return (
    <>
      <BehandlingPaVent
        behandling={behandling}
        hentBehandling={hentBehandling}
        kodeverk={kodeverk}
        requestApi={requestInnsynApi}
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
          requestApi={requestInnsynApi}
          hentProsessPaneler={(props) => (
            <>
              <BehandleInnsynProsessStegInitPanel {...props} fagsak={fagsak} />
              <InnsynVedtakProsessStegInitPanel
                {...props}
                fagsak={fagsak}
                opneSokeside={opneSokeside}
                toggleOppdatereFagsakContext={toggleOppdateringAvFagsakOgBehandling}
              />
            </>
          )}
        />
      </StandardPropsProvider>
    </>
  );
};

export default BehandlingInnsynIndex;
