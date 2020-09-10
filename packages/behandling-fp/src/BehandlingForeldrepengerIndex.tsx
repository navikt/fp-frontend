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
import { Behandling, KodeverkMedNavn } from '@fpsak-frontend/types';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { RestApiState, useRestApiErrorDispatcher } from '@fpsak-frontend/rest-api-hooks';

import ForeldrepengerPaneler from './components/ForeldrepengerPaneler';
import FetchedData from './types/fetchedDataTsType';
import { restApiFpHooks, requestFpApi, FpBehandlingApiKeys } from './data/fpBehandlingApi';

const foreldrepengerData = [
  { key: FpBehandlingApiKeys.AKSJONSPUNKTER },
  { key: FpBehandlingApiKeys.VILKAR },
  { key: FpBehandlingApiKeys.PERSONOPPLYSNINGER },
  { key: FpBehandlingApiKeys.YTELSEFORDELING },
  { key: FpBehandlingApiKeys.SOKNAD },
  { key: FpBehandlingApiKeys.INNTEKT_ARBEID_YTELSE },
  { key: FpBehandlingApiKeys.BEREGNINGRESULTAT_FORELDREPENGER },
  { key: FpBehandlingApiKeys.BEREGNINGSGRUNNLAG },
  { key: FpBehandlingApiKeys.UTTAK_STONADSKONTOER },
  { key: FpBehandlingApiKeys.UTTAKSRESULTAT_PERIODER },
  { key: FpBehandlingApiKeys.SIMULERING_RESULTAT },
];

interface OwnProps {
  behandlingId: number;
  fagsak: FagsakInfo;
  rettigheter: Rettigheter;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  oppdaterBehandlingVersjon: (versjon: number) => void;
  behandlingEventHandler: {
    setHandler: (events: {[key: string]: (params: any) => Promise<any> }) => void;
    clear: () => void;
  };
  opneSokeside: () => void;
  setRequestPendingMessage: (message: string) => void;
  kodeverk?: {[key: string]: KodeverkMedNavn[]};
}

interface DispatchProps {
  destroyReduxForm: (form: string) => void;
}

const BehandlingForeldrepengerIndex: FunctionComponent<OwnProps & DispatchProps> = ({
  behandlingEventHandler,
  behandlingId,
  destroyReduxForm,
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
  const [behandling, setBehandlingState] = useState<Behandling>();
  const [forrigeBehandling, setForrigeBehandling] = useState<Behandling>();
  const setBehandling = useCallback((nyBehandling) => {
    setForrigeBehandling(behandling);
    setBehandlingState(nyBehandling);
  }, [behandling]);

  const { startRequest: hentBehandling, data: behandlingRes, state: behandlingState } = restApiFpHooks
    .useRestApiRunner<Behandling>(FpBehandlingApiKeys.BEHANDLING_FP);
  useSetBehandlingVedEndring(behandlingRes, setBehandling);

  const { addErrorMessage } = useRestApiErrorDispatcher();

  const { startRequest: nyBehandlendeEnhet } = restApiFpHooks.useRestApiRunner(FpBehandlingApiKeys.BEHANDLING_NY_BEHANDLENDE_ENHET);
  const { startRequest: settBehandlingPaVent } = restApiFpHooks.useRestApiRunner(FpBehandlingApiKeys.BEHANDLING_ON_HOLD);
  const { startRequest: taBehandlingAvVent } = restApiFpHooks.useRestApiRunner<Behandling>(FpBehandlingApiKeys.RESUME_BEHANDLING);
  const { startRequest: henleggBehandling } = restApiFpHooks.useRestApiRunner(FpBehandlingApiKeys.HENLEGG_BEHANDLING);
  const { startRequest: settPaVent } = restApiFpHooks.useRestApiRunner(FpBehandlingApiKeys.UPDATE_ON_HOLD);
  const { startRequest: opneBehandlingForEndringer } = restApiFpHooks.useRestApiRunner(FpBehandlingApiKeys.OPEN_BEHANDLING_FOR_CHANGES);
  const { startRequest: opprettVerge } = restApiFpHooks.useRestApiRunner(FpBehandlingApiKeys.VERGE_OPPRETT);
  const { startRequest: fjernVerge } = restApiFpHooks.useRestApiRunner(FpBehandlingApiKeys.VERGE_FJERN);
  const { startRequest: lagreRisikoklassifiseringAksjonspunkt } = restApiFpHooks.useRestApiRunner(FpBehandlingApiKeys.SAVE_AKSJONSPUNKT);

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
      lagreRisikoklassifiseringAksjonspunkt: (params) => lagreRisikoklassifiseringAksjonspunkt(params),
    });

    requestFpApi.setRequestPendingHandler(setRequestPendingMessage);
    requestFpApi.setAddErrorMessageHandler(addErrorMessage);

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
      requestFpApi.resetCache();
      requestFpApi.setLinks(behandling.links);
    }
  }, [behandling]);

  const behandlingVersjon = behandling?.versjon;
  const { data, state } = restApiFpHooks.useMultipleRestApi<FetchedData>(foreldrepengerData,
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
      <ForeldrepengerPaneler
        behandling={state === RestApiState.LOADING ? forrigeBehandling : behandling}
        fetchedData={data}
        fagsak={fagsak}
        alleKodeverk={kodeverk}
        rettigheter={rettigheter}
        valgtProsessSteg={valgtProsessSteg}
        oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
        valgtFaktaSteg={valgtFaktaSteg}
        oppdaterBehandlingVersjon={oppdaterBehandlingVersjon}
        settPaVent={settPaVent}
        hentBehandling={hentBehandling}
        opneSokeside={opneSokeside}
        hasFetchError={behandlingState === RestApiState.ERROR}
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

export default connect<any, DispatchProps, OwnProps>(() => ({}), mapDispatchToProps)(BehandlingForeldrepengerIndex);
