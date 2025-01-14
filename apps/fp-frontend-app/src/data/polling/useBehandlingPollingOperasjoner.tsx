import { useMutation } from '@tanstack/react-query';

import { Behandling } from '@navikt/fp-types';

import { AksjonspunktArgs, OverstyrteAksjonspunktArgs, useBehandlingApi } from '../behandlingApi';
import { useRequestPendingContext } from '../polling/RequestPendingContext';
import { doPolling } from './pollingUtils';

export const useBehandlingPollingOperasjoner = (
  behandling: Behandling,
  onSuccess: (behandling: Behandling) => void,
) => {
  const { pollingApi } = useBehandlingApi(behandling);

  const { setIsRequestPending } = useRequestPendingContext();

  const { mutate: opprettVerge } = useMutation({
    mutationFn: async () => {
      const response = await pollingApi.opprettVerge({
        behandlingUuid: behandling.uuid,
        behandlingVersjon: behandling.versjon,
      });
      return doPolling(response, setIsRequestPending);
    },
    onSuccess,
  });

  const { mutate: fjernVerge } = useMutation({
    mutationFn: async () => {
      const response = await pollingApi.fjernVerge({
        behandlingUuid: behandling.uuid,
        behandlingVersjon: behandling.versjon,
      });
      return doPolling(response, setIsRequestPending);
    },
    onSuccess,
  });

  const { mutateAsync: lagreAksjonspunkter } = useMutation({
    mutationFn: async (values: AksjonspunktArgs) => {
      const response = await pollingApi.lagreAksjonspunkt(values);
      return doPolling(response, setIsRequestPending);
    },
    onSuccess,
  });

  const { mutateAsync: lagreOverstyrteAksjonspunkter } = useMutation({
    mutationFn: async (values: OverstyrteAksjonspunktArgs) => {
      const response = await pollingApi.lagreOverstyrtAksjonspunkt(values);
      return doPolling(response, setIsRequestPending);
    },
    onSuccess,
  });

  const { mutate: åpneForEndringer } = useMutation({
    mutationFn: async () => {
      const response = await pollingApi.åpneBehandlingForEndring(behandling.uuid, behandling.versjon);
      return doPolling(response, setIsRequestPending);
    },
    onSuccess,
  });

  const { mutate: gjenopptaBehandling } = useMutation({
    mutationFn: async () => {
      const response = await pollingApi.gjenopptaBehandling({
        behandlingUuid: behandling.uuid,
        behandlingVersjon: behandling.versjon,
      });
      return doPolling(response, setIsRequestPending);
    },
    onSuccess,
  });

  return {
    lagreAksjonspunkter,
    lagreOverstyrteAksjonspunkter,
    opprettVerge,
    fjernVerge,
    åpneForEndringer,
    gjenopptaBehandling,
  };
};
