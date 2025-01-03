import { useMutation } from '@tanstack/react-query';

import { AsyncPollingStatus, EventType } from '@navikt/fp-rest-api';
import { useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';
import { Behandling } from '@navikt/fp-types';

import { doGetRequest, lagNyBehandling, lagNyTilbakekrevingBehandling, NyBehandlingParams } from './fagsakApi';

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

const wait = (ms: number) =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

export const isPollingResponse = (response: PollingResponse | Behandling): response is PollingResponse => {
  return (response as PollingResponse).status !== undefined;
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

const lagBehandling = async (isTilbakekreving: boolean, params: NyBehandlingParams) => {
  const response = isTilbakekreving ? await lagNyTilbakekrevingBehandling(params) : await lagNyBehandling(params);
  if (response.status === HTTP_ACCEPTED) {
    const location = response.headers.get('location');
    if (location === null) {
      throw new Error('Location i response er ikke angitt');
    }
    return await pollOgHentData(location);
  }
  throw new Error('Responderte ikke med 202 - Accepted');
};

export const useLagNyBehandling = (gåTilNyBehandling: (behandling: Behandling) => void) => {
  const { addErrorMessage } = useRestApiErrorDispatcher();

  const { mutate: lagNy } = useMutation({
    mutationFn: (valuesToStore: { isTilbakekreving: boolean; params: NyBehandlingParams }) =>
      lagBehandling(valuesToStore.isTilbakekreving, valuesToStore.params),
    onSuccess: (nyBehandling: Behandling) => {
      gåTilNyBehandling(nyBehandling);
    },
    onError: error => {
      addErrorMessage({ type: EventType.REQUEST_ERROR, feilmelding: error?.message });
    },
  });

  return {
    lagNyBehandling: lagNy,
  };
};
