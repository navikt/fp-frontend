import React, { FunctionComponent, useCallback } from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { RestApiState } from '@navikt/fp-rest-api-hooks';

import BehandlingContainer from '../felles/BehandlingContainer';
import StandardBehandlingProps from '../felles/typer/standardBehandlingProps';
import BehandlingPaVent from '../felles/modaler/paVent/BehandlingPaVent';
import StandardPropsProvider from '../felles/utils/standardPropsStateContext';
import {
  useBehandling,
  useInitBehandlingHandlinger,
  useInitRequestApi,
  useLagreAksjonspunkt,
} from '../felles/utils/indexHooks';
import { requestBehandlingApi } from '../../data/behandlingContextApi';
import BehandleInnsynProsessStegInitPanel from './prosessPaneler/BehandleInnsynProsessStegInitPanel';
import InnsynVedtakProsessStegInitPanel from './prosessPaneler/InnsynVedtakProsessStegInitPanel';
import ProsessPanelInitProps from '../felles/typer/prosessPanelInitProps';

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
  useInitRequestApi(requestBehandlingApi, setRequestPendingMessage);

  const { behandling, behandlingState, hentBehandling, setBehandling, toggleOppdateringAvFagsakOgBehandling } =
    useBehandling(requestBehandlingApi, behandlingUuid, oppdaterBehandlingVersjon);

  const { lagreAksjonspunkter } = useLagreAksjonspunkt(requestBehandlingApi, setBehandling);

  useInitBehandlingHandlinger(requestBehandlingApi, behandlingEventHandler, hentBehandling, setBehandling, behandling);

  const hentProsessPaneler = useCallback(
    (props: ProsessPanelInitProps) => (
      <>
        <BehandleInnsynProsessStegInitPanel {...props} fagsak={fagsak} />
        <InnsynVedtakProsessStegInitPanel
          {...props}
          fagsak={fagsak}
          opneSokeside={opneSokeside}
          toggleOppdatereFagsakContext={toggleOppdateringAvFagsakOgBehandling}
        />
      </>
    ),
    [fagsak, opneSokeside, toggleOppdateringAvFagsakOgBehandling],
  );

  if (!behandling) {
    return <LoadingPanel />;
  }

  return (
    <>
      <BehandlingPaVent
        behandling={behandling}
        hentBehandling={hentBehandling}
        kodeverk={kodeverk}
        requestApi={requestBehandlingApi}
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
          requestApi={requestBehandlingApi}
          hentProsessPaneler={hentProsessPaneler}
        />
      </StandardPropsProvider>
    </>
  );
};

export default BehandlingInnsynIndex;
