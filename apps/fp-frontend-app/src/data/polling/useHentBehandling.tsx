import { useMutation } from '@tanstack/react-query';

import type { Behandling } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { hentBehandling, hentBehandlingTilbakekreving } from '../behandlingApi';
import { useRequestPendingContext } from '../polling/RequestPendingContext';
import { doPolling, useTaskStatusChecker } from './pollingUtils';

export const useHentBehandling = (
  erTilbakekreving: boolean,
  setBehandling: (behandling: Behandling) => void,
  behandlingUuid?: string,
) => {
  const { setIsRequestPending } = useRequestPendingContext();
  const { onBehandlingSuccess } = useTaskStatusChecker(setBehandling);

  const { mutate: hentOgSettBehandling } = useMutation({
    mutationFn: async () => {
      const response = erTilbakekreving
        ? await hentBehandlingTilbakekreving(notEmpty(behandlingUuid))
        : await hentBehandling(notEmpty(behandlingUuid));
      return doPolling(response, setIsRequestPending);
    },
    onSuccess: onBehandlingSuccess,
  });

  return {
    hentOgSettBehandling,
  };
};
