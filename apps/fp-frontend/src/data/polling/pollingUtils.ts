import { HTTPError, type KyResponse } from 'ky';

import { ApiPollingStatus } from '@navikt/fp-konstanter';
import type { Behandling } from '@navikt/fp-types';
import { ErrorType, useRestApiErrorDispatcher } from '@navikt/fp-utils';

import { doGetRequest } from '../fagsakApi';

//TODO (TOR) Vurder å bruke Websocket i staden for denne pollemekanismen.

type PollingPendingFn = (isPending: boolean) => void;

const MAX_POLLING_ATTEMPTS = 200;
const HTTP_ACCEPTED = 202;

type PollingResponse = {
  status: ApiPollingStatus;
  message: string;
  pollIntervalMillis: number;
  location: string;
  readOnly: string;
  pending: string;
  eta?: string;
};

export class PollingTimeoutError extends Error {
  location: string;

  constructor(location: string) {
    super('MAX_POLLING');
    this.location = location;
  }
}

export const doPolling = async <T>(response: KyResponse<T>, setPollingPending: PollingPendingFn) => {
  if (response.status === HTTP_ACCEPTED) {
    const location = response.headers.get('location');
    if (location === null) {
      throw new Error(`Location i response er ikke angitt for URL: ${response.url}`);
    }

    try {
      return await pollOgHentData(setPollingPending, location);
    } catch (error) {
      if (error instanceof HTTPError) {
        const data = await error.response.json<PollingResponse>();
        if (isPollingDelayedOrHalted(data)) {
          setPollingPending(false);
          //Ikke vent på at behandling blir oppdatert, men hent gammel versjon (som da er read only)
          return await doGetRequest<Behandling>(data.location);
        }
      }
      throw error;
    }
  }

  throw new Error(`Responderte ikke med 202 - Accepted: ${response.url}`);
};

const pollOgHentData = async (setPollingPending: PollingPendingFn, location: string, pollingCounter = 0) => {
  const response = await doGetRequest<PollingResponse | Behandling>(location);

  if (isPollingResponse(response)) {
    if (pollingCounter === MAX_POLLING_ATTEMPTS) {
      setPollingPending(false);
      throw new PollingTimeoutError(location);
    }
    const { pollIntervalMillis } = response;
    const interval =
      pollingCounter < 30 ? pollIntervalMillis : pollIntervalMillis + (pollingCounter - 30) * pollIntervalMillis;

    setPollingPending(true);

    await wait(interval);

    return await pollOgHentData(setPollingPending, location, pollingCounter + 1);
  }

  setPollingPending(false);

  return response;
};

const isPollingResponse = (response: PollingResponse | Behandling): response is PollingResponse => {
  const pollingResponse = response as PollingResponse;
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  return pollingResponse.pending !== undefined && pollingResponse.location !== undefined;
};

const isPollingDelayedOrHalted = (pollingResponse: PollingResponse): boolean => {
  return pollingResponse.status === ApiPollingStatus.DELAYED || pollingResponse.status === ApiPollingStatus.HALTED;
};

const wait = (ms: number) =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

export const useTaskStatusChecker = (setBehandling: (behandling: Behandling) => void) => {
  const { addErrorMessage } = useRestApiErrorDispatcher();

  const onBehandlingSuccess = (behandling: Behandling) => {
    if (behandling.taskStatus?.status === ApiPollingStatus.HALTED) {
      const { message, status } = behandling.taskStatus;
      addErrorMessage({
        type: ErrorType.POLLING_HALTED_OR_DELAYED,
        message,
        status,
      });
    }
    if (behandling.taskStatus?.status === ApiPollingStatus.DELAYED) {
      const { message, status, eta } = behandling.taskStatus;
      addErrorMessage({
        type: ErrorType.POLLING_HALTED_OR_DELAYED,
        message,
        status,
        eta: eta ?? '',
      });
    }

    setBehandling(behandling);
  };

  return { onBehandlingSuccess };
};
