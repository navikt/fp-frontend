import React, { FunctionComponent } from 'react';

import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  BehandlingContainer, StandardBehandlingProps, StandardPropsProvider, BehandlingPaVent,
  useInitRequestApi, useLagreAksjonspunkt, useBehandling, useInitBehandlingHandlinger,
} from '@fpsak-frontend/behandling-felles';

import { requestKlageApi, KlageBehandlingApiKeys } from './data/klageBehandlingApi';
import FormKravFamOgPensjonProsessStegInitPanel from './prosessPaneler/FormKravFamOgPensjonProsessStegInitPanel';
import VurderingFamOgPensjonProsessStegInitPanel from './prosessPaneler/VurderingFamOgPensjonProsessStegInitPanel';
import FormKravKlageInstansProsessStegInitPanel from './prosessPaneler/FormKravKlageInstansProsessStegInitPanel';
import VurderingKlageInstansProsessStegInitPanel from './prosessPaneler/VurderingKlageInstansProsessStegInitPanel';
import KlageresultatProsessStegInitPanel from './prosessPaneler/KlageresultatProsessStegInitPanel';

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
    requestKlageApi, KlageBehandlingApiKeys.BEHANDLING_KLAGE, behandlingUuid, oppdaterBehandlingVersjon,
  );

  const { lagreAksjonspunkter } = useLagreAksjonspunkt(
    requestKlageApi, setBehandling, KlageBehandlingApiKeys.SAVE_AKSJONSPUNKT,
  );

  useInitBehandlingHandlinger(requestKlageApi, KlageBehandlingApiKeys, behandlingEventHandler, hentBehandling, setBehandling, behandling);

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
        oppdaterPaVentKey={KlageBehandlingApiKeys.UPDATE_ON_HOLD}
        aksjonspunktKey={KlageBehandlingApiKeys.AKSJONSPUNKTER}
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
