import React, { useCallback } from 'react';
import { MenyApneForEndringerIndex } from '@navikt/fp-sak-meny-apne-for-endringer';
import { Behandling, BehandlingAppKontekst } from '@navikt/fp-types';

import { BehandlingApiKeys, restBehandlingApiHooks } from '../../data/behandlingContextApi';

interface Props {
  behandling: BehandlingAppKontekst;
  setBehandling: (behandling?: Behandling) => void;
  lukkModal: () => void;
}

export const ApneForEndringerMenyModal = ({ behandling, setBehandling, lukkModal }: Props) => {
  const { startRequest: åpneForEndringer } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.OPEN_BEHANDLING_FOR_CHANGES,
  );

  const opneBehandlingForEndringer = useCallback(() => {
    åpneForEndringer({
      behandlingUuid: behandling.uuid,
      behandlingVersjon: behandling.versjon,
    }).then(setBehandling);
  }, [behandling]);

  return <MenyApneForEndringerIndex apneBehandlingForEndringer={opneBehandlingForEndringer} lukkModal={lukkModal} />;
};
