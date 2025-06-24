import { useMutation, useQueryClient } from '@tanstack/react-query';

import { MenyMerkSomHasterIndex } from '@navikt/fp-sak-meny-merk-som-haster';
import type { Behandling } from '@navikt/fp-types';

import { useBehandlingApi } from '../../data/behandlingApi';
import { FagsakRel } from '../../data/fagsakApi';

interface Props {
  behandling: Behandling;
  lukkModal: () => void;
}

export const MerkSomHasterMenyModal = ({ behandling, lukkModal }: Props) => {
  const api = useBehandlingApi(behandling);
  const queryClient = useQueryClient();

  const { mutate: merkSomHaster } = useMutation({
    mutationFn: () => api.merkSomHaster(behandling.uuid, behandling.versjon),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [FagsakRel.FETCH_FAGSAK],
      });
      queryClient.invalidateQueries({
        queryKey: [FagsakRel.FETCH_FAGSAKDATA_FPTILBAKE],
      });
    },
  });

  return <MenyMerkSomHasterIndex merkSomHaster={merkSomHaster} lukkModal={lukkModal} />;
};
