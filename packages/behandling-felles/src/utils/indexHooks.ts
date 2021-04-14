import {
  useEffect, useState, useCallback, useMemo,
} from 'react';

import { Behandling, Kodeverk } from '@fpsak-frontend/types';
import { RestApiHooks, useRestApiErrorDispatcher } from '@fpsak-frontend/rest-api-hooks';
import { AbstractRequestApi, RestKey } from '@fpsak-frontend/rest-api';
import { usePrevious } from '@fpsak-frontend/shared-components';

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

const useOppdaterFagsak = (
  behandling: Behandling,
  oppdaterBehandlingVersjon?: (versjon: number) => void,
): void => {
  const previousBehandling = usePrevious(behandling);
  useEffect(() => {
    if (oppdaterBehandlingVersjon
        && behandling && previousBehandling && behandling.versjon !== previousBehandling?.versjon) {
      oppdaterBehandlingVersjon(behandling.versjon);
    }
  }, [behandling?.versjon]);
};

export const useBehandling = (
  requestApi: AbstractRequestApi,
  behandlingKey: RestKey<Behandling, { behandlingId: number }>,
  behandlingId: number,
  oppdaterBehandlingVersjon?: (versjon: number) => void,
) => {
  const [behandling, setNyBehandling] = useState<Behandling>();
  const [skalOppdatereFagsakOgBehandling, toggleOppdateringAvFagsakOgBehandling] = useState(true);

  const setBehandling = useCallback((nyBehandling) => {
    if (skalOppdatereFagsakOgBehandling) {
      requestApi.resetCache();
      requestApi.setLinks(nyBehandling.links);
      setNyBehandling(nyBehandling);
    }
  }, [skalOppdatereFagsakOgBehandling]);

  const { useRestApiRunner } = useMemo(() => RestApiHooks.initHooks(requestApi), [requestApi]);
  const { startRequest: hentBehandling, data: behandlingRes, state: behandlingState } = useRestApiRunner(behandlingKey);
  useSetBehandlingVedEndring(behandlingRes, setBehandling);

  const hentBehandlingInklId = useCallback((keepData: boolean) => hentBehandling({ behandlingId }, keepData), []);

  useEffect(() => {
    hentBehandlingInklId(false);
  }, []);

  useOppdaterFagsak(behandling, oppdaterBehandlingVersjon);

  return {
    behandling,
    behandlingState,
    setBehandling,
    hentBehandling: hentBehandlingInklId,
    toggleOppdateringAvFagsakOgBehandling,
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
