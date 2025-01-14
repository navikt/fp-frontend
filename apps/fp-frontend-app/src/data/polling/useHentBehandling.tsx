import { useMutation } from '@tanstack/react-query';

import { Behandling } from '@navikt/fp-types';

import { hentBehandling, hentBehandlingTilbakekreving } from '../behandlingApi';
import { notEmpty } from '../notEmpty';
import { useRequestPendingContext } from '../polling/RequestPendingContext';
import { doPolling } from './pollingUtils';

export const useHentBehandling = (
  erTilbakekreving: boolean,
  setBehandling: (behandling: Behandling) => void,
  behandlingUuid?: string,
) => {
  const { setIsRequestPending } = useRequestPendingContext();

  const { mutate: hentOgSettBehandling } = useMutation({
    mutationFn: async () => {
      const response = erTilbakekreving
        ? await hentBehandlingTilbakekreving(notEmpty(behandlingUuid))
        : await hentBehandling(notEmpty(behandlingUuid));
      return doPolling(response, setIsRequestPending);
    },
    onSuccess: setBehandling,
  });

  return {
    hentOgSettBehandling,
  };
};
