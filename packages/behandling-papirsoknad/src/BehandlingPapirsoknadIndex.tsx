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
import {
  KodeverkMedNavn, Aksjonspunkt, Behandling,
} from '@fpsak-frontend/types';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { RestApiState, useRestApiErrorDispatcher } from '@fpsak-frontend/rest-api-hooks';

import RegistrerPapirsoknad from './components/RegistrerPapirsoknad';
import { restApiPapirsoknadHooks, requestPapirsoknadApi, PapirsoknadApiKeys } from './data/papirsoknadApi';

const papirsoknadData = [{ key: PapirsoknadApiKeys.AKSJONSPUNKTER }];

interface DataProps {
  behandling: Behandling;
  aksjonspunkter: Aksjonspunkt[];
}

interface OwnProps {
  behandlingId: number;
  fagsak: FagsakInfo;
  kodeverk: {[key: string]: KodeverkMedNavn[]};
  rettigheter: Rettigheter;
  behandlingEventHandler: {
    setHandler: (events: {[key: string]: (params: any) => Promise<any> }) => void;
    clear: () => void;
  };
  setRequestPendingMessage: (message: string) => void;
}

interface DispatchProps {
  destroyReduxForm: (form: string) => void;
}

const BehandlingPapirsoknadIndex: FunctionComponent<OwnProps & DispatchProps> = ({
  behandlingEventHandler,
  behandlingId,
  destroyReduxForm,
  kodeverk,
  fagsak,
  rettigheter,
  setRequestPendingMessage,
}) => {
  const [behandling, setBehandlingState] = useState<Behandling>();
  const [forrigeBehandling, setForrigeBehandling] = useState<Behandling>();
  const setBehandling = useCallback((nyBehandling) => {
    setForrigeBehandling(behandling);
    setBehandlingState(nyBehandling);
  }, [behandling]);

  const { startRequest: hentBehandling, data: behandlingRes } = restApiPapirsoknadHooks
    .useRestApiRunner<Behandling>(PapirsoknadApiKeys.BEHANDLING_PAPIRSOKNAD);
  useSetBehandlingVedEndring(behandlingRes, setBehandling);

  const { addErrorMessage } = useRestApiErrorDispatcher();

  const { startRequest: nyBehandlendeEnhet } = restApiPapirsoknadHooks.useRestApiRunner(PapirsoknadApiKeys.BEHANDLING_NY_BEHANDLENDE_ENHET);
  const { startRequest: settBehandlingPaVent } = restApiPapirsoknadHooks.useRestApiRunner(PapirsoknadApiKeys.BEHANDLING_ON_HOLD);
  const { startRequest: taBehandlingAvVent } = restApiPapirsoknadHooks.useRestApiRunner<Behandling>(PapirsoknadApiKeys.RESUME_BEHANDLING);
  const { startRequest: henleggBehandling } = restApiPapirsoknadHooks.useRestApiRunner(PapirsoknadApiKeys.HENLEGG_BEHANDLING);
  const { startRequest: settPaVent } = restApiPapirsoknadHooks.useRestApiRunner(PapirsoknadApiKeys.UPDATE_ON_HOLD);

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

    requestPapirsoknadApi.setRequestPendingHandler(setRequestPendingMessage);
    requestPapirsoknadApi.setAddErrorMessageHandler(addErrorMessage);

    hentBehandling({ behandlingId }, false);

    return () => {
      behandlingEventHandler.clear();
      setTimeout(() => {
        if (forrigeBehandling) {
          destroyReduxForm(getBehandlingFormPrefix(behandlingId, forrigeBehandling.versjon));
        }
      }, 1000);
    };
  }, [behandlingId]);

  useEffect(() => {
    if (behandling) {
      requestPapirsoknadApi.resetCache();
      requestPapirsoknadApi.setLinks(behandling.links);
    }
  }, [behandling]);

  const { startRequest: lagreAksjonspunkter, state: aksjonspunktState } = restApiPapirsoknadHooks
    .useRestApiRunner<Behandling>(PapirsoknadApiKeys.SAVE_AKSJONSPUNKT);

  const behandlingVersjon = behandling?.versjon;
  const { data, state } = restApiPapirsoknadHooks.useMultipleRestApi<DataProps>(papirsoknadData,
    { keepData: true, updateTriggers: [behandlingVersjon], suspendRequest: !behandling });

  if (!behandling) {
    return <LoadingPanel />;
  }

  const hasNotFinished = state === RestApiState.LOADING || state === RestApiState.NOT_STARTED;
  if (hasNotFinished && data === undefined) {
    return <LoadingPanel />;
  }

  return (
    <>
      <ReduxFormStateCleaner
        behandlingId={behandling.id}
        behandlingVersjon={hasNotFinished ? forrigeBehandling.versjon : behandling.versjon}
      />
      <RegistrerPapirsoknad
        behandling={hasNotFinished ? forrigeBehandling : behandling}
        aksjonspunkter={data.aksjonspunkter}
        fagsak={fagsak}
        kodeverk={kodeverk}
        rettigheter={rettigheter}
        settPaVent={settPaVent}
        hentBehandling={hentBehandling}
        lagreAksjonspunkt={lagreAksjonspunkter}
        erAksjonspunktLagret={aksjonspunktState === RestApiState.SUCCESS || aksjonspunktState === RestApiState.ERROR}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  ...bindActionCreators({
    destroyReduxForm: destroy,
  }, dispatch),
});

export default connect<unknown, DispatchProps, OwnProps>(() => ({}), mapDispatchToProps)(BehandlingPapirsoknadIndex);
