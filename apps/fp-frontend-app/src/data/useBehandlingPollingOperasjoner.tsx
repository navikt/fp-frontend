import { useMutation } from '@tanstack/react-query';
import { KyResponse } from 'ky';

import { AsyncPollingStatus, EventType } from '@navikt/fp-rest-api';
import { useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';
import { Behandling } from '@navikt/fp-types';

import { AksjonspunktArgs, OverstyrteAksjonspunktArgs, useBehandlingApi } from './behandlingApi';
import { doGetRequest } from './fagsakApi';

//TODO (TOR) Vurder å bruke Websocket i staden for denne pollemekanismen.

const HTTP_ACCEPTED = 202;
const MAX_POLLING_ATTEMPTS = 1800;
const MAX_POLLING_REACHED = 'MAX_POLLING';

type PollingResponse = {
  status: AsyncPollingStatus;
  message: string;
  pollIntervalMillis: number;
  location: string;
  readOnly: string;
  pending: string;
};

export const useBehandlingPollingOperasjoner = (
  behandling: Behandling,
  onSuccess: (behandling: Behandling) => void,
) => {
  const { addErrorMessage } = useRestApiErrorDispatcher();
  const { pollForResponse: api } = useBehandlingApi(behandling);
  const onError = getOnError(addErrorMessage);

  const { mutate: opprettVerge } = useMutation({
    mutationFn: async () => {
      const response = await api.opprettVerge({
        behandlingUuid: behandling.uuid,
        behandlingVersjon: behandling.versjon,
      });
      return doPolling(response);
    },
    onSuccess,
    onError,
  });

  const { mutate: fjernVerge } = useMutation({
    mutationFn: async () => {
      const response = await api.fjernVerge({ behandlingUuid: behandling.uuid, behandlingVersjon: behandling.versjon });
      return doPolling(response);
    },
    onSuccess,
    onError,
  });

  const { mutateAsync: lagreAksjonspunkter } = useMutation({
    mutationFn: async (values: AksjonspunktArgs) => {
      const response = await api.lagreAksjonspunkt(values);
      return doPolling(response);
    },
    onSuccess,
    onError,
  });

  const { mutateAsync: lagreOverstyrteAksjonspunkter } = useMutation({
    mutationFn: async (values: OverstyrteAksjonspunktArgs) => {
      const response = await api.lagreOverstyrtAksjonspunkt(values);
      return doPolling(response);
    },
    onSuccess,
    onError,
  });

  const { mutate: åpneForEndringer } = useMutation({
    mutationFn: async () => {
      const response = await api.åpneBehandlingForEndring(behandling.uuid, behandling.versjon);
      return doPolling(response);
    },
    onSuccess,
    onError,
  });

  const { mutate: gjenopptaBehandling } = useMutation({
    mutationFn: async () => {
      const response = await api.gjenopptaBehandling({
        behandlingUuid: behandling.uuid,
        behandlingVersjon: behandling.versjon,
      });
      return doPolling(response);
    },
    onSuccess,
    onError,
  });

  return {
    lagreAksjonspunkter,
    lagreOverstyrteAksjonspunkter,
    opprettVerge,
    fjernVerge,
    åpneForEndringer,
    gjenopptaBehandling,
  };
};

export const doPolling = async <T,>(response: KyResponse<T>) => {
  if (response.status === HTTP_ACCEPTED) {
    const location = response.headers.get('location');
    if (location === null) {
      throw new Error('Location i response er ikke angitt');
    }
    return await pollOgHentData(location);
  }
  throw new Error('Responderte ikke med 202 - Accepted');
};

const pollOgHentData = async (location: string, pollingCounter = 0) => {
  const response = await doGetRequest<PollingResponse | Behandling>(location);

  if (isPollingResponse(response)) {
    if (pollingCounter === MAX_POLLING_ATTEMPTS) {
      throw new Error(MAX_POLLING_REACHED);
    }
    const { pollIntervalMillis } = response;
    const interval =
      pollingCounter < 30 ? pollIntervalMillis : pollIntervalMillis + (pollingCounter - 30) * pollIntervalMillis;
    await wait(interval);

    return await pollOgHentData(location, pollingCounter + 1);
  }
  return response;
};

export const isPollingResponse = (response: PollingResponse | Behandling): response is PollingResponse => {
  const pollingResponse = response as PollingResponse;
  return pollingResponse.pending !== undefined && pollingResponse.location !== undefined;
};

const wait = (ms: number) =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

const getOnError = (addErrorMessage: (data: any) => void) => (error: Error) => {
  addErrorMessage({ type: EventType.REQUEST_ERROR, feilmelding: error?.message });
};
