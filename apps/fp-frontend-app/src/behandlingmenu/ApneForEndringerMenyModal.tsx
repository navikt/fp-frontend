import React, { FunctionComponent, useCallback } from 'react';
import { MenyApneForEndringerIndex } from '@navikt/fp-sak-meny-apne-for-endringer';
import { BehandlingAppKontekst } from '@navikt/ft-types';
import { Behandling } from '@navikt/fp-types';

import { BehandlingApiKeys, restBehandlingApiHooks } from '../data/behandlingContextApi';

interface OwnProps {
  behandling: BehandlingAppKontekst;
  setBehandling: (behandling?: Behandling) => void;
  setValgtModal: (index: number | undefined) => void;
}

const ApneForEndringerMenyModal: FunctionComponent<OwnProps> = ({ behandling, setBehandling, setValgtModal }) => {
  const { startRequest: åpneForEndringer } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.OPEN_BEHANDLING_FOR_CHANGES,
  );

  const opneBehandlingForEndringer = useCallback(() => {
    åpneForEndringer({
      behandlingUuid: behandling.uuid,
      behandlingVersjon: behandling.versjon,
    }).then(setBehandling);
  }, [behandling]);

  const lukkModal = useCallback(() => setValgtModal(undefined), []);

  return <MenyApneForEndringerIndex apneBehandlingForEndringer={opneBehandlingForEndringer} lukkModal={lukkModal} />;
};

export default ApneForEndringerMenyModal;
