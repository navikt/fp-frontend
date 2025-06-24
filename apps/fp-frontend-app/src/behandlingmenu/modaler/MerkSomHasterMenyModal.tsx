import { MenyMerkSomHasterIndex } from '@navikt/fp-sak-meny-merk-som-haster';
import type { Behandling } from '@navikt/fp-types';

import { useBehandlingPollingOperasjoner } from '../../data/polling/useBehandlingPollingOperasjoner';

interface Props {
  behandling: Behandling;
  setBehandling: (behandling?: Behandling) => void;
  lukkModal: () => void;
}

export const MerkSomHasterMenyModal = ({ behandling, setBehandling, lukkModal }: Props) => {
  const api = useBehandlingPollingOperasjoner(behandling, setBehandling);
  return <MenyMerkSomHasterIndex merkSomHaster={api.merkSomHaster} lukkModal={lukkModal} />;
};
