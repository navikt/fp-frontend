import { HTTPError, type KyResponse } from 'ky';

import { ErrorType, useRestApiErrorDispatcher } from '@navikt/fp-app-felles';
import type { Behandling, PollingResponse, PollingStatus } from '@navikt/fp-types';

import { doGetRequest } from '../fagsakApi';

type PollingPendingFn = (isPending: boolean) => void;

const HTTP_ACCEPTED = 202;
const MAX_POLLING_ATTEMPTS = 200;
const MAX_POLLING_INTERVAL = 1000 * 60 * 5;

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
        if (isPollingDelayedOrHalted(data) && data.location) {
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
    const interval = calculatePollingInterval(pollIntervalMillis, pollingCounter);

    setPollingPending(true);

    await wait(interval);

    return await pollOgHentData(setPollingPending, location, pollingCounter + 1);
  }

  setPollingPending(false);

  return response;
};

export const useTaskStatusChecker = (setBehandling: (behandling: Behandling) => void) => {
  const { addErrorMessage } = useRestApiErrorDispatcher();

  const onBehandlingSuccess = (behandling: Behandling) => {
    if (behandling.taskStatus?.status === 'HALTED') {
      const { message, status } = behandling.taskStatus;
      addErrorMessage({
        type: ErrorType.POLLING_HALTED_OR_DELAYED,
        message,
        status,
      });
    }
    if (behandling.taskStatus?.status === 'DELAYED') {
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

const calculatePollingInterval = (pollIntervalMillis: number | undefined, pollingCounter: number): number => {
  if (!pollIntervalMillis) {
    return MAX_POLLING_INTERVAL;
  }
  return pollingCounter < 30 ? pollIntervalMillis : pollIntervalMillis + (pollingCounter - 30) * pollIntervalMillis;
};

const isPollingResponse = (response: PollingResponse | Behandling): response is PollingResponse => {
  return ['PENDING', 'COMPLETE', 'DELAYED', 'CANCELLED', 'HALTED'].includes(response.status as PollingStatus);
};

const isPollingDelayedOrHalted = (pollingResponse: PollingResponse): boolean => {
  return pollingResponse.status === 'DELAYED' || pollingResponse.status === 'HALTED';
};

const wait = (ms: number) =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });
