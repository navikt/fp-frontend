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
import { requestKlageApi } from './data/klageBehandlingApi';
import FormKravFamOgPensjonProsessStegInitPanel from './prosessPaneler/FormKravFamOgPensjonProsessStegInitPanel';
import VurderingFamOgPensjonProsessStegInitPanel from './prosessPaneler/VurderingFamOgPensjonProsessStegInitPanel';
import FormKravKlageInstansProsessStegInitPanel from './prosessPaneler/FormKravKlageInstansProsessStegInitPanel';
import VurderingKlageInstansProsessStegInitPanel from './prosessPaneler/VurderingKlageInstansProsessStegInitPanel';
import KlageresultatProsessStegInitPanel from './prosessPaneler/KlageresultatProsessStegInitPanel';
import VergeFaktaInitPanel from '../felles/fakta/paneler/VergeFaktaInitPanel';
import FaktaPanelInitProps from '../felles/typer/faktaPanelInitProps';
import ProsessPanelInitProps from '../felles/typer/prosessPanelInitProps';

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

  const { behandling, behandlingState, hentBehandling, setBehandling, toggleOppdateringAvFagsakOgBehandling } =
    useBehandling(requestKlageApi, behandlingUuid, oppdaterBehandlingVersjon);

  const { lagreAksjonspunkter } = useLagreAksjonspunkt(requestKlageApi, setBehandling);

  useInitBehandlingHandlinger(requestKlageApi, behandlingEventHandler, hentBehandling, setBehandling, behandling);

  const hentFaktaPaneler = useCallback((props: FaktaPanelInitProps) => <VergeFaktaInitPanel {...props} />, []);

  const hentProsessPaneler = useCallback(
    (props: ProsessPanelInitProps) => (
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
    ),
    [
      alleBehandlinger,
      fagsak,
      opneSokeside,
      toggleOppdateringAvFagsakOgBehandling,
      oppdaterProsessStegOgFaktaPanelIUrl,
    ],
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
          hentFaktaPaneler={hentFaktaPaneler}
          hentProsessPaneler={hentProsessPaneler}
        />
      </StandardPropsProvider>
    </>
  );
};

export default BehandlingKlageIndex;
