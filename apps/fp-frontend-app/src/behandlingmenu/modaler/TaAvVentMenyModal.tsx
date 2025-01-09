import { MenyTaAvVentIndex } from '@navikt/fp-sak-meny';
import { Behandling } from '@navikt/fp-types';

import { useBehandlingPollingOperasjoner } from '../../data/useBehandlingPollingOperasjoner';

interface Props {
  behandling: Behandling;
  setBehandling: (behandling: Behandling | undefined) => void;
  lukkModal: () => void;
}

export const TaAvVentMenyModal = ({ behandling, setBehandling, lukkModal }: Props) => {
  const api = useBehandlingPollingOperasjoner(behandling, setBehandling);
  return (
    <MenyTaAvVentIndex
      behandlingVersjon={behandling.versjon}
      taBehandlingAvVent={api.gjenopptaBehandling}
      lukkModal={lukkModal}
    />
  );
};
