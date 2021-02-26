import React, {
  FunctionComponent, useEffect, useState, useCallback,
} from 'react';

import { LoadingPanel } from '@fpsak-frontend/shared-components';
import {
  Fagsak, Behandling, KodeverkMedNavn, ArbeidsgiverOpplysningerWrapper, Personoversikt,
} from '@fpsak-frontend/types';
import {
  Rettigheter, ReduxFormStateCleaner, useSetBehandlingVedEndring,
} from '@fpsak-frontend/behandling-felles';
import { RestApiState, useRestApiErrorDispatcher } from '@fpsak-frontend/rest-api-hooks';

import { restApiEsHooks, requestEsApi, EsBehandlingApiKeys } from './data/esBehandlingApi';
import EngangsstonadPaneler from './components/EngangsstonadPaneler';
import FetchedData from './types/fetchedDataTsType';

const engansstonadData = [
  { key: EsBehandlingApiKeys.AKSJONSPUNKTER },
  { key: EsBehandlingApiKeys.VILKAR },
  { key: EsBehandlingApiKeys.SOKNAD },
  { key: EsBehandlingApiKeys.INNTEKT_ARBEID_YTELSE },
  { key: EsBehandlingApiKeys.SIMULERING_RESULTAT },
  { key: EsBehandlingApiKeys.BEREGNINGRESULTAT_ENGANGSSTONAD }];

const endepunkterSomSkalHentesEnGang = [
  { key: EsBehandlingApiKeys.ARBEIDSGIVERE_OVERSIKT },
  { key: EsBehandlingApiKeys.BEHANDLING_PERSONOVERSIKT },
];

interface OwnProps {
  behandlingId: number;
  fagsak: Fagsak;
  rettigheter: Rettigheter;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  oppdaterBehandlingVersjon: (versjon: number) => void;
  behandlingEventHandler: {
    setHandler: (events: {[key: string]: (params: any) => Promise<any> }) => void;
    clear: () => void;
  };
  kodeverk?: {[key: string]: KodeverkMedNavn[]};
  opneSokeside: () => void;
  setRequestPendingMessage: (message: string) => void;
}

const BehandlingEngangsstonadIndex: FunctionComponent<OwnProps> = ({
  behandlingEventHandler,
  behandlingId,
  oppdaterBehandlingVersjon,
  kodeverk,
  fagsak,
  rettigheter,
  oppdaterProsessStegOgFaktaPanelIUrl,
  valgtProsessSteg,
  opneSokeside,
  valgtFaktaSteg,
  setRequestPendingMessage,
}) => {
  const [nyOgForrigeBehandling, setBehandlinger] = useState<{ current?: Behandling; previous?: Behandling }>({ current: undefined, previous: undefined });
  const behandling = nyOgForrigeBehandling.current;
  const forrigeBehandling = nyOgForrigeBehandling.previous;

  const setBehandling = useCallback((nyBehandling) => {
    requestEsApi.resetCache();
    requestEsApi.setLinks(nyBehandling.links);
    setBehandlinger((prevState) => ({ current: nyBehandling, previous: prevState.current }));
  }, []);

  const { startRequest: hentBehandling, data: behandlingRes, state: behandlingState } = restApiEsHooks
    .useRestApiRunner<Behandling>(EsBehandlingApiKeys.BEHANDLING_ES);
  useSetBehandlingVedEndring(behandlingRes, setBehandling);

  const { addErrorMessage } = useRestApiErrorDispatcher();

  const { startRequest: nyBehandlendeEnhet } = restApiEsHooks.useRestApiRunner(EsBehandlingApiKeys.BEHANDLING_NY_BEHANDLENDE_ENHET);
  const { startRequest: settBehandlingPaVent } = restApiEsHooks.useRestApiRunner(EsBehandlingApiKeys.BEHANDLING_ON_HOLD);
  const { startRequest: taBehandlingAvVent } = restApiEsHooks.useRestApiRunner<Behandling>(EsBehandlingApiKeys.RESUME_BEHANDLING);
  const { startRequest: henleggBehandling } = restApiEsHooks.useRestApiRunner(EsBehandlingApiKeys.HENLEGG_BEHANDLING);
  const { startRequest: settPaVent } = restApiEsHooks.useRestApiRunner(EsBehandlingApiKeys.UPDATE_ON_HOLD);
  const { startRequest: opneBehandlingForEndringer } = restApiEsHooks.useRestApiRunner(EsBehandlingApiKeys.OPEN_BEHANDLING_FOR_CHANGES);
  const { startRequest: opprettVerge } = restApiEsHooks.useRestApiRunner(EsBehandlingApiKeys.VERGE_OPPRETT);
  const { startRequest: fjernVerge } = restApiEsHooks.useRestApiRunner(EsBehandlingApiKeys.VERGE_FJERN);
  const { startRequest: lagreRisikoklassifiseringAksjonspunkt } = restApiEsHooks.useRestApiRunner(EsBehandlingApiKeys.SAVE_AKSJONSPUNKT);

  useEffect(() => {
    behandlingEventHandler.setHandler({
      endreBehandlendeEnhet: (params) => nyBehandlendeEnhet(params)
        .then(() => hentBehandling({ behandlingId }, true)),
      settBehandlingPaVent: (params) => settBehandlingPaVent(params)
        .then(() => hentBehandling({ behandlingId }, true)),
      taBehandlingAvVent: (params) => taBehandlingAvVent(params)
        .then((behandlingResTaAvVent) => setBehandling(behandlingResTaAvVent)),
      henleggBehandling: (params) => henleggBehandling(params),
      opneBehandlingForEndringer: (params) => opneBehandlingForEndringer(params)
        .then((behandlingResOpneForEndring) => setBehandling(behandlingResOpneForEndring)),
      opprettVerge: (params) => opprettVerge(params)
        .then((behandlingResOpprettVerge) => setBehandling(behandlingResOpprettVerge)),
      fjernVerge: (params) => fjernVerge(params)
        .then((behandlingResFjernVerge) => setBehandling(behandlingResFjernVerge)),
      lagreRisikoklassifiseringAksjonspunkt: (params) => lagreRisikoklassifiseringAksjonspunkt(params)
        .then((behandlingEtterRisikoAp) => setBehandling(behandlingEtterRisikoAp)),
    });

    requestEsApi.setRequestPendingHandler(setRequestPendingMessage);
    requestEsApi.setAddErrorMessageHandler(addErrorMessage);

    hentBehandling({ behandlingId }, false);

    return () => {
      behandlingEventHandler.clear();
    };
  }, []);

  const { data, state } = restApiEsHooks.useMultipleRestApi<FetchedData>(engansstonadData,
    { keepData: true, updateTriggers: [behandling?.versjon], suspendRequest: !behandling });

  const { data: opplysningsdata, state: opplysningsdataState } = restApiEsHooks.useMultipleRestApi<{
    arbeidsgivereOversikt: ArbeidsgiverOpplysningerWrapper,
    behandlingPersonoversikt: Personoversikt,
  }>(endepunkterSomSkalHentesEnGang, {
    updateTriggers: [!behandling],
    suspendRequest: !behandling,
  });

  const harIkkeHentetBehandlingsdata = state === RestApiState.LOADING || state === RestApiState.NOT_STARTED;
  const harIkkeHentetOpplysninger = opplysningsdataState === RestApiState.LOADING || opplysningsdataState === RestApiState.NOT_STARTED;
  if (!behandling || harIkkeHentetOpplysninger || (harIkkeHentetBehandlingsdata && data === undefined)) {
    return <LoadingPanel />;
  }

  return (
    <>
      <ReduxFormStateCleaner
        behandlingId={behandling.id}
        behandlingVersjon={harIkkeHentetBehandlingsdata ? forrigeBehandling.versjon : behandling.versjon}
      />
      <EngangsstonadPaneler
        behandling={harIkkeHentetBehandlingsdata ? forrigeBehandling : behandling}
        fetchedData={data}
        fagsak={fagsak}
        alleKodeverk={kodeverk}
        rettigheter={rettigheter}
        valgtProsessSteg={valgtProsessSteg}
        valgtFaktaSteg={valgtFaktaSteg}
        oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
        oppdaterBehandlingVersjon={oppdaterBehandlingVersjon}
        settPaVent={settPaVent}
        hentBehandling={hentBehandling}
        opneSokeside={opneSokeside}
        hasFetchError={behandlingState === RestApiState.ERROR}
        setBehandling={setBehandling}
        arbeidsgiverOpplysningerPerId={opplysningsdata.arbeidsgivereOversikt.arbeidsgivere}
        personoversikt={opplysningsdata.behandlingPersonoversikt}
      />
    </>
  );
};

export default BehandlingEngangsstonadIndex;
