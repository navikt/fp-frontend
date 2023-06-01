import React, { FunctionComponent, useCallback } from 'react';
import { MenyTaAvVentIndex } from '@navikt/ft-sak-meny';
import { Behandling, BehandlingAppKontekst } from '@navikt/fp-types';

import { BehandlingApiKeys, restBehandlingApiHooks } from '../../data/behandlingContextApi';

interface OwnProps {
  behandling: BehandlingAppKontekst;
  setBehandling: (behandling: Behandling | undefined) => void;
  lukkModal: () => void;
}

const TaAvVentMenyModal: FunctionComponent<OwnProps> = ({ behandling, setBehandling, lukkModal }) => {
  const { startRequest: taBehandlingAvVent } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.RESUME_BEHANDLING,
  );

  const taBehandlingAvVentOgOppdaterBehandling = useCallback(() => {
    taBehandlingAvVent({
      behandlingUuid: behandling.uuid,
      behandlingVersjon: behandling.versjon,
    }).then(setBehandling);
  }, [behandling]);

  return (
    <MenyTaAvVentIndex
      behandlingVersjon={behandling.versjon}
      taBehandlingAvVent={taBehandlingAvVentOgOppdaterBehandling}
      lukkModal={lukkModal}
    />
  );
};

export default TaAvVentMenyModal;
