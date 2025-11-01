import { useEffect, useRef, useState } from 'react';

import { useMutation } from '@tanstack/react-query';

import { ApiPollingStatus } from '@navikt/fp-konstanter';
import type { Oppgave } from '@navikt/fp-los-felles';

import { doGetRequest, getOppgaverTilBehandling } from '../../../data/fplosSaksbehandlerApi';

//TODO (TOR) Vurder å bruke Websocket i staden for denne pollemekanismen. Alternativt gå spesifikt mot status og resultat-tjenestane

const EMPTY_ARRAY = new Array<Oppgave>();
const HTTP_ACCEPTED = 202;
const MAX_POLLING_ATTEMPTS = 1800;
const MAX_POLLING_REACHED = 'MAX_POLLING';

type PollingResponse = {
  status: ApiPollingStatus;
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

const isPollingResponse = (response: PollingResponse | Oppgave[]): response is PollingResponse => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- [JOHANNES] fiks senere
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
  const [oppgaverTilBehandling, setOppgaverTilBehandling] = useState<Oppgave[]>(EMPTY_ARRAY);
  const [nyeBehandlinger, setNyeBehandlinger] = useState<Oppgave[]>(EMPTY_ARRAY);

  const idRef = useRef(valgtSakslisteId);
  const getSakslisteId = () => idRef.current;

  const { mutateAsync: pollEtterOppgaver, error: tilBehandlingError } = useMutation({
    mutationFn: (values: { oppgaveIder?: string }) =>
      hentOppgaver(valgtSakslisteId, getSakslisteId, values.oppgaveIder),
    onSuccess(tilBehandling = EMPTY_ARRAY) {
      setOppgaverTilBehandling(tilBehandling);
      if (oppgaverTilBehandling.length > 0) {
        setNyeBehandlinger(tilBehandling.filter(o => !oppgaverTilBehandling.some(ob => ob.id === o.id)));
      }

      void pollEtterOppgaver({ oppgaveIder: tilBehandling.map(o => o.id).join(',') });
    },
  });

  useEffect(() => {
    void pollEtterOppgaver({ oppgaveIder: undefined });
  }, []);

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
