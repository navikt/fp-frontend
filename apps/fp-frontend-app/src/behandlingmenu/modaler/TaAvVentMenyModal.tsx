import { MenyTaAvVentIndex } from '@navikt/fp-sak-meny';
import type { Behandling } from '@navikt/fp-types';

import { useBehandlingPollingOperasjoner } from '../../data/polling/useBehandlingPollingOperasjoner';

interface Props {
  behandling: Behandling;
  setBehandling: (behandling: Behandling | undefined) => void;
  lukkModal: () => void;
}

export const TaAvVentMenyModal = ({ behandling, setBehandling, lukkModal }: Props) => {
  const api = useBehandlingPollingOperasjoner(behandling, setBehandling);
  return <MenyTaAvVentIndex taBehandlingAvVent={api.gjenopptaBehandling} lukkModal={lukkModal} />;
};
