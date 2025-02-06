import { useMutation } from '@tanstack/react-query';

import type { Behandling } from '@navikt/fp-types';

import { type AksjonspunktArgs, type OverstyrteAksjonspunktArgs, useBehandlingApi } from '../behandlingApi';
import { useRequestPendingContext } from '../polling/RequestPendingContext';
import { doPolling, useTaskStatusChecker } from './pollingUtils';

export const useBehandlingPollingOperasjoner = (
  behandling: Behandling,
  onSuccess: (behandling: Behandling) => void,
) => {
  const { pollingApi } = useBehandlingApi(behandling);
  const { onBehandlingSuccess } = useTaskStatusChecker(onSuccess);
  const { setIsRequestPending } = useRequestPendingContext();

  const { mutate: opprettVerge } = useMutation({
    mutationFn: async () => {
      const response = await pollingApi.opprettVerge({
        behandlingUuid: behandling.uuid,
        behandlingVersjon: behandling.versjon,
      });
      return doPolling(response, setIsRequestPending);
    },
    onSuccess: onBehandlingSuccess,
  });

  const { mutate: fjernVerge } = useMutation({
    mutationFn: async () => {
      const response = await pollingApi.fjernVerge({
        behandlingUuid: behandling.uuid,
        behandlingVersjon: behandling.versjon,
      });
      return doPolling(response, setIsRequestPending);
    },
    onSuccess: onBehandlingSuccess,
  });

  const { mutateAsync: lagreAksjonspunkter } = useMutation({
    mutationFn: async (values: AksjonspunktArgs) => {
      const response = await pollingApi.lagreAksjonspunkt(values);
      return doPolling(response, setIsRequestPending);
    },
    onSuccess: onBehandlingSuccess,
  });

  const { mutateAsync: lagreOverstyrteAksjonspunkter } = useMutation({
    mutationFn: async (values: OverstyrteAksjonspunktArgs) => {
      const response = await pollingApi.lagreOverstyrtAksjonspunkt(values);
      return doPolling(response, setIsRequestPending);
    },
    onSuccess: onBehandlingSuccess,
  });

  const { mutate: åpneForEndringer } = useMutation({
    mutationFn: async () => {
      const response = await pollingApi.åpneBehandlingForEndring(behandling.uuid, behandling.versjon);
      return doPolling(response, setIsRequestPending);
    },
    onSuccess: onBehandlingSuccess,
  });

  const { mutate: gjenopptaBehandling } = useMutation({
    mutationFn: async () => {
      const response = await pollingApi.gjenopptaBehandling({
        behandlingUuid: behandling.uuid,
        behandlingVersjon: behandling.versjon,
      });
      return doPolling(response, setIsRequestPending);
    },
    onSuccess: onBehandlingSuccess,
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
