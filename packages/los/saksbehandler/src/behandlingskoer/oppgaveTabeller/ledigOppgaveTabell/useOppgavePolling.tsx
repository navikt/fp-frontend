import { useEffect, useRef, useState } from 'react';

import { useMutation } from '@tanstack/react-query';

import type { PollingResponse, PollingStatus } from '@navikt/fp-types';

import { doGetRequest, getOppgaverTilBehandling } from '../../../data/fplosSaksbehandlerApi';
import type { Oppgave } from '../../../typer/oppgaveTsType';

const EMPTY_ARRAY = new Array<Oppgave>();
const HTTP_ACCEPTED = 202;
const MAX_POLLING_ATTEMPTS = 1800;
const MAX_POLLING_REACHED = 'MAX_POLLING';
const MAX_POLLING_INTERVAL = 1000 * 60 * 5;

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
    const interval = calculatePollingInterval(pollIntervalMillis, pollingCounter);

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
  const [oppgaverTilBehandling, setOppgaverTilBehandling] = useState<Oppgave[]>(EMPTY_ARRAY);
  const [nyeBehandlinger, setNyeBehandlinger] = useState<Oppgave[]>(EMPTY_ARRAY);

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
  });

  useEffect(() => {
    void pollEtterOppgaver({ oppgaveIder: undefined });
  }, []);

  useEffect(() => {
    if (isSuccess) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOppgaverTilBehandling(tilBehandling);
      if (oppgaverTilBehandling.length > 0) {
        setNyeBehandlinger(tilBehandling.filter(o => !oppgaverTilBehandling.some(ob => ob.id === o.id)));
      }

      void pollEtterOppgaver({ oppgaveIder: tilBehandling.map(o => o.id).join(',') });
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
    nyeBehandlinger,
    isMaxPollingAttemptsReached: tilBehandlingError?.message === MAX_POLLING_REACHED,
  };
};

const calculatePollingInterval = (pollIntervalMillis: number | undefined, pollingCounter: number): number => {
  if (!pollIntervalMillis) {
    return MAX_POLLING_INTERVAL;
  }
  return pollingCounter < 30 ? pollIntervalMillis : pollIntervalMillis + (pollingCounter - 30) * pollIntervalMillis;
};

const wait = (ms: number) =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

const isPollingResponse = (response: PollingResponse | Oppgave[]): response is PollingResponse => {
  return (
    !Array.isArray(response) &&
    ['PENDING', 'COMPLETE', 'DELAYED', 'CANCELLED', 'HALTED'].includes(response.status as PollingStatus)
  );
};
