import React, { FunctionComponent } from 'react';

import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  BehandlingContainer, StandardBehandlingProps, StandardPropsProvider, BehandlingPaVent,
  useInitRequestApi, useLagreAksjonspunkt, useBehandling, useInitBehandlingHandlinger,
} from '@fpsak-frontend/behandling-felles';
import { Kodeverk } from '@fpsak-frontend/types';

import { requestKlageApi, KlageBehandlingApiKeys } from './data/klageBehandlingApi';
import FormKravFamOgPensjonProsessStegInitPanel from './prosessPaneler/FormKravFamOgPensjonProsessStegInitPanel';
import VurderingFamOgPensjonProsessStegInitPanel from './prosessPaneler/VurderingFamOgPensjonProsessStegInitPanel';
import FormKravKlageInstansProsessStegInitPanel from './prosessPaneler/FormKravKlageInstansProsessStegInitPanel';
import VurderingKlageInstansProsessStegInitPanel from './prosessPaneler/VurderingKlageInstansProsessStegInitPanel';
import KlageresultatProsessStegInitPanel from './prosessPaneler/KlageresultatProsessStegInitPanel';

interface OwnProps {
  alleBehandlinger: {
    id: number;
    uuid: string;
    type: Kodeverk;
    status: Kodeverk;
    opprettet: string;
    avsluttet?: string;
  }[];
}

const BehandlingKlageIndex: FunctionComponent<OwnProps & StandardBehandlingProps> = ({
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
  useInitRequestApi(requestKlageApi, setRequestPendingMessage);

  const {
    behandling, behandlingState, hentBehandling, setBehandling, toggleOppdateringAvFagsakOgBehandling,
  } = useBehandling(
    requestKlageApi, KlageBehandlingApiKeys.BEHANDLING_KLAGE, behandlingId, oppdaterBehandlingVersjon,
  );

  const { lagreAksjonspunkter } = useLagreAksjonspunkt(
    requestKlageApi, setBehandling, KlageBehandlingApiKeys.SAVE_AKSJONSPUNKT,
  );

  useInitBehandlingHandlinger(requestKlageApi, KlageBehandlingApiKeys, behandlingEventHandler, hentBehandling, setBehandling);

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
