import { useEffect, useState, useCallback } from 'react';
import { usePrevious } from '@navikt/ft-ui-komponenter';

import { Behandling } from '@navikt/fp-types';
import { useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';
import { BehandlingApiKeys, requestBehandlingApi, restBehandlingApiHooks } from '../../../data/behandlingContextApi';

export type NyBehandlendeEnhetParams = {
  behandlingUuid: string;
  enhetNavn: string;
  enhetId: string;
  begrunnelse: string;
  behandlingVersjon: string;
};

const useSetBehandlingVedEndring = (setBehandling: (behandling: Behandling) => void, behandling?: Behandling): void => {
  useEffect(() => {
    if (behandling) {
      setBehandling(behandling);
    }
  }, [behandling]);
};

const useOppdaterFagsak = (oppdaterBehandlingVersjon?: (versjon: number) => void, behandling?: Behandling): void => {
  const previousBehandling = usePrevious(behandling);
  useEffect(() => {
    if (
      oppdaterBehandlingVersjon &&
      behandling &&
      previousBehandling &&
      behandling.versjon !== previousBehandling?.versjon
    ) {
      oppdaterBehandlingVersjon(behandling.versjon);
    }
  }, [behandling?.versjon]);
};

export const useBehandling = (behandlingUuid: string, oppdaterBehandlingVersjon?: (versjon: number) => void) => {
  const [behandling, setNyBehandling] = useState<Behandling>();
  const [skalOppdatereFagsakOgBehandling, toggleOppdateringAvFagsakOgBehandling] = useState(true);

  const setBehandling = useCallback(
    (nyBehandling: Behandling) => {
      if (skalOppdatereFagsakOgBehandling) {
        requestBehandlingApi.resetCache();
        requestBehandlingApi.setLinks(nyBehandling.links);
        setNyBehandling(nyBehandling);
      }
    },
    [skalOppdatereFagsakOgBehandling],
  );

  const {
    startRequest: hentBehandling,
    data: behandlingRes,
    state: behandlingState,
  } = restBehandlingApiHooks.useRestApiRunner(BehandlingApiKeys.BEHANDLING);
  useSetBehandlingVedEndring(setBehandling, behandlingRes);

  const hentBehandlingInklId = useCallback((keepData: boolean) => hentBehandling({ behandlingUuid }, keepData), []);

  useEffect(() => {
    hentBehandlingInklId(false);
  }, []);

  useOppdaterFagsak(oppdaterBehandlingVersjon, behandling);

  return {
    behandling,
    behandlingState,
    setBehandling,
    hentBehandling: hentBehandlingInklId,
    toggleOppdateringAvFagsakOgBehandling,
  };
};

export const useLagreAksjonspunkt = (setBehandling: (behandling: Behandling) => void) => {
  const { startRequest: lagreAksjonspunkter, data: apBehandlingRes } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.SAVE_AKSJONSPUNKT,
  );
  useSetBehandlingVedEndring(setBehandling, apBehandlingRes);

  const { startRequest: lagreOverstyrteAksjonspunkter, data: apOverstyrtBehandlingRes } =
    restBehandlingApiHooks.useRestApiRunner(BehandlingApiKeys.SAVE_OVERSTYRT_AKSJONSPUNKT);
  useSetBehandlingVedEndring(setBehandling, apOverstyrtBehandlingRes);

  return {
    lagreAksjonspunkter,
    lagreOverstyrteAksjonspunkter,
  };
};
