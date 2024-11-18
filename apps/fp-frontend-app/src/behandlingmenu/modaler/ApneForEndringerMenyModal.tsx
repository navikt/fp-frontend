import React, { FunctionComponent, useCallback } from 'react';
import { MenyApneForEndringerIndex } from '@navikt/fp-sak-meny-apne-for-endringer';
import { Behandling, BehandlingAppKontekst } from '@navikt/fp-types';

import { BehandlingApiKeys, restBehandlingApiHooks } from '../../data/behandlingContextApi';

interface OwnProps {
  behandling: BehandlingAppKontekst;
  setBehandling: (behandling?: Behandling) => void;
  lukkModal: () => void;
}

const ApneForEndringerMenyModal: FunctionComponent<OwnProps> = ({ behandling, setBehandling, lukkModal }) => {
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

export default ApneForEndringerMenyModal;
