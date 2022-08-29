import React, { FunctionComponent } from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import BehandlingContainer from '../felles/BehandlingContainer';
import StandardBehandlingProps from '../felles/typer/standardBehandlingProps';
import BehandlingPaVent from '../felles/modaler/paVent/BehandlingPaVent';
import StandardPropsProvider from '../felles/utils/standardPropsStateContext';
import {
  useBehandling, useInitBehandlingHandlinger, useInitRequestApi, useLagreAksjonspunkt,
} from '../felles/utils/indexHooks';
import { requestKlageApi } from './data/klageBehandlingApi';
import FormKravFamOgPensjonProsessStegInitPanel from './prosessPaneler/FormKravFamOgPensjonProsessStegInitPanel';
import VurderingFamOgPensjonProsessStegInitPanel from './prosessPaneler/VurderingFamOgPensjonProsessStegInitPanel';
import FormKravKlageInstansProsessStegInitPanel from './prosessPaneler/FormKravKlageInstansProsessStegInitPanel';
import VurderingKlageInstansProsessStegInitPanel from './prosessPaneler/VurderingKlageInstansProsessStegInitPanel';
import KlageresultatProsessStegInitPanel from './prosessPaneler/KlageresultatProsessStegInitPanel';
import VergeFaktaInitPanel from '../felles/fakta/paneler/VergeFaktaInitPanel';

interface OwnProps {
  alleBehandlinger: {
    uuid: string;
    type: string;
    status: string;
    opprettet: string;
    avsluttet?: string;
  }[];
}

const BehandlingKlageIndex: FunctionComponent<OwnProps & StandardBehandlingProps> = ({
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
  alleBehandlinger,
  setRequestPendingMessage,
}) => {
  useInitRequestApi(requestKlageApi, setRequestPendingMessage);

  const {
    behandling, behandlingState, hentBehandling, setBehandling, toggleOppdateringAvFagsakOgBehandling,
  } = useBehandling(
    requestKlageApi, behandlingUuid, oppdaterBehandlingVersjon,
  );

  const { lagreAksjonspunkter } = useLagreAksjonspunkt(requestKlageApi, setBehandling);

  useInitBehandlingHandlinger(requestKlageApi, behandlingEventHandler, hentBehandling, setBehandling, behandling);

  if (!behandling) {
    return <LoadingPanel />;
  }

  return (
    <>
      <BehandlingPaVent
        behandling={behandling}
        hentBehandling={hentBehandling}
        kodeverk={kodeverk}
        requestApi={requestKlageApi}
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
          requestApi={requestKlageApi}
          hentFaktaPaneler={(props) => (
            <VergeFaktaInitPanel {...props} />
          )}
          hentProsessPaneler={(props) => (
            <>
              <FormKravFamOgPensjonProsessStegInitPanel {...props} alleBehandlinger={alleBehandlinger} />
              <VurderingFamOgPensjonProsessStegInitPanel
                {...props}
                fagsak={fagsak}
                opneSokeside={opneSokeside}
                toggleOppdatereFagsakContext={toggleOppdateringAvFagsakOgBehandling}
                oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
              />
              <FormKravKlageInstansProsessStegInitPanel {...props} alleBehandlinger={alleBehandlinger} />
              <VurderingKlageInstansProsessStegInitPanel {...props} fagsak={fagsak} />
              <KlageresultatProsessStegInitPanel
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

export default BehandlingKlageIndex;
