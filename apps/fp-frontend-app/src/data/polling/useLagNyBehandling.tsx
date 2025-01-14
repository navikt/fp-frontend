import { useMutation } from '@tanstack/react-query';

import { Behandling } from '@navikt/fp-types';

import { lagNyBehandling, lagNyTilbakekrevingBehandling, NyBehandlingParams } from '../fagsakApi';
import { doPolling } from './pollingUtils';
import { useRequestPendingContext } from './RequestPendingContext';

export const useLagNyBehandling = (gåTilNyBehandling: (behandling: Behandling) => void) => {
  const { setIsRequestPending } = useRequestPendingContext();

  const { mutate } = useMutation({
    mutationFn: async (valuesToStore: { isTilbakekreving: boolean; params: NyBehandlingParams }) => {
      const response = valuesToStore.isTilbakekreving
        ? await lagNyTilbakekrevingBehandling(valuesToStore.params)
        : await lagNyBehandling(valuesToStore.params);
      return doPolling(response, setIsRequestPending);
    },
    onSuccess: (nyBehandling: Behandling) => {
      gåTilNyBehandling(nyBehandling);
    },
  });

  return {
    lagNyBehandling: mutate,
  };
};
