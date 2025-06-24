import { useMutation } from '@tanstack/react-query';

import { MenyMerkSomHasterIndex } from '@navikt/fp-sak-meny-merk-som-haster';
import type { Behandling } from '@navikt/fp-types';

import { useBehandlingApi } from '../../data/behandlingApi';

interface Props {
  behandling: Behandling;
  hentOgSettBehandling: () => void;
  lukkModal: () => void;
}

export const MerkSomHasterMenyModal = ({ behandling, hentOgSettBehandling, lukkModal }: Props) => {
  const api = useBehandlingApi(behandling);

  const { mutate: merkSomHaster } = useMutation({
    mutationFn: () => api.merkSomHaster(behandling.uuid, behandling.versjon),
    onSuccess: () => hentOgSettBehandling(),
  });

  return <MenyMerkSomHasterIndex merkSomHaster={merkSomHaster} lukkModal={lukkModal} />;
};
