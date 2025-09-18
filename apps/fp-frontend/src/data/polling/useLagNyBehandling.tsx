import { useMutation } from '@tanstack/react-query';

import type { Behandling } from '@navikt/fp-types';

import { lagNyBehandling, lagNyTilbakekrevingBehandling, type NyBehandlingParams } from '../fagsakApi';
import { doPolling, useTaskStatusChecker } from './pollingUtils';
import { useRequestPendingContext } from './RequestPendingContext';

export const useLagNyBehandling = (gåTilNyBehandling: (behandling: Behandling) => void) => {
  const { setIsRequestPending } = useRequestPendingContext();
  const { onBehandlingSuccess } = useTaskStatusChecker(gåTilNyBehandling);

  const { mutate } = useMutation({
    mutationFn: async (valuesToStore: { isTilbakekreving: boolean; params: NyBehandlingParams }) => {
      const response = valuesToStore.isTilbakekreving
        ? await lagNyTilbakekrevingBehandling(valuesToStore.params)
        : await lagNyBehandling(valuesToStore.params);
      return doPolling(response, setIsRequestPending);
    },
    onSuccess: onBehandlingSuccess,
  });

  return {
    lagNyBehandling: mutate,
  };
};
