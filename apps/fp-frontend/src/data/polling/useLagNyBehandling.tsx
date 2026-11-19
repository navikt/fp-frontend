import { useMutation } from '@tanstack/react-query';

import type { Behandling, BehandlingArsakType, BehandlingType, NyBehandlingDto } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { lagNyBehandling, lagNyTilbakekrevingBehandling, type NyBehandlingParams } from '../fagsakApi';
import { doPolling, useTaskStatusChecker } from './pollingUtils';
import { useRequestPendingContext } from './RequestPendingContext';

const tilNyBehandlingDto = (params: NyBehandlingParams): NyBehandlingDto => ({
  saksnummer: params.saksnummer,
  behandlingType: notEmpty(params.behandlingType) as BehandlingType,
  behandlingArsakType: params.behandlingArsakType as BehandlingArsakType | undefined,
  nyBehandlingEtterKlage: params.nyBehandlingEtterKlage,
});

export const useLagNyBehandling = (gåTilNyBehandling: (behandling: Behandling) => void) => {
  const { setIsRequestPending } = useRequestPendingContext();
  const { onBehandlingSuccess } = useTaskStatusChecker(gåTilNyBehandling);

  const { mutate } = useMutation({
    mutationFn: async (valuesToStore: { isTilbakekreving: boolean; params: NyBehandlingParams }) => {
      const response = valuesToStore.isTilbakekreving
        ? await lagNyTilbakekrevingBehandling(valuesToStore.params)
        : await lagNyBehandling(tilNyBehandlingDto(valuesToStore.params));
      return doPolling(response, setIsRequestPending);
    },
    onSuccess: onBehandlingSuccess,
  });

  return {
    lagNyBehandling: mutate,
  };
};
