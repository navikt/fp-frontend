import { MenyApneForEndringerIndex } from '@navikt/fp-sak-meny-apne-for-endringer';
import { Behandling } from '@navikt/fp-types';

import { useBehandlingPollingOperasjoner } from '../../data/polling/useBehandlingPollingOperasjoner';

interface Props {
  behandling: Behandling;
  setBehandling: (behandling?: Behandling) => void;
  lukkModal: () => void;
}

export const ApneForEndringerMenyModal = ({ behandling, setBehandling, lukkModal }: Props) => {
  const api = useBehandlingPollingOperasjoner(behandling, setBehandling);
  return <MenyApneForEndringerIndex apneBehandlingForEndringer={api.åpneForEndringer} lukkModal={lukkModal} />;
};
