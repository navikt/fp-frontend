import React, {
  FunctionComponent, useEffect, useState, useCallback,
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { destroy } from 'redux-form';

import { getBehandlingFormPrefix } from '@fpsak-frontend/form';
import {
  FagsakInfo, Rettigheter, ReduxFormStateCleaner, useSetBehandlingVedEndring,
} from '@fpsak-frontend/behandling-felles';
import { Behandling, Kodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { RestApiState, useRestApiErrorDispatcher } from '@fpsak-frontend/rest-api-hooks';

import FetchedData from './types/fetchedDataTsType';
import KlagePaneler from './components/KlagePaneler';
import { restApiKlageHooks, requestKlageApi, KlageBehandlingApiKeys } from './data/klageBehandlingApi';

const klageData = [
  { key: KlageBehandlingApiKeys.AKSJONSPUNKTER },
  { key: KlageBehandlingApiKeys.VILKAR },
  { key: KlageBehandlingApiKeys.KLAGE_VURDERING }];

interface OwnProps {
  behandlingId: number;
  fagsak: FagsakInfo;
  kodeverk: {[key: string]: KodeverkMedNavn[]};
  rettigheter: Rettigheter;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  valgtProsessSteg?: string;
  oppdaterBehandlingVersjon: (versjon: number) => void;
  behandlingEventHandler: {
    setHandler: (events: {[key: string]: (params: any) => Promise<any> }) => void;
    clear: () => void;
  };
  opneSokeside: () => void;
  alleBehandlinger: {
    id: number;
    uuid: string;
    type: Kodeverk;
    status: Kodeverk;
    opprettet: string;
    avsluttet?: string;
  }[];
  setRequestPendingMessage: (message: string) => void;
}

interface DispatchProps {
  destroyReduxForm: (form: string) => void;
}

const BehandlingKlageIndex: FunctionComponent<OwnProps & DispatchProps> = ({
  behandlingEventHandler,
  behandlingId,
  destroyReduxForm,
  oppdaterBehandlingVersjon,
  kodeverk,
  fagsak,
  rettigheter,
  oppdaterProsessStegOgFaktaPanelIUrl,
  valgtProsessSteg,
  opneSokeside,
  alleBehandlinger,
  setRequestPendingMessage,
}) => {
  const [behandling, setBehandlingState] = useState<Behandling>();
  const [forrigeBehandling, setForrigeBehandling] = useState<Behandling>();
  const setBehandling = useCallback((nyBehandling) => {
    setForrigeBehandling(behandling);
    setBehandlingState(nyBehandling);
  }, [behandling]);

  const { startRequest: hentBehandling, data: behandlingRes } = restApiKlageHooks
    .useRestApiRunner<Behandling>(KlageBehandlingApiKeys.BEHANDLING_KLAGE);
  useSetBehandlingVedEndring(behandlingRes, setBehandling);

  const { addErrorMessage } = useRestApiErrorDispatcher();

  const { startRequest: nyBehandlendeEnhet } = restApiKlageHooks.useRestApiRunner(KlageBehandlingApiKeys.BEHANDLING_NY_BEHANDLENDE_ENHET);
  const { startRequest: settBehandlingPaVent } = restApiKlageHooks.useRestApiRunner(KlageBehandlingApiKeys.BEHANDLING_ON_HOLD);
  const { startRequest: taBehandlingAvVent } = restApiKlageHooks.useRestApiRunner<Behandling>(KlageBehandlingApiKeys.RESUME_BEHANDLING);
  const { startRequest: henleggBehandling } = restApiKlageHooks.useRestApiRunner(KlageBehandlingApiKeys.HENLEGG_BEHANDLING);
  const { startRequest: settPaVent } = restApiKlageHooks.useRestApiRunner(KlageBehandlingApiKeys.UPDATE_ON_HOLD);

  useEffect(() => {
    behandlingEventHandler.setHandler({
      endreBehandlendeEnhet: (params) => nyBehandlendeEnhet(params)
        .then(() => hentBehandling({ behandlingId }, true)),
      settBehandlingPaVent: (params) => settBehandlingPaVent(params)
        .then(() => hentBehandling({ behandlingId }, true)),
      taBehandlingAvVent: (params) => taBehandlingAvVent(params)
        .then((behandlingResTaAvVent) => setBehandling(behandlingResTaAvVent)),
      henleggBehandling: (params) => henleggBehandling(params),
    });

    requestKlageApi.setRequestPendingHandler(setRequestPendingMessage);
    requestKlageApi.setAddErrorMessageHandler(addErrorMessage);

    hentBehandling({ behandlingId }, false);

    return () => {
      behandlingEventHandler.clear();
      setTimeout(() => {
        destroyReduxForm(getBehandlingFormPrefix(behandlingId, forrigeBehandling.versjon));
      }, 1000);
    };
  }, [behandlingId]);

  useEffect(() => {
    if (behandling) {
      requestKlageApi.resetCache();
      requestKlageApi.setLinks(behandling.links);
    }
  }, [behandling]);

  const behandlingVersjon = behandling?.versjon;
  const { data, state } = restApiKlageHooks.useMultipleRestApi<FetchedData>(klageData,
    { keepData: true, updateTriggers: [behandlingVersjon], suspendRequest: !behandling });

  if (!behandling) {
    return <LoadingPanel />;
  }

  if ((state === RestApiState.LOADING || state === RestApiState.NOT_STARTED) && data === undefined) {
    return <LoadingPanel />;
  }

  return (
    <>
      <ReduxFormStateCleaner
        behandlingId={behandling.id}
        behandlingVersjon={state === RestApiState.LOADING
          ? forrigeBehandling.versjon : behandling.versjon}
      />
      <KlagePaneler
        behandling={state === RestApiState.LOADING ? forrigeBehandling : behandling}
        fetchedData={data}
        fagsak={fagsak}
        kodeverk={kodeverk}
        rettigheter={rettigheter}
        valgtProsessSteg={valgtProsessSteg}
        oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
        oppdaterBehandlingVersjon={oppdaterBehandlingVersjon}
        settPaVent={settPaVent}
        hentBehandling={hentBehandling}
        opneSokeside={opneSokeside}
        alleBehandlinger={alleBehandlinger}
        setBehandling={setBehandling}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  ...bindActionCreators({
    destroyReduxForm: destroy,
  }, dispatch),
});

export default connect<unknown, DispatchProps, OwnProps>(() => ({}), mapDispatchToProps)(BehandlingKlageIndex);
