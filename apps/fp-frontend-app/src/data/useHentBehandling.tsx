import { useMutation } from '@tanstack/react-query';

import { EventType } from '@navikt/fp-rest-api';
import { useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';
import { Behandling } from '@navikt/fp-types';

import { hentBehandling, hentBehandlingTilbakekreving } from './behandlingApi';
import { notEmpty } from './notEmpty';
import { doPolling } from './useBehandlingPollingOperasjoner';

export const useHentBehandling = (
  erTilbakekreving: boolean,
  setBehandling: (behandling: Behandling) => void,
  behandlingUuid?: string,
) => {
  const { addErrorMessage } = useRestApiErrorDispatcher();

  const { mutate: hentOgSettBehandling } = useMutation({
    mutationFn: async () => {
      const response = erTilbakekreving
        ? await hentBehandlingTilbakekreving(notEmpty(behandlingUuid))
        : await hentBehandling(notEmpty(behandlingUuid));
      return doPolling(response);
    },
    onSuccess: setBehandling,
    onError: error => {
      addErrorMessage({ type: EventType.REQUEST_ERROR, feilmelding: error?.message });
    },
  });

  return {
    hentOgSettBehandling,
  };
};
