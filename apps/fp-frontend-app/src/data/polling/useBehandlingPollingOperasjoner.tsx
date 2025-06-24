import { useMutation } from '@tanstack/react-query';

import type { Behandling } from '@navikt/fp-types';

import { type AksjonspunktArgs, type OverstyrteAksjonspunktArgs, useBehandlingApi } from '../behandlingApi';
import { doPolling, useTaskStatusChecker } from './pollingUtils';
import { useRequestPendingContext } from './RequestPendingContext.tsx';

export const useBehandlingPollingOperasjoner = (
  behandling: Behandling,
  onSuccess: (behandling: Behandling) => void,
) => {
  const { pollingApi } = useBehandlingApi(behandling);
  const { onBehandlingSuccess } = useTaskStatusChecker(onSuccess);
  const { setIsRequestPending } = useRequestPendingContext();

  const { mutate: opprettVergeV1 } = useMutation({
    mutationFn: async () => {
      const response = await pollingApi.opprettVergeV1({
        behandlingUuid: behandling.uuid,
        behandlingVersjon: behandling.versjon,
      });
      return doPolling(response, setIsRequestPending);
    },
    onSuccess: onBehandlingSuccess,
  });

  const { mutate: fjernVergeV1 } = useMutation({
    mutationFn: async () => {
      const response = await pollingApi.fjernVergeV1({
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

  const { mutate: merkSomHaster } = useMutation({
    mutationFn: async () => {
      const response = await pollingApi.merkSomHaster(behandling.uuid, behandling.versjon);
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
    opprettVergeV1,
    fjernVergeV1,
    åpneForEndringer,
    merkSomHaster,
    gjenopptaBehandling,
  };
};
