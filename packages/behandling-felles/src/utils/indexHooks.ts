import {
  useEffect, useState, useCallback, useMemo,
} from 'react';

import { Behandling, Kodeverk } from '@fpsak-frontend/types';
import { RestApiHooks, useRestApiErrorDispatcher, RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { AbstractRequestApi, RestKey } from '@fpsak-frontend/rest-api';

import { BehandlingEventHandler } from '../types/standardBehandlingProps';

export type NyBehandlendeEnhetParams = {
  behandlingId: number;
  enhetNavn: string;
  enhetId: string;
  begrunnelse: string;
  behandlingVersjon: string;
}

export const useInitRequestApi = (
  requestApi: AbstractRequestApi,
  setRequestPendingMessage: (message: string) => void,
): void => {
  const { addErrorMessage } = useRestApiErrorDispatcher();

  useEffect(() => {
    requestApi.setRequestPendingHandler(setRequestPendingMessage);
    requestApi.setAddErrorMessageHandler(addErrorMessage);
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
  requestApi: AbstractRequestApi,
  behandlingKey: RestKey<Behandling, { behandlingId: number }>,
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
    requestApi.resetCache();
    requestApi.setLinks(nyBehandling.links);
    setNyBehandling(nyBehandling);
  }, []);

  const { useRestApiRunner } = useMemo(() => RestApiHooks.initHooks(requestApi), [requestApi]);
  const { startRequest: hentBehandling, data: behandlingRes, state: behandlingState } = useRestApiRunner(behandlingKey);
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
  requestApi: AbstractRequestApi,
  setBehandling: (behandling: Behandling) => void,
  lagreAksjonspunktKey: RestKey<Behandling, any>,
  lagreOverstyrtyAksjonspunktKey?: RestKey<Behandling, any>,
) => {
  const { useRestApiRunner } = useMemo(() => RestApiHooks.initHooks(requestApi), [requestApi]);

  const { startRequest: lagreAksjonspunkter, data: apBehandlingRes } = useRestApiRunner(lagreAksjonspunktKey);
  useSetBehandlingVedEndring(apBehandlingRes, setBehandling);

  const { startRequest: lagreOverstyrteAksjonspunkter, data: apOverstyrtBehandlingRes } = useRestApiRunner(lagreOverstyrtyAksjonspunktKey);
  useSetBehandlingVedEndring(apOverstyrtBehandlingRes, setBehandling);

  return {
    lagreAksjonspunkter,
    lagreOverstyrteAksjonspunkter,
  };
};

export const useInitBehandlingHandlinger = (
  requestApi: AbstractRequestApi,
  keys: Record<string, RestKey<any, any>>,
  behandlingEventHandler: BehandlingEventHandler,
  hentBehandling: (keepData: boolean) => Promise<Behandling>,
  setBehandling: (behandling: Behandling) => void,
): void => {
  const { useRestApiRunner } = useMemo(() => RestApiHooks.initHooks(requestApi), [requestApi]);

  const { startRequest: nyBehandlendeEnhet } = useRestApiRunner<void, NyBehandlendeEnhetParams>(keys.BEHANDLING_NY_BEHANDLENDE_ENHET);
  const { startRequest: settBehandlingPaVent } = useRestApiRunner<void,
    { behandlingId: number, behandlingVersjon: number, frist: string, ventearsak: Kodeverk }>(keys.BEHANDLING_ON_HOLD);
  const { startRequest: taBehandlingAvVent } = useRestApiRunner<Behandling, { behandlingId: number, behandlingVersjon: number }>(keys.RESUME_BEHANDLING);
  const { startRequest: henleggBehandling } = useRestApiRunner<void,
    { behandlingId: number, årsakKode: string, begrunnelse: string, behandlingVersjon: string }>(keys.HENLEGG_BEHANDLING);
  const { startRequest: opneBehandlingForEndringer } = useRestApiRunner<Behandling,
    { behandlingId: number, behandlingVersjon: number }>(keys.OPEN_BEHANDLING_FOR_CHANGES);
  const { startRequest: opprettVerge } = useRestApiRunner<Behandling, any>(keys.VERGE_OPPRETT);
  const { startRequest: fjernVerge } = useRestApiRunner<Behandling, any>(keys.VERGE_FJERN);
  const { startRequest: lagreRisikoklassifiseringAksjonspunkt } = useRestApiRunner<Behandling, any>(keys.SAVE_AKSJONSPUNKT);

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
