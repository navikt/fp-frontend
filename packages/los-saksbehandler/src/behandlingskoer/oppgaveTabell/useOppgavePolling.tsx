import { useEffect, useRef, useState } from 'react';

import { useMutation, useQuery } from '@tanstack/react-query';

import { Oppgave } from '@navikt/fp-los-felles';
import { AsyncPollingStatus, EventType } from '@navikt/fp-rest-api';
import { useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';

import { doGetRequest, getOppgaverTilBehandling, reserverteOppgaverOptions } from '../../data/fplosSaksbehandlerApi';

//TODO (TOR) Vurder å bruke Websocket i staden for denne pollemekanismen. Alternativt gå spesifikt mot status og resultat-tjenestane

const EMPTY_ARRAY = new Array<Oppgave>();
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

export const isPollingResponse = (response: PollingResponse | Oppgave[]): response is PollingResponse => {
  return (response as PollingResponse).status !== undefined;
};

const pollOgHentData = async (
  valgtSakslisteId: number,
  location: string,
  getSakslisteId: () => number,
  pollingCounter = 0,
) => {
  const response = await doGetRequest<PollingResponse | Oppgave[]>(location);
  if (getSakslisteId() !== valgtSakslisteId) {
    return [];
  }

  if (isPollingResponse(response)) {
    if (pollingCounter === MAX_POLLING_ATTEMPTS) {
      throw new Error(MAX_POLLING_REACHED);
    }
    const { pollIntervalMillis } = response;
    const interval =
      pollingCounter < 30 ? pollIntervalMillis : pollIntervalMillis + (pollingCounter - 30) * pollIntervalMillis;
    await wait(interval);

    return await pollOgHentData(valgtSakslisteId, location, getSakslisteId, pollingCounter + 1);
  }
  return response;
};

const hentOppgaver = async (valgtSakslisteId: number, getSakslisteId: () => number, oppgaveIder?: string) => {
  const response = await getOppgaverTilBehandling(valgtSakslisteId, oppgaveIder);
  if (response.status === HTTP_ACCEPTED) {
    const location = response.headers.get('location');
    if (location === null) {
      throw new Error('Location i response er ikke angitt');
    }
    return await pollOgHentData(valgtSakslisteId, location, getSakslisteId);
  }
  throw new Error('Responderte ikke med 202 - Accepted');
};

export const useOppgavePolling = (valgtSakslisteId: number) => {
  const { addErrorMessage } = useRestApiErrorDispatcher();
  const [oppgaverTilBehandling, setOppgaverTilBehandling] = useState<Oppgave[]>(EMPTY_ARRAY);

  const idRef = useRef(valgtSakslisteId);
  const getSakslisteId = () => idRef.current;

  const {
    mutateAsync: pollEtterOppgaver,
    data: tilBehandling = EMPTY_ARRAY,
    isSuccess,
    error: tilBehandlingError,
  } = useMutation({
    mutationFn: (values: { oppgaveIder?: string }) =>
      hentOppgaver(valgtSakslisteId, getSakslisteId, values.oppgaveIder),
    onError: error => {
      if (error.message !== MAX_POLLING_REACHED) {
        addErrorMessage({ type: EventType.REQUEST_ERROR, feilmelding: error?.message });
      }
    },
  });

  const { data: reserverteOppgaver, refetch } = useQuery({
    ...reserverteOppgaverOptions(),
  });

  useEffect(() => {
    pollEtterOppgaver({ oppgaveIder: undefined });
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setOppgaverTilBehandling(tilBehandling);
      pollEtterOppgaver({ oppgaveIder: tilBehandling.map(o => o.id).join(',') });
      refetch();
    }
  }, [isSuccess]);

  useEffect(() => {
    // For å stoppe polling på den gamle saksid'en
    idRef.current = valgtSakslisteId;
    return () => {
      //For å stoppe polling når en går til andre sider
      idRef.current = 0;
    };
  }, [valgtSakslisteId]);

  return {
    oppgaverTilBehandling,
    reserverteOppgaver,
    isMaxPollingAttemptsReached: tilBehandlingError?.message === MAX_POLLING_REACHED,
  };
};
