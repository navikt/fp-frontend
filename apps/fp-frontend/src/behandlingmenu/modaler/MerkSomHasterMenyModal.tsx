import { useMutation, useQueryClient } from '@tanstack/react-query';

import { MenyMerkSomHasterIndex } from '@navikt/fp-sak-meny-merk-som-haster';
import type { Behandling } from '@navikt/fp-types';

import { getBehandlingApi } from '../../data/behandlingApi';
import { FagsakRel } from '../../data/fagsakApi';

interface Props {
  behandling: Behandling;
  hentOgSettBehandling: () => void;
  lukkModal: () => void;
}

export const MerkSomHasterMenyModal = ({ behandling, hentOgSettBehandling, lukkModal }: Props) => {
  const api = getBehandlingApi(behandling);
  const queryClient = useQueryClient();

  const { mutate: merkSomHaster, isPending } = useMutation({
    mutationFn: () => api.merkSomHaster(behandling.uuid, behandling.versjon),
    onSuccess: () => {
      hentOgSettBehandling();

      void queryClient.invalidateQueries({
        queryKey: [FagsakRel.FETCH_FAGSAK],
      });
      void queryClient.invalidateQueries({
        queryKey: [FagsakRel.FETCH_FAGSAKDATA_FPTILBAKE],
      });
      lukkModal();
    },
  });

  return <MenyMerkSomHasterIndex merkSomHaster={merkSomHaster} lukkModal={lukkModal} isPending={isPending} />;
};
