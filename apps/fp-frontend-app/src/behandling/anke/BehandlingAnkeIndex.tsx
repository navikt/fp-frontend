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
import { requestAnkeApi } from './data/ankeBehandlingApi';
import AnkeBehandlingProsessStegInitPanel from './prosessPaneler/AnkeBehandlingProsessStegInitPanel';
import AnkeResultatProsessStegInitPanel from './prosessPaneler/AnkeResultatProsessStegInitPanel';
import AnkeTrygderettsbehandlingProsessStegInitPanel from './prosessPaneler/AnkeTrygderettsbehandlingProsessStegInitPanel';
import VergeFaktaInitPanel from '../felles/fakta/paneler/VergeFaktaInitPanel';
import FaktaPanelInitProps from '../felles/typer/faktaPanelInitProps';
import ProsessPanelInitProps from '../felles/typer/prosessPanelInitProps';

interface OwnProps {
  alleBehandlinger: {
    uuid: string;
    type: string;
    avsluttet?: string;
  }[];
}

const BehandlingAnkeIndex: FunctionComponent<OwnProps & StandardBehandlingProps> = ({
  behandlingEventHandler,
  behandlingUuid,
  oppdaterBehandlingVersjon,
  kodeverk,
  fagsak,
  rettigheter,
  oppdaterProsessStegOgFaktaPanelIUrl,
  valgtProsessSteg,
  valgtFaktaSteg,
  alleBehandlinger,
  setRequestPendingMessage,
}) => {
  useInitRequestApi(requestAnkeApi, setRequestPendingMessage);

  const { behandling, behandlingState, hentBehandling, setBehandling } = useBehandling(
    requestAnkeApi,
    behandlingUuid,
    oppdaterBehandlingVersjon,
  );

  const { lagreAksjonspunkter } = useLagreAksjonspunkt(requestAnkeApi, setBehandling);

  useInitBehandlingHandlinger(requestAnkeApi, behandlingEventHandler, hentBehandling, setBehandling, behandling);

  const faktaPaneler = useCallback((props: FaktaPanelInitProps) => <VergeFaktaInitPanel {...props} />, []);

  const prosessPaneler = useCallback(
    (props: ProsessPanelInitProps) => (
      <>
        <AnkeBehandlingProsessStegInitPanel {...props} alleBehandlinger={alleBehandlinger} />
        <AnkeResultatProsessStegInitPanel {...props} />
        <AnkeTrygderettsbehandlingProsessStegInitPanel {...props} />
      </>
    ),
    [],
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
        requestApi={requestAnkeApi}
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
          requestApi={requestAnkeApi}
          hentFaktaPaneler={faktaPaneler}
          hentProsessPaneler={prosessPaneler}
        />
      </StandardPropsProvider>
    </>
  );
};

export default BehandlingAnkeIndex;
