import React, {
  FunctionComponent, useEffect, useRef, useState,
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { destroy } from 'redux-form';

import { getBehandlingFormPrefix } from '@fpsak-frontend/form';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { FagsakInfo, Rettigheter, ReduxFormStateCleaner } from '@fpsak-frontend/behandling-felles';
import { Behandling, Kodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import AnkePaneler from './components/AnkePaneler';
import FetchedData from './types/fetchedDataTsType';
import { restApiAnkeHooks, requestAnkeApi, AnkeBehandlingApiKeys as AnkeBehandlingApiKeysNew } from './data/ankeBehandlingApi';

const ankeData = [{ key: AnkeBehandlingApiKeysNew.AKSJONSPUNKTER }, { key: AnkeBehandlingApiKeysNew.VILKAR }, { key: AnkeBehandlingApiKeysNew.ANKE_VURDERING }];

interface OwnProps {
  behandlingId: number;
  fagsak: FagsakInfo;
  rettigheter: Rettigheter;
  kodeverk: {[key: string]: KodeverkMedNavn[]};
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
    type: Kodeverk;
    avsluttet?: string;
  }[];
  setRequestPendingMessage: (message: string) => void;
}

interface DispatchProps {
  destroyReduxForm: (form: string) => void;
}

type Props = OwnProps & DispatchProps;

const BehandlingAnkeIndex: FunctionComponent<Props> = ({
  behandlingEventHandler,
  behandlingId,
  oppdaterBehandlingVersjon,
  kodeverk,
  fagsak,
  rettigheter,
  oppdaterProsessStegOgFaktaPanelIUrl,
  valgtProsessSteg,
  opneSokeside,
  alleBehandlinger,
  setRequestPendingMessage,
  destroyReduxForm,
}) => {
  const forrigeBehandling = useRef<Behandling>();

  const [behandling, setBehandling] = useState<Behandling>();

  const { startRequest: hentBehandling, data: behandlingRes } = restApiAnkeHooks
    .useRestApiRunner<Behandling>(AnkeBehandlingApiKeysNew.BEHANDLING_ANKE);
  useEffect(() => {
    setBehandling(behandlingRes);
  }, [behandlingRes]);

  const { startRequest: nyBehandlendeEnhet } = restApiAnkeHooks.useRestApiRunner(AnkeBehandlingApiKeysNew.BEHANDLING_NY_BEHANDLENDE_ENHET);
  const { startRequest: settBehandlingPaVent } = restApiAnkeHooks.useRestApiRunner(AnkeBehandlingApiKeysNew.BEHANDLING_ON_HOLD);
  const { startRequest: taBehandlingAvVent } = restApiAnkeHooks.useRestApiRunner<Behandling>(AnkeBehandlingApiKeysNew.RESUME_BEHANDLING);
  const { startRequest: henleggBehandling } = restApiAnkeHooks.useRestApiRunner(AnkeBehandlingApiKeysNew.HENLEGG_BEHANDLING);
  const { startRequest: settPaVent } = restApiAnkeHooks.useRestApiRunner(AnkeBehandlingApiKeysNew.UPDATE_ON_HOLD);

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

    hentBehandling({ behandlingId }, false);

    return () => {
      behandlingEventHandler.clear();
      setTimeout(() => {
        destroyReduxForm(getBehandlingFormPrefix(behandlingId, forrigeBehandling.current.versjon));
      }, 1000);
    };
  }, [behandlingId]);

  if (behandling) {
    requestAnkeApi.injectPaths(behandling.links);
    requestAnkeApi.setRequestPendingHandler(setRequestPendingMessage);
  }

  const { data, state } = restApiAnkeHooks.useMultipleRestApi<FetchedData>(ankeData,
    { keepData: true, updateTriggers: [behandling?.versjon], suspendRequest: !behandling });

  if (!behandling) {
    return <LoadingPanel />;
  }

  forrigeBehandling.current = behandling;

  if ((state === RestApiState.LOADING || state === RestApiState.NOT_STARTED) && data === undefined) {
    return <LoadingPanel />;
  }

  return (
    <>
      <ReduxFormStateCleaner
        behandlingId={behandling.id}
        behandlingVersjon={state === RestApiState.LOADING
          ? forrigeBehandling.current.versjon : behandling.versjon}
      />
      <AnkePaneler
        behandling={state === RestApiState.LOADING ? forrigeBehandling.current : behandling}
        fetchedData={data}
        fagsak={fagsak}
        rettigheter={rettigheter}
        alleKodeverk={kodeverk}
        valgtProsessSteg={valgtProsessSteg}
        oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
        oppdaterBehandlingVersjon={oppdaterBehandlingVersjon}
        settPaVent={settPaVent}
        hentBehandling={hentBehandling}
        setBehandling={setBehandling}
        opneSokeside={opneSokeside}
        alleBehandlinger={alleBehandlinger}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  ...bindActionCreators({
    destroyReduxForm: destroy,
  }, dispatch),
});

export default connect<any, DispatchProps, OwnProps>(() => ({}), mapDispatchToProps)(BehandlingAnkeIndex);
