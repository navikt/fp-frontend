import { MenyTaAvVentIndex } from '@navikt/fp-sak-meny';
import { Behandling, BehandlingAppKontekst } from '@navikt/fp-types';

import { BehandlingApiKeys, restBehandlingApiHooks } from '../../data/behandlingContextApi';

interface Props {
  behandling: BehandlingAppKontekst;
  setBehandling: (behandling: Behandling | undefined) => void;
  lukkModal: () => void;
}

export const TaAvVentMenyModal = ({ behandling, setBehandling, lukkModal }: Props) => {
  const { startRequest: taBehandlingAvVent } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.RESUME_BEHANDLING,
  );

  const taBehandlingAvVentOgOppdaterBehandling = () => {
    taBehandlingAvVent({
      behandlingUuid: behandling.uuid,
      behandlingVersjon: behandling.versjon,
    }).then(setBehandling);
  };

  return (
    <MenyTaAvVentIndex
      behandlingVersjon={behandling.versjon}
      taBehandlingAvVent={taBehandlingAvVentOgOppdaterBehandling}
      lukkModal={lukkModal}
    />
  );
};
