import {
  useEffect, useState, useCallback, useMemo,
} from 'react';
import { Behandling } from '@navikt/ft-types';
import { usePrevious } from '@navikt/ft-ui-komponenter';

import { RestApiHooks, useRestApiErrorDispatcher } from '@fpsak-frontend/rest-api-hooks';
import { RequestApi } from '@fpsak-frontend/rest-api';

import { BehandlingEventHandler } from '../typer/standardBehandlingProps';
import { BehandlingFellesApiKeys } from '../data/behandlingFellesApi';

export type NyBehandlendeEnhetParams = {
  behandlingUuid: string;
  enhetNavn: string;
  enhetId: string;
  begrunnelse: string;
  behandlingVersjon: string;
}

export const useInitRequestApi = (
  requestApi: RequestApi,
  setRequestPendingMessage: (message?: string) => void,
): void => {
  const { addErrorMessage } = useRestApiErrorDispatcher();

  useEffect(() => {
    requestApi.setRequestPendingHandler(setRequestPendingMessage);
    requestApi.setAddErrorMessageHandler(addErrorMessage);
  }, []);
};

const useSetBehandlingVedEndring = (
  setBehandling: (behandling: Behandling) => void,
  behandling?: Behandling,
): void => {
  useEffect(() => {
    if (behandling) {
      setBehandling(behandling);
    }
  }, [behandling]);
};

const useOppdaterFagsak = (
  oppdaterBehandlingVersjon?: (versjon: number) => void,
  behandling?: Behandling,
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
  requestApi: RequestApi,
  behandlingUuid: string,
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
  const { startRequest: hentBehandling, data: behandlingRes, state: behandlingState } = useRestApiRunner(BehandlingFellesApiKeys.BEHANDLING);
  useSetBehandlingVedEndring(setBehandling, behandlingRes);

  const hentBehandlingInklId = useCallback((keepData: boolean) => hentBehandling({ behandlingUuid }, keepData), []);

  useEffect(() => {
    hentBehandlingInklId(false);
  }, []);

  useOppdaterFagsak(oppdaterBehandlingVersjon, behandling);

  return {
    behandling,
    behandlingState,
    setBehandling,
    hentBehandling: hentBehandlingInklId,
    toggleOppdateringAvFagsakOgBehandling,
  };
};

export const useLagreAksjonspunkt = (
  requestApi: RequestApi,
  setBehandling: (behandling: Behandling) => void,
) => {
  const { useRestApiRunner } = useMemo(() => RestApiHooks.initHooks(requestApi), [requestApi]);

  const { startRequest: lagreAksjonspunkter, data: apBehandlingRes } = useRestApiRunner(BehandlingFellesApiKeys.SAVE_AKSJONSPUNKT);
  useSetBehandlingVedEndring(setBehandling, apBehandlingRes);

  const {
    startRequest: lagreOverstyrteAksjonspunkter,
    data: apOverstyrtBehandlingRes,
  } = useRestApiRunner(BehandlingFellesApiKeys.SAVE_OVERSTYRT_AKSJONSPUNKT);
  useSetBehandlingVedEndring(setBehandling, apOverstyrtBehandlingRes);

  return {
    lagreAksjonspunkter,
    lagreOverstyrteAksjonspunkter,
  };
};

const leggTilBehandlingIdentifikator = (behandling: Behandling, params: any) => ({
  ...params,
  behandlingUuid: behandling.uuid,
  behandlingVersjon: behandling.versjon,
});

export const useInitBehandlingHandlinger = (
  requestApi: RequestApi,
  behandlingEventHandler: BehandlingEventHandler,
  hentBehandling: (keepData: boolean) => Promise<Behandling | undefined>,
  setBehandling: (behandling: Behandling) => void,
  behandling?: Behandling,
): boolean => {
  const { useRestApiRunner } = useMemo(() => RestApiHooks.initHooks(requestApi), [requestApi]);

  const [harSattPåVent, settPåVent] = useState(false);

  const { startRequest: nyBehandlendeEnhet } = useRestApiRunner<void, NyBehandlendeEnhetParams>(BehandlingFellesApiKeys.BEHANDLING_NY_BEHANDLENDE_ENHET);
  const { startRequest: settBehandlingPaVent } = useRestApiRunner<void,
    { behandlingUuid: string, behandlingVersjon: number, frist: string, ventearsak: string }>(BehandlingFellesApiKeys.BEHANDLING_ON_HOLD);
  const { startRequest: taBehandlingAvVent } = useRestApiRunner<Behandling,
    { behandlingUuid: string, behandlingVersjon: number }>(BehandlingFellesApiKeys.RESUME_BEHANDLING);
  const { startRequest: henleggBehandling } = useRestApiRunner<void,
    { behandlingUuid: string, årsakKode: string, begrunnelse: string, behandlingVersjon: string }>(BehandlingFellesApiKeys.HENLEGG_BEHANDLING);
  const { startRequest: opneBehandlingForEndringer } = useRestApiRunner<Behandling,
    { behandlingUuid: string, behandlingVersjon: number }>(BehandlingFellesApiKeys.OPEN_BEHANDLING_FOR_CHANGES);
  const { startRequest: opprettVerge } = useRestApiRunner<Behandling, any>(BehandlingFellesApiKeys.VERGE_OPPRETT);
  const { startRequest: fjernVerge } = useRestApiRunner<Behandling, any>(BehandlingFellesApiKeys.VERGE_FJERN);
  const { startRequest: lagreRisikoklassifiseringAksjonspunkt } = useRestApiRunner<Behandling, any>(BehandlingFellesApiKeys.SAVE_AKSJONSPUNKT);

  useEffect(() => {
    if (behandling) {
      behandlingEventHandler.setHandler({
        endreBehandlendeEnhet: (params) => nyBehandlendeEnhet(leggTilBehandlingIdentifikator(behandling, params))
          .then(() => hentBehandling(true)),
        settBehandlingPaVent: (params) => settBehandlingPaVent(leggTilBehandlingIdentifikator(behandling, params))
          .then(() => { settPåVent(true); hentBehandling(true); }),
        taBehandlingAvVent: () => taBehandlingAvVent(leggTilBehandlingIdentifikator(behandling, {}))
          .then((behandlingResTaAvVent?: Behandling) => behandlingResTaAvVent && setBehandling(behandlingResTaAvVent)),
        henleggBehandling: (params) => henleggBehandling(leggTilBehandlingIdentifikator(behandling, params)),
        opneBehandlingForEndringer: () => opneBehandlingForEndringer(leggTilBehandlingIdentifikator(behandling, {}))
          .then((behandlingResOpneForEndring?: Behandling) => behandlingResOpneForEndring && setBehandling(behandlingResOpneForEndring)),
        opprettVerge: () => opprettVerge(leggTilBehandlingIdentifikator(behandling, {}))
          .then((behandlingResOpprettVerge?: Behandling) => behandlingResOpprettVerge && setBehandling(behandlingResOpprettVerge)),
        fjernVerge: () => fjernVerge(leggTilBehandlingIdentifikator(behandling, {}))
          .then((behandlingResFjernVerge?: Behandling) => behandlingResFjernVerge && setBehandling(behandlingResFjernVerge)),
        lagreRisikoklassifiseringAksjonspunkt: (params) => lagreRisikoklassifiseringAksjonspunkt(leggTilBehandlingIdentifikator(behandling, params))
          .then((behandlingEtterRisikoAp?: Behandling) => behandlingEtterRisikoAp && setBehandling(behandlingEtterRisikoAp)),
      });
    }
    return () => {
      behandlingEventHandler.clear();
    };
  }, [behandling?.versjon]);
  return harSattPåVent;
};
