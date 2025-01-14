import { KyResponse } from 'ky';

import { ApiPollingStatus } from '@navikt/fp-rest-api';
import { Behandling } from '@navikt/fp-types';

import { doGetRequest } from '../fagsakApi';

//TODO (TOR) Vurder å bruke Websocket i staden for denne pollemekanismen.

type PollingPendingFn = (isPending: boolean) => void;

const MAX_POLLING_ATTEMPTS = 1800;
const HTTP_ACCEPTED = 202;

type PollingResponse = {
  status: ApiPollingStatus;
  message: string;
  pollIntervalMillis: number;
  location: string;
  readOnly: string;
  pending: string;
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
    return await pollOgHentData(setPollingPending, location);
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
  return pollingResponse.pending !== undefined && pollingResponse.location !== undefined;
};

const wait = (ms: number) =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });
