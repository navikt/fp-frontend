import { useEffect, useState, useCallback } from 'react';

import { Behandling } from '@fpsak-frontend/types';
import { useRestApiErrorDispatcher, RequestRunnerApiData, RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { AbstractRequestApi } from '@fpsak-frontend/rest-api';

import { BehandlingEventHandler } from '../types/standardBehandlingProps';

export const useInitRequestApi = (
  api: AbstractRequestApi,
  setRequestPendingMessage: (message: string) => void,
): void => {
  const { addErrorMessage } = useRestApiErrorDispatcher();

  useEffect(() => {
    api.setRequestPendingHandler(setRequestPendingMessage);
    api.setAddErrorMessageHandler(addErrorMessage);
  }, []);
};

const useSetBehandlingVedEndring = (
  behandling: Behandling,
  setBehandling: (behandling: Behandling) => void,
): void => {
  useEffect(() => {
    if (behandling) {
      setBehandling(behandling);
    }
  }, [behandling]);
};

export const useBehandling = (
  api: AbstractRequestApi,
  useRestApiRunner: <T>(key: string) => RequestRunnerApiData<T>,
  behandlingKey: string,
  behandlingId: number,
): {
  behandling: Behandling;
  behandlingState: RestApiState;
  setBehandling: (behandling: Behandling) => void;
  hentBehandling: (keepData: boolean
) => Promise<Behandling>;
} => {
  const [behandling, setNyBehandling] = useState<Behandling>();

  const setBehandling = useCallback((nyBehandling) => {
    api.resetCache();
    api.setLinks(nyBehandling.links);
    setNyBehandling(nyBehandling);
  }, []);

  const { startRequest: hentBehandling, data: behandlingRes, state: behandlingState } = useRestApiRunner<Behandling>(behandlingKey);
  useSetBehandlingVedEndring(behandlingRes, setBehandling);

  const hentBehandlingInklId = useCallback((keepData: boolean) => hentBehandling({ behandlingId }, keepData), []);

  useEffect(() => {
    hentBehandlingInklId(false);
  }, []);

  return {
    behandling,
    behandlingState,
    setBehandling,
    hentBehandling: hentBehandlingInklId,
  };
};

export const useLagreAksjonspunkt = (
  useRestApiRunner: <T>(key: string) => RequestRunnerApiData<T>,
  keys: Record<string, string>,
  setBehandling: (behandling: Behandling) => void,
): {
  lagreAksjonspunkter: (params: any, keepData?: boolean) => Promise<any>,
  lagreOverstyrteAksjonspunkter: (params: any, keepData?: boolean
) => Promise<any>,
} => {
  const { startRequest: lagreAksjonspunkter, data: apBehandlingRes } = useRestApiRunner<Behandling>(keys.SAVE_AKSJONSPUNKT);
  useSetBehandlingVedEndring(apBehandlingRes, setBehandling);

  const { startRequest: lagreOverstyrteAksjonspunkter, data: apOverstyrtBehandlingRes } = useRestApiRunner<Behandling>(keys.SAVE_OVERSTYRT_AKSJONSPUNKT);
  useSetBehandlingVedEndring(apOverstyrtBehandlingRes, setBehandling);

  return {
    lagreAksjonspunkter,
    lagreOverstyrteAksjonspunkter,
  };
};

export const useInitBehandlingHandlinger = (
  useRestApiRunner: <T>(key: string) => RequestRunnerApiData<T>,
  keys: Record<string, string>,
  behandlingEventHandler: BehandlingEventHandler,
  hentBehandling: (keepData: boolean) => Promise<Behandling>,
  setBehandling: (behandling: Behandling) => void,
): void => {
  const { startRequest: nyBehandlendeEnhet } = useRestApiRunner(keys.BEHANDLING_NY_BEHANDLENDE_ENHET);
  const { startRequest: settBehandlingPaVent } = useRestApiRunner(keys.BEHANDLING_ON_HOLD);
  const { startRequest: taBehandlingAvVent } = useRestApiRunner<Behandling>(keys.RESUME_BEHANDLING);
  const { startRequest: henleggBehandling } = useRestApiRunner(keys.HENLEGG_BEHANDLING);
  const { startRequest: opneBehandlingForEndringer } = useRestApiRunner<Behandling>(keys.OPEN_BEHANDLING_FOR_CHANGES);
  const { startRequest: opprettVerge } = useRestApiRunner<Behandling>(keys.VERGE_OPPRETT);
  const { startRequest: fjernVerge } = useRestApiRunner<Behandling>(keys.VERGE_FJERN);
  const { startRequest: lagreRisikoklassifiseringAksjonspunkt } = useRestApiRunner<Behandling>(keys.SAVE_AKSJONSPUNKT);

  useEffect(() => {
    behandlingEventHandler.setHandler({
      endreBehandlendeEnhet: (params) => nyBehandlendeEnhet(params)
        .then(() => hentBehandling(true)),
      settBehandlingPaVent: (params) => settBehandlingPaVent(params)
        .then(() => hentBehandling(true)),
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

    return () => {
      behandlingEventHandler.clear();
    };
  }, []);
};
