import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { MenyVergeIndex } from '@navikt/fp-sak-meny';
import { type Behandling, type BehandlingAppKontekst, VergeBehandlingmenyValg } from '@navikt/fp-types';

import { BehandlingRel, useBehandlingApi } from '../../data/behandlingApi';
import { FagsakRel } from '../../data/fagsakApi';
import { useKodeverk } from '../../data/useKodeverk.tsx';

interface Props {
  behandlingAppKontekst: BehandlingAppKontekst;
  behandling: Behandling;
  hentOgSettBehandling: () => void;
  lukkModal: () => void;
}

export const VergeMenyModal = ({ behandlingAppKontekst, behandling, hentOgSettBehandling, lukkModal }: Props) => {
  const vergeMenyvalg = behandlingAppKontekst.behandlingTillatteOperasjoner?.vergeBehandlingsmeny;
  const alleKodeverk = useKodeverk(behandling.type);
  const queryClient = useQueryClient();
  const onBehandlingSuccess = () => {
    hentOgSettBehandling();
    queryClient.invalidateQueries({
      queryKey: [FagsakRel.FETCH_FAGSAK],
    });
    queryClient.invalidateQueries({
      queryKey: [FagsakRel.FETCH_FAGSAKDATA_FPTILBAKE],
    });
    queryClient.invalidateQueries({
      queryKey: [BehandlingRel.VERGE],
    });
    queryClient.invalidateQueries({
      queryKey: [BehandlingRel.VERGE_HENT],
    });
  };

  const behandlingApi = useBehandlingApi(behandling);
  const { mutate: opprettVergeV2 } = useMutation({
    mutationFn: behandlingApi.verge.opprettVergeV2,
    onSuccess: onBehandlingSuccess,
  });

  const { mutate: fjernVergeV2 } = useMutation({
    mutationFn: behandlingApi.verge.fjernVergeV2,
    onSuccess: onBehandlingSuccess,
  });

  const { data: verge } = useQuery(behandlingApi.verge.hent(behandling));
  return (
    <MenyVergeIndex
      type={VergeBehandlingmenyValg.OPPRETT === vergeMenyvalg ? 'OPPRETT' : 'FJERN'}
      verge={verge}
      opprettVerge={opprettVergeV2}
      fjernVerge={fjernVergeV2}
      lukkModal={lukkModal}
      alleKodeverk={alleKodeverk}
    />
  );
};
